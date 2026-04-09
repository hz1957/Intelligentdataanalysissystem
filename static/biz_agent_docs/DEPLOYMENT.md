# 部署指南

## 1. 目标

当前生产链路不再让浏览器直连 Runtime 容器，也不依赖 `apps/web` 里的旧 `runtime-proxy` 路由做 PTY 转发。

推荐拓扑如下：

```text
Browser
  -> web (3000)
     -> /api/sessions 返回 runtime_proxy_url
  -> runtime-gateway (3200)
     -> 按 sessionId + token 查库
     -> 转发到 container_leases.runtime_url
  -> runtime (3100, 动态容器)
     -> /session/init 等管理接口
     -> 其余请求转发到 opencode serve (默认 4096)
```

## 2. 组件职责

### web

- 负责登录、Session 管理、Agent App 管理。
- `GET /api/sessions` 会返回带签名的 `runtime_proxy_url`。
- Session 页面优先把 `runtime_proxy_url` 传给 iframe，而不是旧的 `/api/runtime-proxy/...`。
- Session 页面也提供手动同步入口，调用 `POST /api/sessions/sync`。

对应实现：

- `apps/web/app/api/sessions/route.ts`
- `apps/web/app/(dashboard)/sessions/[sessionId]/page.tsx`

### runtime-gateway

- 对浏览器暴露统一入口，支持 HTTP、SSE、WebSocket。
- 按 `sessionId + token` 校验访问，再查 `sessions` 和 `container_leases`，定位最终 `runtime_url`。
- 这是 PTY、事件流和 OpenCode API 的生产入口。
- 对代理到 Runtime 的写请求做节流后同步触发，缩短 Session cwd 落盘延迟。

对应实现：

- `packages/runtime-gateway/src/index.ts`
- `packages/shared/src/runtime-gateway-token.ts`

### runtime

- 提供管理接口，如 `/session/init`、`/session/runtime-status`、`/files/*`、`/sync/*`。
- 启动并守护 `opencode serve`。
- 对非管理路径统一代理到 opencode。
- 负责 Session cwd 的手动同步、idle 自动同步，以及 Runtime 重建后的 RustFS 恢复。

对应实现：

- `packages/runtime/src/index.ts`
- `packages/runtime/src/routes/session.ts`
- `packages/runtime/src/lib/opencode-service.ts`

## 3. 两种部署模式

### 模式 A：单 Runtime 调试

适合本地联调或单机排查。

- 不设置 `RUNTIME_IMAGE`
- `web` 会把 lease 指向 `RUNTIME_URL`
- 需要你手工启动一个 `packages/runtime`

### 模式 B：生产推荐

适合多用户、动态容器、PTY 场景。

- `web` 设置 `RUNTIME_IMAGE`
- `web` 通过容器编排启动 Runtime 容器，并把 `runtime_url` 记录到 `container_leases`
- 浏览器统一只访问 `runtime-gateway`

说明：

- `runtime-gateway` 必须能访问 `container_leases.runtime_url`
- `runtime-gateway` 的公开地址必须由浏览器可达
- `runtime-gateway` 与 `web` 必须使用同一套签名密钥

## 4. 必要环境变量

### 全局共享

| 变量                                  | 用途                     | 备注                            |
| ------------------------------------- | ------------------------ | ------------------------------- |
| `POSTGRES_HOST/PORT/DB/USER/PASSWORD` | Session、lease、用户数据 | `web` 和 `runtime-gateway` 必填 |
| `RUSTFS_ENDPOINT`                     | 对象存储                 | `web`、`runtime` 使用           |
| `RUSTFS_ACCESS_KEY`                   | 对象存储账号             | 同上                            |
| `RUSTFS_SECRET_KEY`                   | 对象存储密码             | 同上                            |
| `RUSTFS_BUCKET`                       | 对象存储 bucket          | 同上                            |

### web

