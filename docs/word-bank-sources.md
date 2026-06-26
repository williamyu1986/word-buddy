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
- 已先用开源 ECDICT 的 `gk` 标签生成“高考新课标完整版底盘”，共 3677 个词条。
- 已接入软件并命名为“高考新课标词库”。

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
- 用户提供本地文件：`/Users/williamyu/Desktop/2020pet单词表.pdf`
- 文件标题：`From 2020 VOCABULARY LIST B1 Preliminary / B1 Preliminary for Schools`

当前判断：

- 该文件是按字母排列的 B1 Preliminary 词汇表，适合升级 PET 背诵词库。
- 已抽取词头，并用开源 ECDICT 补中文释义。
- 已清洗为 `pet-words.js`，共 3001 个可背词条。
- 例句为本项目生成的原创简单句，不复制 PDF 原文例句。

导入建议：

- 不把用户提供的 PDF 原样发布到网站。
- 公开页面只使用整理后的学习词条、中文释义和原创例句。

### 2000 Core English Words

采用来源：

- 用户提供本地文件：
  - `/Users/williamyu/Desktop/2000词/2000+Core+English+Words+1_Word+List_ENG.pdf`
  - `/Users/williamyu/Desktop/2000词/2000+Core+English+Words+2_Word+List_ENG.pdf`
  - `/Users/williamyu/Desktop/2000词/2000+Core+English+Words+3_Word+List_ENG.pdf`
  - `/Users/williamyu/Desktop/2000词/2000+Core+English+Words+4_Word+List_ENG.pdf`

当前处理状态：

- 已按册和 Unit 抽取词头。
- 已清洗为 `core2000-words.js`，共 1600 个可背词条。
- 软件中支持选择：全部册、具体册、具体 Unit。
- 中文释义来自开源 ECDICT，例句为本项目生成的原创简单句。

### 4000 Essential English Words

采用来源：

- 用户提供本地文件：
  - `/Users/williamyu/Desktop/4000词/4000EEW1_Word+List_ENG.pdf`
  - `/Users/williamyu/Desktop/4000词/4000EEW2_Word+List_ENG.doc`
  - `/Users/williamyu/Desktop/4000词/4000EEW3_Word+List_ENG.docx`
  - `/Users/williamyu/Desktop/4000词/4000EEW4_Word+List_ENG.doc`
  - `/Users/williamyu/Desktop/4000词/4000EEW5_Word+List_ENG.doc`
  - `/Users/williamyu/Desktop/4000词/4000EEW6_Word+List_ENG.pdf`

当前处理状态：

- `.doc` 文件已在本地临时转换后抽取，不改动原文件。
- 已按册和 Unit 抽取词头。
- 已清洗为 `eew4000-words.js`，共 3600 个可背词条。
- 软件中支持选择：全部册、具体册、具体 Unit。
- 中文释义来自开源 ECDICT，例句为本项目生成的原创简单句。

## 后续执行顺序

1. 继续抽样优化 KET 中文释义和例句质量。
2. 继续抽样优化 PET、2000、4000 词库中文释义和例句质量。
3. 继续抽样优化高考新课标词库中文释义和例句质量。
4. 继续收集黑龙江/哈尔滨真题补充词，追加到黑龙江中考词库。

## 公开发布边界

- 可以公开：我们整理后的学习词条、中文释义、原创例句、来源说明。
- 谨慎公开：官方 PDF 的完整原文、原始编排、完整复制的说明文字。
- 适合本地保留：下载的官方 PDF、抽取的原始文本、未清洗候选表。
