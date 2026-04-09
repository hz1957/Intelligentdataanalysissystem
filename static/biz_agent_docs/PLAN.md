# biz-agent-platform-v2 项目初始化计划

## 技术栈

| 类别     | 技术                               |
| -------- | ---------------------------------- |
| Monorepo | pnpm workspaces                    |
| 前端     | Next.js 15 (App Router) + React 19 |
| 样式     | TailwindCSS v4 + shadcn/ui         |
| API      | Next.js API Routes (App Router)    |
| 数据库   | PostgreSQL 16 + postgres.js        |
| 对象存储 | RustFS (S3 API)                    |
| 容器     | Docker API                         |
| Runtime  | Hono + Node.js 22                  |

---

## 项目结构

```
biz-agent-platform-v2/
├── apps/
│   └── web/                           # Next.js (前端 + API + Docker 管理)
│       ├── app/
│       │   ├── (auth)/               # 登录
│       │   │   └── login/page.tsx
│       │   ├── (dashboard)/          # 仪表盘
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx         # 首页
│       │   │   ├── agent-apps/     # Agent App
│       │   │   │   ├── page.tsx    # 列表
│       │   │   │   └── [appId]/    # 详情/创建
│       │   │   └── sessions/       # Session
│       │   │       ├── page.tsx    # 列表
│       │   │       └── [sessionId]/ # 会话页 (OpenCodeUI iframe)
│       │   └── api/                  # API Routes
│       │       ├── auth/[...nextauth]/route.ts
│       │       ├── agent-apps/route.ts
│       │       ├── sessions/route.ts
│       │       ├── runtime-proxy/route.ts. #动态路由到正确的runtime容器中的api接口
│       │       └── containers/route.ts
│       ├── lib/
│       │   ├── db.ts                # postgres.js 连接
│       │   ├── auth.ts              # cookie session
│       │   ├── container-manager.ts # Docker API
│       │   └── rustfs.ts           # RustFS S3 操作
│       ├── components/
│       │   ├── ui/                  # shadcn/ui
│       │   ├── agent-app-card.tsx
│       │   ├── session-list.tsx
│       │   └── opencode-iframe.tsx
│       └── package.json
├── packages/
│   ├── runtime/                     # Runtime API (执行面)
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── lib/
│   │   │   │   ├── runtime-service.ts
│   │   │   │   ├── workspace.ts
│   │   │   │   ├── file-api.ts
│   │   │   │   └── object-store.ts
│   │   │   └── routes/
│   │   │       ├── session.ts
│   │   │       ├── files.ts
│   │   │       └── sync.ts
│   │   └── package.json
├── docker-compose.yml
├── pnpm-workspace.yaml
└── package.json
```

---

## 数据库 Schema

```sql
CREATE TABLE users (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username   VARCHAR(255) UNIQUE NOT NULL,
    password   VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE agent_apps (
    app_id        VARCHAR(255) PRIMARY KEY,
    user_id       UUID REFERENCES users(id),
    config_prefix VARCHAR(500) NOT NULL,
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE sessions (
    session_id      VARCHAR(255) PRIMARY KEY,
    app_id         VARCHAR(255) REFERENCES agent_apps(app_id),
    user_id        UUID REFERENCES users(id),
    container_key  VARCHAR(255) NOT NULL,
    workspace_path VARCHAR(500) NOT NULL,
    status         VARCHAR(50) DEFAULT 'pending',
    title          VARCHAR(255),
    created_at     TIMESTAMPTZ DEFAULT NOW(),
    last_used_at   TIMESTAMPTZ
);

CREATE TABLE container_leases (
    container_key VARCHAR(255) PRIMARY KEY,
    app_id       VARCHAR(255) NOT NULL,
    user_id      UUID REFERENCES users(id),
    status       VARCHAR(50) DEFAULT 'stopped',
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW(),
    container_id VARCHAR(255),
    runtime_host VARCHAR(255),
    runtime_port INTEGER,
    runtime_url  VARCHAR(500),
    last_started_at TIMESTAMPTZ
);
```

