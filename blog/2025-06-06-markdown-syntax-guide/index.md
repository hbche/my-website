---
title: Markdown 语法完整指南
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: '编程小技巧'
tags: ['前端', '工具', 'markdown']
date: 2026-06-06
---

## 什么是 Markdown？

**Markdown** 是一种简单的文本格式化方式，在任何设备上都能呈现出色的效果。它不会
做任何花哨的事情，比如改变字体大小、颜色或类型——只是使用你已经知道的键盘符号来处
理基本格式。

## 基础语法

| 类型                                                                                         | 或者                                                                         | 效果                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*斜体*`                                                                                     | `_斜体_`                                                                     | _斜体_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `**粗体**`                                                                                   | `__粗体__`                                                                   | **粗体**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `# 一级标题`                                                                                 | `一级标题`<br />`=========`                                                  | # 一级标题                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `## 二级标题`                                                                                | `二级标题`<br />`---------`                                                  | ## 二级标题                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `[链接](http://a.com)`                                                                       | `[链接][1]`<br />`⋮`<br />`[1]: http://b.org`                                | [链接](http://a.com)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `![图片](http://url/a.png)`                                                                  | `![图片][1]`<br />`⋮`<br />`[1]: http://url/b.jpg`                           | ![图片](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAAEDklEQVR4Ae3cY3QDjRaG0V1e27Zt27Zt27Ztf7Zt27Zt10jOdZtZzbSN2q41533+tsFO4zRi0TKRJVACJdDiJVACJVACJVACZQmUQAmUQAmUQAmUQFkCJVACJVACJVACJVDWuD7P8icnGRcVbdyJ/uRZ+jTZYxwq/lN2qMcozvtMibmySe/TsPeqi0JZ3XsAHm1SZAua9CjgoMQo6UB4uiim5gbXV7Ab1EQxT+P3RRw/dHtV3e39UL3g8XuOEw39QNX3g4LHcYwU/n5uo+q7beGKNqLwJ3U1cteKuepEQ1cid03BJIESKIESKIESKIESaIkl0I3dv7Q7a293c//ShrWym7l/abdbGaCnidJGPFzre6opUdqDtLJXitJ+svpA4Uy30dru6hJRHaCws37L37CDRbWAwvctf38S1QOqe43l7f2iikDheg+x9J5ksqpA4TS3svju5CJRXaCwvX7lG3KAqDZQ+Jby/U4kUM0rNN+7hAQSrvNAC/c4Ewn0/052C8Xd0fkigebbRp/5DdpHJFCxr5nfr4QEUqzmJYC3iQRq1jXuj8cYT6CyTnAv54oEKm9EJFBnJVAC7eoS0XJn2r8qQP/wNFOipUY8wvbVAeIjooXq3ki1gPhHC0A/oWWgQZ/37ZI2FaUdVPpb33LHlQS6scPFstrDQBtAvEpNdLEfsZJA3N3lYsnOcTvaAuKzomttqW+lgXimabFoYx5N20D8SXSlw9yElQfiE0J5dW+lI6BBu4uOO8+dWB0g1hel/YIOgbiVE0VHXefhrB7QTRwtmra3gS4AcW+Xibab8SJWE4h7uaLpn/Ud6AoQTzIu2uzDrDYQzzUjCo17HF0D4g3qoo1+yWoCld8hv5OuAvFl0XLb6V8rQGws5votXQfqs45oqaPdjLUDdNO5f7Xa32APgBhu6b2SC92VtQTEfVwlXOhO9ASI2zhNLKsRj2atAfFCo55Iz4C4nyvFks16OWsRiPvQUyCeblIs0adYq0B6DsTb1EV5fk+1gfiWKG0XAwnUZyPRtOPdggTiRg4UC7rEPUkg4PbOFIXGPIEEmt+DCmeu5rUkUHHPaXj76Qsk0MK9R/ynv5FAzfdDYS9Da+n/xe6ovd2lS/8vVlyfH7o1vQLKJVACJVACJVACJVACIYGW/A6z/A6zG8RcNbdT9d1eTcx1A8eKhn6s6vtxweNYfisaqvupu+jXV8H63cXP1Asev+Wpopi6aVMVbFpdFPMUlP6jdrY/8AgTYkHZhEcAvFNdFMpq3qFh78y/okIT3qk4j8zborn290hN91S/c6zrzapVsFnXO9bvPFXjYtEykSVQAnVUAiVQAiVQAiVQAiVQlkAJlEAJlEAJlEAJlCVQAiVQAiVQAiVQAmX/BMHb3CdNrgcrAAAAAElFTkSuQmCC 'markdown') |
| `> 引用块`                                                                                   |                                                                              | <blockquote>引用块</blockquote>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `* 列表`<br />`* 列表`<br />`* 列表`                                                         | `- 列表`<br />`- 列表`<br />`- 列表`                                         | • 列表<br />• 列表<br />• 列表                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `1. 第一项`<br />`2. 第二项`<br />`3. 第三项`                                                | `1) 第一项`<br />`2) 第二项`<br />`3) 第三项`                                | 1. 第一项<br />2. 第二项<br />3. 第三项                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `水平分割线:`<br />`---`                                                                     | `水平分割线:`<br />`***`                                                     | 水平分割线:<br /><hr />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `` `内联代码` 使用反引号``                                                                   |                                                                              | `内联代码` 使用反引号                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ` <br />```<br /># 代码块<br />print '3个反引号或'<br />print '缩进4个空格'<br />```<br /> ` | `····# 代码块`<br />`····print '3个反引号或'`<br />`····print '缩进4个空格'` | `<br /># 代码块<br />print '3个反引号或'<br />print '缩进4个空格'<br />`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## 扩展语法

