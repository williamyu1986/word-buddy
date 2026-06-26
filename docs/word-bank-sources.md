# 词库完整化来源清单

更新日期：2026-06-26

## 目标边界

软件里的考试词库不再只做“起步词”，后续要逐步扩展成完整学习词库。完整词库以“可追溯来源 + 可重复整理 + 家长确认后导入”为原则。

公开部署版本要避免直接照搬受版权保护的完整 PDF 内容。官方资料可以作为学习依据和核对依据；导入到公开网站前，应整理成适合孩子学习的词条，包括中文释义、例句、分组和必要的清洗。

## 已确认范围

### 中考：黑龙江中考版

采用结构：

- 基础层：义务教育英语课程标准词汇。
- 地方层：黑龙江/哈尔滨近年中考真题高频词、短语、熟词生义。

当前判断：

- 未确认到一个稳定公开的“黑龙江官方中考英语完整词汇表”。
- 后续不建议直接使用网上流传的“黑龙江中考词汇完整版”，除非能确认来源。
- 已先用开源 ECDICT 的 `zk` 标签生成“黑龙江中考基础版”，共 1603 个词条。
- 已接入软件并命名为“黑龙江中考词库”，内部保留来源分层：`基础版`、`黑龙江真题补充`。
- 当前版本尚未加入黑龙江/哈尔滨真题补充词；后续拿到真题词后追加到同一本词库。

### 高考：新课标完整版

采用来源：

- 《普通高中英语课程标准（2017年版2020年修订）》
- 教育部官方入口：https://www.moe.gov.cn/srcsite/A26/s8001/202006/t20200603_462199.html

当前判断：

- 以新课标词汇为主，不直接采用网上混杂的“高考3500词”版本。
- 后续可以补充：常见派生词、熟词生义、短语搭配、新高考真题高频词。

### KET：Cambridge A2 Key 完整词表

采用来源：

- Cambridge English 官方 A2 Key / A2 Key for Schools Vocabulary List
- 官方 PDF：https://www.cambridgeenglish.org/Images/506886-a2-key-2020-vocabulary-list.pdf
- 文件版本：August 2025

当前处理状态：

- 已下载到本地 `data/sources/cambridge-a2-key-vocabulary-list.pdf`。
- 已抽取文本到 `data/generated/cambridge-a2-key-vocabulary-list.txt`。
- 已初筛词头到 `data/generated/ket-a2-key-headwords.csv`。
- 初筛数量：1713 个词头。
- 已清洗为 `ket-words.js`，共 1728 个可背词条。
- 已处理英美拼写、斜杠词、括号词，例如 `yog(h)urt` 整理为 `yogurt / yoghurt`，并为拼写题保留可接受答案。
- 中文释义底稿来自开源 ECDICT 英汉词典，项目地址：https://github.com/skywind3000/ECDICT
- 例句为本项目生成的原创简单句，不复制官方 PDF 原文。

导入建议：

- 不把官方 PDF 原样发布到网站。
- 以官方词表为核对依据，整理成孩子可学习的中文释义版。

### PET：Cambridge B1 Preliminary 词汇资料

已确认官方入口：

- Cambridge B1 Preliminary preparation 页面：https://www.cambridgeenglish.org/exams-and-tests/preliminary/preparation/
- 当前页面提供的词汇资料：
  - B1 Preliminary for Schools vocabulary booklet
  - PDF：https://www.cambridgeenglish.org/Images/648172-b1-preliminary-for-schools-vocabulary-booklet.pdf

当前判断：

- 该 booklet 是教学活动册，不是完整按字母排列的官方词表。
- Cambridge 当前 preparation 页面标题中出现 Vocabulary list，但实际链接指向 vocabulary booklet。
- PET 完整字母词表仍需二次确认精确官方文件，不能先用活动册冒充“完整版”。

导入建议：

- 暂不把 PET 标为“官方完整版已整理完成”。
- 可以先保留现有 PET 起步词库。
- 待找到稳定的完整来源后，再升级为 PET 完整版。

## 后续执行顺序

1. 继续抽样优化 KET 中文释义和例句质量。
2. 继续确认 PET 完整词表来源；确认前只保留 PET 起步词库。
3. 整理高考新课标完整版词库。
4. 继续收集黑龙江/哈尔滨真题补充词，追加到黑龙江中考词库。

## 公开发布边界

- 可以公开：我们整理后的学习词条、中文释义、原创例句、来源说明。
- 谨慎公开：官方 PDF 的完整原文、原始编排、完整复制的说明文字。
- 适合本地保留：下载的官方 PDF、抽取的原始文本、未清洗候选表。
