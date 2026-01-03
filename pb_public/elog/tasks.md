# Project Tasks

> last_updated: 2026-01-03T16:30:00+08:00

## Backlog
- [ ] 任务与日志系统重构 [task-log-refactor]
  - detail: 创建 data/ 目录，编写 build-index.js 生成关联索引，实现统一数据模型
  - experiment_id: exp-25W52-000
- [ ] AI 不完全遵守 SPEC 的执行规范
  - detail: 优化 prompt engineering，确保 AI 角色边界清晰，执行步骤规范
  - experiment_id: exp-25W52-000
- [ ] 探索用什么方式统计数据和展示在实验的详情页
  - detail: 研究实时数据面板设计，包括关键指标图表和趋势展示
  - experiment_id: exp-25W52-000
- [ ] 用户反馈收集的方式
  - detail: 探索在实验详情页展示用户反馈数据的可视化方式
  - experiment_id: exp-25W52-000

## In Progress
- [ ] **连接真实 AI API**
  - detail: 集成腾讯云 AI 网关，整合国内免费 Token（深言、通义等），实现真正的流式输出 (SSE)
  - experiment_id: exp-26W01-001

## Completed
- [x] 任务支持显示详细说明 (2026-01-03)
  - experiment_id: exp-25W52-000
  - detail: 当任务有 `detail:` 元数据时，在任务卡片下方显示详细说明

- [x] 任务和日志关联后增加跳转 (2026-01-03)
  - experiment_id: exp-25W52-000
  - detail: 任务卡片上显示关联实验的链接，可跳转到实验详情和相关日志筛选页

- [x] 训练 UI 优化：添加素材演变面板 (2026-01-03) [ui-training-evolution, material-evolution]
  - experiment_id: exp-26W01-001
  - detail: 桌面端左侧固定面板，显示素材增量过程；移动端顶部提示；用户回答自动记录为"补充细节"

- [x] 总结 Logo/市场图片等生成的复用 prompt (2026-01-01) [wechat-cover-agent]
  - experiment_id: exp-25W52-000
  - detail: 记录公众号题图生成 Agent 的 prompt 模板和最佳实践

- [x] 每个实验日志单独查看,还是在 Lab 统一查看? (2025-12-31)
  - experiment_id: exp-25W52-000
  - detail: 决定采用统一展示方案，在 Lab 首页聚合所有实验日志

- [x] UI Tweaks: Navbar dropdown & Compact Log List (2025-12-31) [navbar-dropdown, compact-log-list]
  - experiment_id: exp-25W52-000
  - detail: NavBar 添加语言下拉菜单，日志列表改为紧凑卡片布局

- [x] Initialize Experiment 001: Writing Training System (2025-12-31) [init-001]
  - experiment_id: exp-26W01-001
  - detail: 启动写作训练系统实验，建立基础框架和 MVP

- [x] UI Refactoring: Navigation & Experiment List (2025-12-28) [ui-refactor, nav-refactor, exp-list-refactor]
  - experiment_id: exp-25W52-000
  - detail: 重构导航栏和实验列表页，优化移动端体验

- [x] Refactor Navigation Bar (Compact, Dropdown Lang, Github Link) (2025-12-28)
  - experiment_id: exp-25W52-000
  - detail: 简化 NavBar 设计，添加语言切换和 GitHub 链接

- [x] Refactor Experiment List (Compact Cards, Clickable, Logo/Icon Support) (2025-12-28)
  - experiment_id: exp-25W52-000
  - detail: 重新设计实验列表为紧凑卡片，支持点击进入和图标展示

- [x] Fix Markdown rendering in Experiment Logs (2025-12-28) [markdown-rendering]
  - experiment_id: exp-25W52-000
  - detail: 修复实验日志的 markdown 渲染问题，统一样式

- [x] Fix markdown styling (2025-12-28)
  - experiment_id: exp-25W52-000
  - detail: 优化 markdown 内容区域样式，提升可读性

- [x] Add docker-compose (2025-12-27) [docker-compose]
  - experiment_id: exp-25W52-000
  - detail: 添加 PocketBase 的 docker-compose 配置，方便本地开发

- [x] Align index.html content with README.md (2025-12-27)
  - experiment_id: exp-25W52-000
  - detail: 确保 Lab 首页内容与 README.md 保持一致

- [x] Initialize Experiment Logs system (2025-12-26) [elog-system]
  - experiment_id: exp-25W52-000
  - detail: 建立实验日志系统，记录所有实验进展和深度思考

---
## Sub-tasks
- [x] 下载主图片有问题, 先忽略了
  - detail: 公众号题图生成后下载功能暂不可用，待后续修复
  - experiment_id: exp-25W52-000