| 变量                                               | 用途                          | 建议值                                          |
| -------------------------------------------------- | ----------------------------- | ----------------------------------------------- |
| `RUNTIME_GATEWAY_PUBLIC_URL`                       | 返回给浏览器的公开网关地址    | `https://agent.example.com/api/runtime-gateway` |
| `RUNTIME_GATEWAY_SECRET`                           | 生成 `runtime_proxy_url` 签名 | 与 gateway 保持一致                             |
| `RUNTIME_IMAGE`                                    | 动态启动 Runtime 容器镜像     | 生产建议设置                                    |
| `RUNTIME_URL`                                      | 单 Runtime 调试地址           | 仅模式 A 使用                                   |
| `RUNTIME_HOST/RUNTIME_PORT/RUNTIME_CONTAINER_PORT` | 容器端口解析                  | 使用动态容器时需要和编排一致                    |
| `RUNTIME_INIT_MAX_ATTEMPTS`                        | Runtime 初始化重试次数        | 默认 `12`                                       |
| `RUNTIME_INIT_RETRY_DELAY_MS`                      | Runtime 初始化重试间隔        | 默认 `500`                                      |

### runtime-gateway

| 变量                                | 用途                     | 建议值                      |
| ----------------------------------- | ------------------------ | --------------------------- |
| `RUNTIME_GATEWAY_PORT`              | 网关监听端口             | 默认 `3200`                 |
| `RUNTIME_GATEWAY_BASE_PATH`         | 网关路径前缀             | 默认 `/api/runtime-gateway` |
| `RUNTIME_GATEWAY_PUBLIC_URL`        | 生成对外 URL 时使用      | 与实际对外地址一致          |
| `RUNTIME_GATEWAY_SECRET`            | 校验 Session 签名        | 必须与 `web` 一致           |
| `RUNTIME_GATEWAY_TOKEN_TTL_SECONDS` | token 过期时间           | 默认 `43200`                |
| `RUNTIME_GATEWAY_SYNC_DEBOUNCE_MS`  | 写请求触发同步的节流时间 | 默认 `5000`                 |

### runtime

| 变量                            | 用途                           | 建议值                        |
| ------------------------------- | ------------------------------ | ----------------------------- |
| `PORT`                          | Runtime HTTP 端口              | 默认 `3100`                   |
| `RUNTIME_WORKSPACE_ROOT`        | Session 工作目录根路径         | 默认 `/workspace/sessions`    |
| `RUNTIME_OPENCODE_CONFIG_ROOT`  | OpenCode 配置目录              | 默认 `/root/.config/opencode` |
| `RUNTIME_AUTO_SYNC_ENABLED`     | 是否开启 Session idle 自动同步 | 默认 `true`                   |
| `RUNTIME_AUTO_SYNC_POLL_MS`     | workspace 变更扫描周期         | 默认 `15000`                  |
| `RUNTIME_AUTO_SYNC_IDLE_MS`     | 进入同步前的空闲窗口           | 默认 `30000`                  |
| `OPENCODE_HOST`                 | `opencode serve` 监听地址      | 默认 `127.0.0.1`              |
| `OPENCODE_PORT`                 | `opencode serve` 监听端口      | 默认 `4096`                   |
| `OPENCODE_START_MAX_ATTEMPTS`   | 等待 opencode 健康检查次数     | 默认 `60`                     |
| `OPENCODE_START_RETRY_DELAY_MS` | 等待 opencode 健康检查间隔     | 默认 `500`                    |

## 5. Session CWD 同步

部署时建议把 Session cwd 同步能力一起看作 Runtime 的基本能力，而不是调试附加项。

当前行为：

- Session 页面支持手动同步
- Runtime 会在 idle 窗口内自动同步
- Runtime 初始化 Session 时会从 RustFS 拉回最近一次同步结果
- 同步目标前缀为 `sessions/apps/{appId}/sessions/{userId}-{sessionId}/`
- 默认忽略 `node_modules`、`.git`、`__pycache__`、`venv`、`.venv`、`dist`、`build`、`.DS_Store`

更多细节见 `docs/SESSION_SYNC.md`。

## 6. Docker Compose

仓库根目录的 `docker-compose.yml` 当前提供：

- `postgres`
- `rustfs`
- `web`
- `runtime-gateway`

启动：

```bash
docker compose up -d postgres rustfs web runtime-gateway
```

说明：

- 这份 compose 主要负责基础设施、`web` 和 `runtime-gateway`
- 生产 Runtime 容器由 `web` 侧编排逻辑按需拉起，不是 compose 常驻服务
- Runtime 镜像可使用仓库内的 `Dockerfile.runtime`

构建镜像示例：

