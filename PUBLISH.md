# 发布到 GitHub Pages

## 方法一：网页上传，最适合第一次发布

1. 打开 GitHub，登录账号。
2. 新建一个仓库，例如：

```text
word-buddy
```

3. 把本文件夹里的这些文件上传到仓库根目录：

```text
index.html
styles.css
app.js
unicorn-words.js
.nojekyll
README.md
PUBLISH.md
```

4. 在仓库页面进入 `Settings`。
5. 左侧选择 `Pages`。
6. `Build and deployment` 里选择：

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

7. 保存后等待一两分钟，GitHub 会生成一个网址，通常类似：

```text
https://你的GitHub用户名.github.io/word-buddy/
```

把这个链接发给其他人即可使用。

## 方法二：以后更新

以后如果软件有改动，只需要把改过的文件重新上传到同一个 GitHub 仓库。

老师新词如果只是自己家孩子使用，不需要更新网站代码，直接在小程序“设置”里导入即可。

如果你想把老师新词变成所有人打开网站都自带的固定词库，再把词整理给 Codex，更新 `app.js` 或单独词库文件后重新发布。

