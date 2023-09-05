---
id: frontend-css-tailwindcss
title: tailwindcss
description: 前端工程师的CSS知识库
keywords:
  - Front-End
  - CSS
  - tailwindcss
  - framework
tags:
  - Front-End
  - CSS
  - tailwindcss
  - framework
sidebar_position: 2
author: hanbin
last_update:
  date: 2023-09-05
  author: hbche
---

只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。tailwind 本质上是一个工具集，包含了大量类似 `flex`、 `pt-4`、 `text-center` 以及 `rotate-90` 等工具类，可以组合使用并直接在 HTML 代码上实现任何 UI 设计。

## 优势

1. 约束
   1. 工具类（Utility classes）能够为你提供一套约束系统，避免让你的样式表中出现随意的取值。它让颜色、 间距、排版、阴影以及一切属性的取值保持一致，并最终形成一个精心构建的设计系统。
2. 实现你所想
   1. 由于 Tailwind 抽象层级较低，因此它从不鼓励将同一个设计应用到两个网站上。即使使用相同的调色板（color palette）和尺寸设置，也能很容易地让同样的组件具有完全不同的外观。
3. 体积小
   1. 由于 Tailwind 抽象层级较低，因此它从不鼓励将同一个设计应用到两个网站上。即使使用相同的调色板（color palette）和尺寸设置，也能很容易地让同样的组件具有完全不同的外观。
4. 移动设备优先
   1. 在 CSS 中处理一大堆复杂的媒体查询（media queries）是很糟糕的，而 Tailwind 能够让你 在 HTML 中直接支持响应式设计。
   2. 在任何工具类前面添加一个代表屏幕尺寸的前缀，然后就能看到它神奇地作用到某个特定的断点（breakpoint）上了。
5. 各种状态
   1. 需要对鼠标悬停的页面元素设置一些特殊的样式吗？将 hover: 前缀添加到你所要使用的 CSS 类的名称前面即可。支持 `focus`、 `active`、`disabled`、`focus-within`、`focus-visible` 以及我们自己所创造的一些奇妙的状态，例如 `group-hover`。
6. 组件驱动
   1. 如果你发现一遍又一遍地重复使用同一组工具类的话，那你所需要做的是将它们提取到一个组件或模板中，然后你就可以将它们放到一个统一的地方就行修改了。
   2. 不想涉足组件框架的世界？利用 Tailwind 内置的 @apply 指令，可以通过复制、粘贴类名列表的方式 将一系列工具类所对应的 CSS 代码提取到自定义类中。
7. 夜间模式
   1. 你也不希望用户在凌晨两点用手机打开你的网站，被刺眼的白光晃瞎双眼吧？ 在配置文件中开启夜间模式，然后将 dark: 前缀添加到任何代表颜色的工具类名称前面，就能支持夜间模式了。 此功能支持背景色（background colors）、文本颜色（text colors）、边框颜色（border colors）以及渐变色（gradients）。
8. 编辑器支持

   1. 还在为记不住所有类名而担心吗？Tailwind CSS IntelliSense 扩展已经支持 VS Code 了，还不快去使用。
   2. 智能自动补全提示、代码检查（linting）、CSS 类定义等，所有这些 都集成到编辑器中了，并且无需任何配置。

## 参考

1. [tailwind 中文官网](https://www.tailwindcss.cn/)
