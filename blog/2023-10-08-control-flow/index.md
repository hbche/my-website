---
title: Rust 通用编程概念 - 控制流
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '控制流', 'tutorial']
date: 2023-10-08
---

根据条件是否为真来决定是否执行某些代码，或根据条件是否为真来重复运行一段代码，是大部分编程语言的基本组成部分。Rust 代码中最常见的用来控制执行流的结构是 `if` 表达式和循环。

<!--truncate-->

## if 表达式

`if` 表达式允许根据条件执行不同的代码分支。你提供一个条件并表示 “如果条件满足，运行这段代码；如果条件不满足，不运行这段代码。”

```rust
use std::io;

fn even_number(num: i32) -> bool {
    num % 2 == 0
}

fn main() {
    println!("Please input a number");

    let mut number = String::new();
    io::stdin()
        .read_line(&mut number)
        .expect("Failed to read line");

    // number 转换之前必须使用 trim 函数对其结尾的换行转移进行删除,否则 parse 函数调用将报异常
    let number = number.trim().parse().expect("Failed to parse number");
    let is_even = even_number(number);

    if is_even {
        println!("{} is even number.", number);
    } else {
        println!("{} is odd number.", number);
    }
}
```

所有的 if 表达式都以 if 关键字开头，其后跟一个条件。在这个例子中，我们首先定义了一个函数 `even_number` 用来判断一个数字是否是偶数，并返回 `bool` 类型的结果;接着我们在 `main` 函数中调用了该函数，参数是用户从控制台输入的数字;接下来使用 `if` 表达式根据 `even_number` 函数的返回值进行判断，最后使用 `println` 宏打印相应的结果，并用输入的数字回填到标准输入占位符的位置。

输出:

```
PS E:\github\rust-projects\branches> cargo run
   Compiling branches v0.1.0 (E:\github\rust-projects\branches)
    Finished dev [unoptimized + debuginfo] target(s) in 0.45s
     Running `target\debug\branches.exe`
Please input a number
23
23 is odd number.
```

### 使用 else if 处理多重条件

### 在 let 语句中使用 if

## 使用循环重复执行

### 使用 loop 重复执行代码

### 从循环返回

### while 条件循环

### 使用 for 遍历集合

## 总结
