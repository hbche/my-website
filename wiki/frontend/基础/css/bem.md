---
title: BEM
keywords:
  - Front-End
  - CSS
  - BEM
tags:
  - Front-End
  - CSS
  - BEM
sidebar_position: 1
author: hanbin
date: <% tp.date.now("YYYY-MM-DD") %>
---

## 什么是 BEM 规范

块、元素、修饰符方法论(通常称为 BEM)是 HTML 和 CSS 中常用的类命名约定。由 Yandex 团队开发，其目标是帮助开发人员更好地理解给定项目中 HTML 和 CSS 之间的关系。其背后的想法是将用户界面划分为独立的块。这使得界面开发变得简单快捷，即使使用复杂的 UI，它也允许复用现有代码而无需复制和粘贴。

### 什么是块

块是可复用的功能独立的页面组件。

特征：

- 块名称描述其目的（它是什么），而不是它的状态（它看起来像什么）
- 块不应影响其环境，这意味着您不应设置块的外部几何图形（边距）或位置。
- 使用 BEM 时，不应该使用 CSS 标签选择器或 ID 选择器。

这确保了重复使用块或将它们从一个地方移动到另一个地方的时候能够保持必要的独立性。

```html title=块嵌套
<!-- `header` block -->
<header class="header">
  <!-- Nested `logo` block -->
  <div class="logo"></div>

  <!-- Nested `search-form` block -->
  <form class="search-form"></form>
</header>
```

#### 使用指南

- 块可以嵌套
- 可以嵌套任意数量的层级

### 什么是元素

块的复合部分，不能与其单独使用。

特征：

- 元素名称描述其用途（它是什么？），而不是它的状态
- 元素名称与块名称之间使用双下划线 `__` 分割。例如`block-name__element-name`

代码示例：

```html title=元素
<!-- `search-form` block -->
<form class="search-form">
  <!-- `input` element in the `search-form` block -->
  <input class="search-form__input" />

  <!-- `button` element in the `search-form` block -->
  <button class="search-form__button">Search</button>
</form>
```

#### 使用指南

- 元素可以相互嵌套，且可以有任意数量的嵌套级别
- 元素始终是块的一部分，不应将其与块分开使用。
- 元素是可选的块组件。并非所有块都有元素。

代码示例：

```html title=元素嵌套
<!--
    Correct. The structure of the full element name follows the pattern:
    `block-name__element-name`
-->
<form class="search-form">
  <div class="search-form__content">
    <input class="search-form__input" />

    <button class="search-form__button">Search</button>
  </div>
</form>

<!--
    Incorrect. The structure of the full element name doesn't follow the pattern:
    `block-name__element-name`
-->
<form class="search-form">
  <div class="search-form__content">
    <!-- Recommended: `search-form__input` or `search-form__content-input` -->
    <input class="search-form__content__input" />

    <!-- Recommended: `search-form__button` or `search-form__content-button` -->
    <button class="search-form__content__button">Search</button>
  </div>
</form>
```

```html title=元素始终是块的一部分
<!-- Correct. Elements are located inside the `search-form` block -->
<!-- `search-form` block -->
<form class="search-form">
  <!-- `input` element in the `search-form` block -->
  <input class="search-form__input" />

  <!-- `button` element in the `search-form` block -->
  <button class="search-form__button">Search</button>
</form>

<!--
    Incorrect. Elements are located outside of the context of
    the `search-form` block
-->
<!-- `search-form` block -->
<form class="search-form"></form>

<!-- `input` element in the `search-form` block -->
<input class="search-form__input" />

<!-- `button` element in the `search-form` block-->
<button class="search-form__button">Search</button>
```

```html title=元素是可选的块组件
<!-- `search-form` block -->
<div class="search-form">
  <!-- `input` block -->
  <input class="input" />

  <!-- `button` block -->
  <button class="button">Search</button>
</div>
```

元素的命名依赖于块。

#### 我们应该创建块还是元素

- 如果一段代码可以复用，并且它不依赖于正在实现的其他页面组件，那就创建块。
- 如果一段代码不能在没有父实体(块)的情况下单独使用，那就创建块。

### 什么是修饰符

#### 布尔类型的修饰符

- 修饰符用于区分元素，其字段一般为带有 boolean 类型含义的词汇组成，例如 `disabled`、`focused`
- 不能单独使用
- 带有修饰符的全名结构如下:
  - `block-name_modifier-name`
  - `block-name__element-name_modifier-name`

```html title=布尔类型修饰符示例
<!-- The `search-form` block has the `focused` Boolean modifier -->
<form class="search-form search-form_focused">
  <input class="search-form__input" />

  <!-- The `button` element has the `disabled` Boolean modifier -->
  <button class="search-form__button search-form__button_disabled">
    Search
  </button>
</form>
```

### 键值对类型的修饰符

- 当修饰符值很重要时使用。例如，“具有设计主题的菜单”：。`_theme_islands`
- 修饰符全名的结构遵循以下模式:
  - `block-name_modifier-name_modifier-value`
  - `block-name_modifier-name_modifier-value`

```html title=键值类型修饰符示例
<!-- The `search-form` block has the `theme` modifier with the value `islands` -->
<form class="search-form search-form_theme_islands">
  <input class="search-form__input" />

  <!-- The `button` element has the `size` modifier with the value `m` -->
  <button class="search-form__button search-form__button_size_m">Search</button>
</form>

<!-- You can't use two identical modifiers with different values simultaneously -->
<form
  class="search-form
             search-form_theme_islands
             search-form_theme_lite"
>
  <input class="search-form__input" />

  <button
    class="search-form__button
                   search-form__button_size_s
                   search-form__button_size_m"
  >
    Search
  </button>
</form>
```

### 使用指南

- 从 BEM 的角度来看，修饰符不能与修改后的块或元素隔离使用。修饰符应更改实体的外观、行为或状态，而不是替换实体。

## 为什么要考虑使用 BEM

1. 如果我们想制作组件的新样式，我们可以很容易地看到哪些修饰符和子项已经存在。我们甚至可能意识到我们不需要首先编写任何 CSS，因为有一个预先存在的修饰符可以满足我们的需要。
2. 如果我们正在阅读标签而不是 CSS，我们应该能够快速了解哪个元素依赖于另一个元素，即使我们还不知道它的作用。例如: `.btn__price.btn`
3. 设计人员和开发人员可以一致地命名组件，以便团队成员之间的沟通更加轻松。换句话说，BEM 为项目中的每个人提供了一个声明性语法，以便他们在同一页面上可以共享该语法。

## 参考

1. [BEM 官网](https://en.bem.info/)