```bash
docker build -f Dockerfile.runtime -t agent-runtime:latest .
docker build -f Dockerfile.web -t agent-web:latest .
docker build -f Dockerfile.runtime-gateway -t agent-runtime-gateway:latest .
```

## 7. 反向代理建议

最关键的两点：

1. `RUNTIME_GATEWAY_PUBLIC_URL` 必须是浏览器真实访问到的地址，不能在生产里写 `127.0.0.1`
2. 反向代理必须允许 WebSocket upgrade

Nginx 示例：

```nginx
map $http_upgrade $connection_upgrade {
  default upgrade;
  '' close;
}

server {
  listen 443 ssl;
  server_name agent.example.com;

  location /api/runtime-gateway/ {
    proxy_pass http://runtime-gateway:3200/api/runtime-gateway/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }

  location / {
    proxy_pass http://web:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## 8. 上线前检查清单

- `web` 和 `runtime-gateway` 的 `RUNTIME_GATEWAY_SECRET` 完全一致
- `RUNTIME_GATEWAY_PUBLIC_URL` 是浏览器可访问的正式域名
- 反向代理已开启 WebSocket upgrade
- `runtime-gateway` 能访问数据库
- `runtime-gateway` 能访问 `container_leases.runtime_url`
- Runtime 镜像内已包含 `opencode` 可执行文件
- Runtime 容器内能访问 RustFS
- `GET /api/sessions?sessionId=...` 返回 `runtime_proxy_url`
- `POST /api/sessions/sync` 能返回同步结果
- `GET /sync/list?prefix=sessions/apps/...` 能看到同步对象
- 创建终端时，浏览器网络面板中 `POST /pty` 返回 `200`，`/pty/.../connect` 返回 `101 Switching Protocols`

## 9. 本地端到端联调

### 基础设施

```bash
docker compose up -d postgres rustfs
```

### web

```bash
env \
  POSTGRES_HOST=127.0.0.1 \
  POSTGRES_PORT=5432 \
  POSTGRES_DB=agent_platform \
  POSTGRES_USER=postgres \
  POSTGRES_PASSWORD=postgres \
  RUSTFS_ENDPOINT=http://127.0.0.1:9000 \
  RUSTFS_ACCESS_KEY=minioadmin \
  RUSTFS_SECRET_KEY=minioadmin \
  RUSTFS_BUCKET=agent-platform-bucket \
  RUNTIME_GATEWAY_PUBLIC_URL=http://127.0.0.1:3200/api/runtime-gateway \
  RUNTIME_GATEWAY_SECRET=dev-runtime-gateway-secret \
  pnpm --filter @agent-platform/web dev
```

### runtime-gateway

```bash
env \
  POSTGRES_HOST=127.0.0.1 \
  POSTGRES_PORT=5432 \
  POSTGRES_DB=agent_platform \
  POSTGRES_USER=postgres \
  POSTGRES_PASSWORD=postgres \
  RUNTIME_GATEWAY_PORT=3200 \
  RUNTIME_GATEWAY_BASE_PATH=/api/runtime-gateway \
  RUNTIME_GATEWAY_PUBLIC_URL=http://127.0.0.1:3200/api/runtime-gateway \
  RUNTIME_GATEWAY_SECRET=dev-runtime-gateway-secret \
  pnpm --filter @agent-platform/runtime-gateway dev
```

### runtime

```bash
env \
  PORT=3101 \
  POSTGRES_HOST=127.0.0.1 \
  POSTGRES_PORT=5432 \
  POSTGRES_DB=agent_platform \
  POSTGRES_USER=postgres \
  POSTGRES_PASSWORD=postgres \
  RUSTFS_ENDPOINT=http://127.0.0.1:9000 \
  RUSTFS_ACCESS_KEY=minioadmin \
  RUSTFS_SECRET_KEY=minioadmin \
  RUSTFS_BUCKET=agent-platform-bucket \
  RUNTIME_WORKSPACE_ROOT=/tmp/runtime-workspaces \
  RUNTIME_OPENCODE_CONFIG_ROOT=/tmp/runtime-opencode-config \
  pnpm --filter @agent-platform/runtime dev
```

然后把测试 session 指向 `runtime_url=http://127.0.0.1:3101` 即可走完整链路。
