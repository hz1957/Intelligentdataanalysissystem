# Session CWD 同步说明

## 1. 目标

Session 工作目录会同步到 RustFS，既用于持久化，也用于 Runtime 重建后的恢复。

当前同步目标前缀：

```text
agent-platform-bucket/
  sessions/apps/{appId}/sessions/{userId}-{sessionId}/
```

## 2. 当前行为

### 手动同步

- Session 页面提供“立即同步”按钮
- `web` 调用 `POST /api/sessions/sync`
- `web` 再转发到对应 Runtime 的 `POST /sync/session`

### 自动同步

- Runtime 会周期性扫描当前已初始化的 Session workspace
- 文件树发生变化后，进入空闲窗口才执行同步
- `runtime-gateway` 还会对代理到 Runtime 的写请求做一次节流触发，缩短落盘延迟

### 初始化恢复

- `POST /session/init` 会先拉取 app 配置
- 然后再拉取该 Session 已同步的 RustFS 前缀
- 因此 Runtime 或容器重建后，Session cwd 可以恢复到最近一次同步结果

## 3. 忽略规则

同步时默认忽略以下常见目录或文件段：

- `node_modules`
- `.git`
- `__pycache__`
- `venv`
- `.venv`
- `dist`
- `build`
- `.DS_Store`

说明：

- 忽略规则按路径段匹配
- 被忽略内容不会上传
- 重新初始化 Session 时，被忽略内容也不会从 RustFS 恢复

## 4. 关键环境变量

### runtime

| 变量                        | 说明                   | 默认值  |
| --------------------------- | ---------------------- | ------- |
| `RUNTIME_AUTO_SYNC_ENABLED` | 是否开启 idle 自动同步 | `true`  |
| `RUNTIME_AUTO_SYNC_POLL_MS` | workspace 变更扫描周期 | `15000` |
| `RUNTIME_AUTO_SYNC_IDLE_MS` | 进入同步前的空闲窗口   | `30000` |

### runtime-gateway

| 变量                               | 说明                     | 默认值 |
| ---------------------------------- | ------------------------ | ------ |
| `RUNTIME_GATEWAY_SYNC_DEBOUNCE_MS` | 写请求触发同步的节流时间 | `5000` |

## 5. 接口

### web

```http
POST /api/sessions/sync
Content-Type: application/json

{
  "sessionId": "session_xxx"
}
```

成功返回示例：

```json
{
  "success": true,
  "result": {
    "sessionId": "session_xxx",
    "destinationPrefix": "sessions/apps/app_xxx/sessions/user_xxx-session_xxx",
    "uploadedFiles": 7,
    "deletedFiles": 1,
    "skipped": false
  }
}
```

### runtime

```http
POST /sync/session
Content-Type: application/json

{
  "sessionId": "session_xxx"
}
```

```http
GET /sync/list?prefix=sessions/apps/{appId}/sessions/{userId}-{sessionId}
```

## 6. 自检

### 手动同步是否生效

```bash
curl -i \
  -X POST http://127.0.0.1:3000/api/sessions/sync \
  -H 'Content-Type: application/json' \
  -H 'Cookie: session=<your-session-cookie>' \
  -d '{"sessionId":"<sessionId>"}'
```

### RustFS 前缀里有什么

```bash
curl -s \
  "http://127.0.0.1:3100/sync/list?prefix=sessions/apps/<appId>/sessions/<userId>-<sessionId>"
```

### 恢复是否生效

```bash
curl -i \
  -X POST http://127.0.0.1:3100/session/init \
  -H 'Content-Type: application/json' \
  -d '{"sessionId":"<sessionId>","appId":"<appId>","userId":"<userId>"}'
```

如果 RustFS 中已有同步内容，重新初始化后应能在 workspace 中重新看到这些文件。
