# 词语小手账

一个给孩子使用的背单词小程序，支持中考核心词、自定义词库和 Unlock 3 独角兽背单词。

## 本地打开

在 Mac 上双击：

```text
打开背单词小程序.command
```

或在项目目录运行：

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://127.0.0.1:4173/
```

## 老师新词怎么加入

进入小程序底部的“设置”，找到“加入老师新词”，一行粘贴一个词。

支持三种格式：

```text
heritage - 遗产；传统 - The city has a rich cultural heritage.
ceremony,仪式,The ceremony started at nine.
preserve	保护；保留	We should preserve old buildings.
```

导入后选择“自定义词库”即可学习。每个孩子的学习记录保存在自己的浏览器里，互不影响。

## 在线发布

这是纯静态网页，可以直接发布到 GitHub Pages、Netlify 或 Vercel。

推荐 GitHub Pages，详细步骤见：

```text
PUBLISH.md
```