### 表格

```markdown
| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 内容   |   内容   |   内容 |
| 内容   |   内容   |   内容 |
```

效果：

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 内容   |   内容   |   内容 |
| 内容   |   内容   |   内容 |

### 删除线

```markdown
~~删除的文本~~
```

效果：~~删除的文本~~

### 任务列表

```markdown
- [x] 已完成的任务
- [ ] 未完成的任务
- [ ] 另一个未完成的任务
```

效果：

- [x] 已完成的任务
- [ ] 未完成的任务
- [ ] 另一个未完成的任务

### 脚注

```markdown
这是一个带脚注的文本[^1]。

[^1]: 这是脚注的内容。
```

## 转义字符

如果你想显示 Markdown 语法字符本身，可以使用反斜杠进行转义：

```markdown
\*这不是斜体\* \# 这不是标题 \[这不是链接\]
```

常需要转义的字符：

- `\` 反斜杠
- `` ` `` 反引号
- `*` 星号
- `_` 下划线
- `{}` 大括号
- `[]` 方括号
- `()` 圆括号
- `#` 井号
- `+` 加号
- `-` 减号
- `.` 点号
- `!` 感叹号

## 最佳实践

### 1. 标题层级

- 每个文档只使用一个一级标题
- 不要跳过标题层级（如从 # 直接跳到 ###）
- 标题前后留空行

### 2. 列表格式

- 列表项前后保持一致的缩进
- 列表前后留空行
- 嵌套列表使用适当的缩进

### 3. 代码块

- 为代码块指定语言以获得语法高亮
- 长代码块考虑分割或添加注释

### 4. 链接

- 使用描述性的链接文本
- 对于重复使用的链接，考虑使用引用式链接

### 5. 图片

- 始终提供有意义的替代文本
- 考虑图片的加载性能

## 工具推荐

### 在线编辑器

- [Dillinger](https://dillinger.io/)
- [StackEdit](https://stackedit.io/)
- [Typora](https://typora.io/)

### 桌面编辑器

- [Mark Text](https://marktext.app/)
- [Zettlr](https://www.zettlr.com/)
- [Obsidian](https://obsidian.md/)

### 浏览器扩展

- Markdown Here（Chrome/Firefox）
- Markdown Editor（Chrome）

## 学习资源

- [CommonMark 规范](https://commonmark.org/help/) - 官方标准规范
- [Markdown 10 分钟教程](https://commonmark.org/help/tutorial/) - 交互式学习
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - GitHub 扩展语法

## 总结

Markdown 是一种简单而强大的标记语言，它让你能够：

1. **快速格式化文本** - 使用简单的符号
2. **保持内容专注** - 不被复杂的格式分散注意力
3. **跨平台兼容** - 在任何支持 Markdown 的平台上都能正确显示
4. **易于学习** - 语法简单直观
5. **广泛支持** - 被众多平台和工具支持

开始使用 Markdown，让你的文档写作更加高效和专业！
