# lab.travis.wang

一个完全公开运行的 AI 原生产品实验室。

## 这是什么

[lab.travis.wang](https://lab.travis.wang) 是一个长期运行的个人实验室。

在这里，我会：
-  每周构建 1 个最小可用的 Web / App 实验
-  从想法、设计、实现到上线，尽量由 AI 主导完成
-  真实记录过程、判断与结果
-  不隐藏失败，也不包装成功

Lab 本身不是产品，而是所有实验的：
-  入口索引（Entry Point）
-  管理与观察层（Control Plane）

目标:
- 验证：**在 AI 深度参与的情况下，一个人是否可以长期、稳定地构建真实产品。**
- 通过迭代, 搭建一个可复用的人与 AI 共同工作的系统
- 最好能有几个"毕业"的产品出现

----

## 为什么要公开做这件事

原因很简单：
-  大多数产品讨论停留在“想法”和“观点”
-  少有人持续、系统地公开 真实执行与数据
-  找到可复现的方法，而不是结论

----

## Lab 如何运行

#### 时间节奏
-  以「周」为最小运行单位
-  每周都会有一个实验进入「已构建（built）」状态
-  实验完成后即冻结，不做长期维护

#### 实验状态

实验不会被删除，只会处于不同状态：
-  built：已完成并上线
-  observe：自然观察数据
-  iterate：因出现信号而继续迭代
-  graduate：从 Lab 毕业，进入正式产品阶段

Lab 不追求快速成功，而是 长期存在 + 捕捉信号。


### 如何开始一个新实验（最小流程）

1. 创建一个新的实验 repo（命名建议：`YYWww`，例如 `26W15`）
2. 在实验 repo 根目录新增 `experiment.json`（固定命名），写清楚：一句话目标 + 上线链接 + 当前状态（built/observe/iterate/graduate）
3. 上线后，把实验登记到本仓库的索引
4. 进入观察期：按 SPEC 的窗口记录信号与结论

#### 工作方式（约束）

- 每周至少一个实验达到 built，或对既有实验完成一次正式状态更新
- 实验完成后默认冻结；只有出现信号才进入 iterate
- 不包装成功，不隐藏失败；留下可复用资产即可

----

## 技术与工程结构
-  每个实验 = 一个独立 repo
-  Lab 本身是入口与管理层，不包含实验业务代码
-  所有实验共用一个 PocketBase 服务，用于：
  -  实验元数据
  -  事件记录
  -  复盘与观察

这种结构保证：
-  实验可以长期放置，几乎不消耗资源
-  每个实验都是完整、可 fork 的开源项目
-  Lab 即使暂停更新，也不会“坏掉”

----

## 本地运行（Docker）

本项目提供 `docker-compose.yml`，用于一键启动 PocketBase。

说明：PocketBase 没有官方 Docker 镜像，这里通过仓库内的 `Dockerfile` 在构建时下载对应版本的 release 二进制并打包。

- 启动：`docker compose up -d`
- 查看日志：`docker compose logs -f`
- 停止：`docker compose down`

可选：指定 PocketBase 版本（默认 `0.35.0`）：`PB_VERSION=0.35.0 docker compose up -d --build`

默认端口：`http://127.0.0.1:8090`

数据与静态资源会映射到本地目录（`pb_data/`、`pb_migrations/`、`pb_public/`），容器重启不会丢失。


----

## 关于 AI

在这个 Lab 中，AI 并不是“辅助工具”，而是：
-  产品经理
-  工程师
-  文案与编辑
-  数据分析

我主要承担的角色是：
-  决策
-  取舍
-  审查

所有 AI 角色都有明确边界和统一风格约束，相关定义会持续公开。

----

## Agent 工作协议 (Agent Working Agreement)

所有参与本 Lab 建设的 Agent (包含但不限于 Cursor, Windsurf, Trae 等) 需遵守以下工作流：

1.  **Task First**: 开始工作前，必须在 `pb_public/elog/tasks.md` 中登记任务状态。
    -   新任务：添加到 `In Progress`
    -   完成时：移动到 `Completed`
2.  **Log Everything**: 任何有价值的尝试、决策或代码变更，都应视为“实验日志”的一部分。
    -   主动记录实验过程
    -   不隐藏中间状态

----

## 关于失败

失败是这个 Lab 的默认结果，而不是例外。
-  没有数据的实验也会被记录
-  没有用户的产品也会被保留
-  冷冻的实验可能在数月后被重新发现价值

只要留下可复用的资产，它就不是失败。

----

你可以如何参与:

- 旁观：阅读实验记录与复盘
- Fork：直接使用或改造某个实验
- 讨论：[提出问题或不同判断](https://github.com/orgs/lab-travis-wang/discussions)

这个 Lab 不提供成功承诺，也不贩卖焦虑。

如果你对 AI × 产品 感兴趣，欢迎持续关注。
----

This lab is an ongoing experiment.  
Results may vary.  
Methods are public.