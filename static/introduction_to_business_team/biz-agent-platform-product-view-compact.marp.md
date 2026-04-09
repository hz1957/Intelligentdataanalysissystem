---
marp: true
paginate: true
size: 16:9
theme: default
footer: 业务智能体平台产品方案
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

:root {
  --text: #eef4ff;
  --muted: #a7b8d5;
  --blue: #72b7ff;
  --cyan: #66e0c2;
  --gold: #ffd166;
  --line: rgba(255, 255, 255, 0.14);
}

section {
  font-family: 'Noto Sans SC', sans-serif;
  background:
    radial-gradient(circle at top right, rgba(114, 183, 255, 0.20), transparent 26%),
    radial-gradient(circle at left bottom, rgba(102, 224, 194, 0.16), transparent 24%),
    linear-gradient(135deg, #08101d 0%, #10203c 58%, #162948 100%);
  color: var(--text);
  padding: 54px 64px;
  font-size: 24px;
  line-height: 1.5;
}

h1, h2, h3 {
  margin: 0;
  font-family: 'JetBrains Mono', 'Noto Sans SC', monospace;
}

h1 { font-size: 50px; color: #fff; }
h2 {
  font-size: 34px;
  color: var(--blue);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--line);
}
h3 { font-size: 22px; color: var(--cyan); margin-bottom: 10px; }
strong { color: var(--gold); }
ul, ol { padding-left: 28px; }
li { margin: 8px 0; }
footer { color: var(--muted); font-size: 13px; }
.lead { display: flex; flex-direction: column; justify-content: center; }
.lead p { color: var(--muted); font-size: 22px; margin-top: 16px; }
.tagline { font-size: 28px; color: var(--gold); margin-top: 18px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 20px;
}
.card small {
  display: block;
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 8px;
}
.card strong {
  display: block;
  font-size: 24px;
  color: #fff;
  margin-bottom: 8px;
}
.note { color: var(--muted); font-size: 18px; }
</style>

<!-- _class: lead -->
<!-- _paginate: false -->

# 业务智能体平台

产品方案汇报版

<div class="tagline">不是一个聊天框，而是一套面向业务任务的智能体工作平台</div>

---

## 平台是什么

- 面向企业的智能体建设与运营平台
- 不只提供对话入口，还提供：
  - 智能体创建、配置和管理
  - 知识、文件、记忆和模板沉淀
  - 不同角色的使用、治理和协作能力
- 目标是让智能体从“会回答”变成<strong>能长期服务业务</strong>

---

## Agent 和大语言模型

<div class="grid-2">
<div class="card">
<h3>关系</h3>

- 大语言模型更像“思考引擎”
- Agent 更像“可工作的数字员工”
- 模型提供智能，Agent 把智能组织成能力
</div>

<div class="card">
<h3>区别</h3>

- 模型回答问题，Agent 完成任务
- 模型偏通用，Agent 偏岗位和目标
- Agent 会整合知识、工具、记忆和规则
</div>
</div>

<p class="note">企业真正要建设的，通常不是“直接使用模型”，而是“围绕模型搭建可运营的 Agent”。</p>

---

## 智能体是什么样的

<div class="grid-3">
  <div class="card"><small>角色</small><strong>有定位</strong><span class="note">如销售助理、运营专员、客服助手</span></div>
  <div class="card"><small>能力</small><strong>有工具</strong><span class="note">能处理文件、整理资料、调用系统、执行流程</span></div>
  <div class="card"><small>成长</small><strong>有记忆</strong><span class="note">能沉淀经验、偏好和历史结果</span></div>
</div>

- 用户可以在现有能力上持续拓展，教智能体更好的做事方式：
  - 补充知识材料
  - 调整提示词和规则
  - 增加模板、Skill、MCP 和工具

---

## 三类核心用户

<div class="grid-3">
  <div class="card"><small>治理者</small><strong>系统管理员</strong><span class="note">关注平台稳定、权限边界、统一治理</span></div>
  <div class="card"><small>建设者</small><strong>Agent 管理员</strong><span class="note">负责创建、配置、运营和持续优化智能体</span></div>
  <div class="card"><small>使用者</small><strong>普通用户</strong><span class="note">关注是否好用、有效、可靠，能否真正完成任务</span></div>
</div>

---

## Agent 管理员负责什么

- 创建智能体，定义岗位角色和目标边界
- 配置提示词、规则、project 模板和执行方式
- 维护知识库、记忆和可复用经验
- 管理 Skill、MCP、外部系统接入
- 收集、整理、归档智能体产生的文件、报告和过程产物
- 根据业务反馈持续优化智能体效果

---

## 平台功能

<div class="grid-3">
  <div class="card"><small>管理</small><strong>用户与权限</strong><span class="note">用户管理、角色划分、权限控制</span></div>
  <div class="card"><small>资产</small><strong>文件与资源</strong><span class="note">文件管理、资源管理、结果归档</span></div>
  <div class="card"><small>配置</small><strong>智能体配置</strong><span class="note">角色、知识、记忆、模板、Skill、MCP</span></div>
</div>

<div class="grid-3" style="margin-top:18px">
  <div class="card"><small>运行</small><strong>生命周期管理</strong><span class="note">创建、发布、运行、调整、停用</span></div>
  <div class="card"><small>隔离</small><strong>项目隔离</strong><span class="note">不同项目、团队、任务之间边界清晰</span></div>
  <div class="card"><small>协同</small><strong>多智能体并行</strong><span class="note">多个智能体分工协作处理复杂任务</span></div>
</div>

---

## 产品形态与用户操作

<div class="grid-2">
<div class="card">
<h3>核心概念</h3>

- `Portal`：统一入口
- `Project`：业务容器
- `Workspace`：工作空间
- `Agent Workflow`：做事路径
- `Agent Session`：单次执行过程
</div>

<div class="card">
<h3>用户步骤</h3>

1. 进入 Portal
2. 选择 Project 和 Agent
3. 在 Workspace 中准备材料
4. 通过 Session / Workflow 执行任务
5. 将结果沉淀回 Project
</div>
</div>

---

## 典型使用场景

<div class="grid-2">
<div class="card">
<h3>知识与分析</h3>

- 制度问答与业务咨询
- 数据处理与表格清洗
- 报告生成、报告解读与结论提炼
</div>

<div class="card">
<h3>执行与协作</h3>

- 跨文件信息提取与整理
- 系统录入与表单填写
- 浏览器采集、检索、回填与业务流程协作
</div>
</div>

---

## 交互模式与技术框架

<div class="grid-2">
<div class="card">
<h3>交互模式</h3>

- 交互模式
- 自动模式
- 混合模式
- Web UI / 对话框 / 微信 / 企业微信 / 混合入口
</div>

<div class="card">
<h3>技术框架</h3>

- Client：Web / App / 对话入口
- Server：App Server + Agent Backend
- Agent Backend：模型 + 知识库 + Memory + Skill + 工具 + Workflow
</div>
</div>

<p class="note">前面是用户入口，中间是平台控制层，后面是智能体执行层。</p>

---

## 当前现状与下一步

- 当前：已经具备统一入口和基础运行能力，也开始具备文件沉淀和持续扩展基础
- 下一步重点补齐：
  - 知识库：让智能体真正理解业务材料
  - 记忆：保留长期经验和用户偏好
  - 工作流：从对话走向流程化执行
  - 操作浏览器：进入真实业务系统执行动作

<p class="note">一句话总结：这不是单个智能体产品，而是企业建设和运营一批业务智能体的基础平台。</p>