---

## RustFS 存储结构

```

agent-platform-bucket/
├── configs/apps/{appId}/
│   ├── global/
│   ├──── opencode.json
│   ├──── AGENTS.md
│   └──── ... (其他配置文件)
│   ├── app/
│   ├──── .opencode/
│   ├──── AGENTS.md
│   └──── ... (其他配置文件)
└── sessions/apps/{appId}
    └── sessions/{userId}-{sessionId}/
```

---

## runtime编排规则

appid+userid组合分配一个runtime容器，后续所有的session都在这个容器中进行

---

## opencode

runtime中需要运行 opencode serve --port 4096
但是要在 ~/.config/opencode/ 配置拉取完成后进行

---

## Session 初始化流程

```
1. POST /api/sessions → server 创建 session 记录
2. server 调用 Docker API → 创建/启动 runtime 容器
3. runtime 初始化 workspace：
   - 创建 ~/.config/opencode/
   - 从 RustFS 拉取global配置
   - 创建 /workspace/sessions/{sessionId}/
   - 从 RustFS 拉取app配置
4. 前端跳转 /sessions/{sessionId}
5. 渲染 OpenCodeUI iframe：
   <iframe src="{runtimeUrl}/?opencodeUrl={runtimeUrl}&dir={workspacePath}#/" />
```

---

## Docker 服务

| 服务       | 端口       | 说明                                             |
| ---------- | ---------- | ------------------------------------------------ |
| postgres   | 5432       | 数据库                                           |
| rustfs     | 9000, 9001 | 对象存储                                         |
| web        | 3000       | Next.js (前端 + API)                             |
| runtime-\* | 3100+      | Runtime 容器 (按需创建) label上标记 appid userid |

---

## 实施阶段

| 阶段        | 任务             | 交付物                                          |
| ----------- | ---------------- | ----------------------------------------------- |
| **Phase 1** | Monorepo 基线    | pnpm-workspace.yaml, tsconfig, eslint, prettier |
| **Phase 3** | runtime 包       | Workspace, 文件 API, RustFS sync                |
| **Phase 4** | web - 基础框架   | Next.js 项目, 布局, shadcn/ui                   |
| **Phase 5** | web - API Routes | Auth, Agent Apps, Sessions, Containers          |
| **Phase 6** | web - 页面       | 登录, App 列表, Session 会话页                  |
| **Phase 7** | Docker           | Dockerfile, docker-compose.yml                  |

---

## OpenCodeUI iframe 集成

OpenCodeUI静态文件已提供，可以在web中集成
OpenCodeUI 支持通过 URL 参数嵌入：

```html
<iframe
  src="/opencode/?opencodeUrl=http://backend:4096"
  width="100%"
  height="800px"
  frameborder="0"
></iframe>
```

支持的 URL 参数：
| 参数 | 说明 |
|------|------|
| `opencodeUrl` | OpenCode 后端地址（推荐） |

Directory 通过 hash 路由传递：`#/?dir=/workspace/sessions/{sessionId}`

---

## 配置组装流程

runtime 初始化 session workspace 时，从 RustFS 组装配置：

1. 拉取 `configs/apps/{appId}/app/` 下所有文件复制到 `/workspace/sessions/{sessionId}/`
2. 然后调用OpenCodeUI打开界面

## session cwd的文件同步到rustfs

1. 触发时机：runtime提供同步接口，周期性判断空闲状态自动同步，ui界面上也可以由用户主动同步
2. 储存位置：agent-platform-bucket/sessions/apps/{appId}/sessions/{userId}-{sessionId}/
3. 过滤忽略：`node_modules`, `.git`, `__pycache__`, `venv`, `.venv`, `dist`, `build`, `.DS_Store` 等常见可忽略的文件
