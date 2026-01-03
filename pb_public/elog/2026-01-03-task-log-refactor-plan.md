# 任务与日志系统重构规划

> date: 2026-01-03
> experiment_id: exp-25W52-000
> tags: [planning, refactor, architecture, frontend]

## 现状分析

当前任务与日志系统的数据分布在 3 个独立文件：

| 文件 | 内容 | 问题 |
|------|------|------|
| `tasks.md` | 任务列表 + 元数据 | 解析逻辑分散在 HTML 中 |
| `manifest.json` | 日志列表 + 关联 | 重复存储 experiment_id |
| `experiments.json` | 实验列表 | 与 manifest.json 数据重叠 |

### 核心问题

1. **数据重复** - `experiment_id` 在 tasks.md 和 manifest.json 都存在
2. **解析逻辑重复** - `renderLogDetail` 复制了 `renderTasks` 的任务解析逻辑
3. **关联方式弱** - `related_tasks` 用字符串匹配，不够健壮
4. **状态管理薄弱** - URL 参数是唯一状态管理，无持久化

## 重构方案

### 推荐方案：保持分离 + 索引层

```
pb_public/
├── data/
│   ├── tasks.md           # 任务源（用户编辑）
│   ├── manifest.json      # 日志源
│   └── index.json         # 生成的索引（机器生成）
│
├── scripts/
│   └── build-index.js     # 构建索引的脚本
```

### build-index.js 职责

```javascript
// 伪代码
1. 读取 tasks.md，解析所有任务
2. 读取 manifest.json，解析所有日志
3. 根据 related_tasks 和 experiment_id 建立双向映射
4. 生成 index.json：
   - task_to_logs: 任务 -> 日志列表
   - log_to_tasks: 日志 -> 任务列表
   - experiment_summary: 实验统计
```

### 统一数据模型

```typescript
interface UnifiedRecord {
  id: string              // 唯一标识
  type: 'task' | 'log'    // 类型
  title: string           // 标题
  description: string     // 描述
  experiment_id: string   // 关联实验
  related_ids: string[]   // 关联的其他记录
  created_at: string      // 创建时间
  status: string          // 状态
  metadata: Record        // 扩展字段
}
```

### 迁移路线

| 阶段 | 内容 | 预估工作量 |
|------|------|-----------|
| Phase 1 | 创建 `data/` 目录，移动文件 | 1h |
| Phase 2 | 编写 `build-index.js` | 4h |
| Phase 3 | 重构 index.html，用索引驱动 | 8h |
| Phase 4 | 添加状态管理和缓存 | 4h |
| Phase 5 | 组件化重构 | 8h |

## 当前可行方案（不重构的理由）

1. **数据量小** - 只有 ~20 个任务，~10 篇日志，手动维护够用
2. **编辑频率低** - 任务和日志添加频率低
3. **功能完整** - 任务看板、日志列表、双向链接都已工作
4. **优先级** - 有更重要的功能要做（AI 引擎、持久化）

## 下一步

1. 创建 `data/` 目录
2. 移动文件并测试
3. 编写构建脚本
