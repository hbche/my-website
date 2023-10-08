---
title: Rust 通用编程概念 - 数据类型
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', 'cargo', 'tutorial']
date: 2023-10-08
---

Rust 是一种**静态类型**(statically typed)的语言，这意味着它必须在编译器知道所有变量的类型。编译器通常可以根据值和使用方式推导出我们想要使用的类型。例如我们将字符串转换成数值类型时，必须加上一个类型标注：

```rust
let guess: u32 = "42".parse().expect("Not a number");
```

如果不添加类型标注的话，Rust 将显示如下错误

```
error[E0282]: type annotations needed
 --> src\main.rs:2:9
  |
2 |     let guess = "42".parse().expect("Not a number");
  |         ^^^^^
  |
help: consider giving `guess` an explicit type
  |
2 |     let guess: /* Type */ = "42".parse().expect("Not a number");
  |              ++++++++++++

For more information about this error, try `rustc --explain E0282`.
error: could not compile `guessing` (bin "guessing") due to previous error
```

<!--truncate-->

## 标量类型

标量（scalar）类型表示单个值。Rust 有 4 个基本的标量类型：整型、浮点型、布尔型和字符。你可能从其他语言了解过这些类型。下面我们深入了解它们在 Rust 中的用法。此类型声明表明它关联的值应该是占用 32 位空间的无符号整型（有符号整型以 i 开始，i 是英文单词 integer 的首字母，与之相反的是 u，代表无符号 unsigned 类型）。

### 整数类型

整数（integer）是没有小数部分的数字。

| 长度   | 有符号类型 | 无符号类型 |
| ------ | ---------- | ---------- |
| 8 位   | i8         | u8         |
| 16 位  | i16        | u16        |
| 32 位  | i32        | u32        |
| 64 位  | i64        | u64        |
| 128 位 | i128       | u128       |
| arch   | isize      | usize      |

有符号和无符号表示数字能否取负数——也就是说，这个数是否可能是负数（有符号类型），或一直为正而不需要带上符号（无符号类型）。

每个有符号类型规定的数字范围是 -(2n - 1) ~ 2n - 1 - 1，其中 n 是该定义形式的位长度。所以 i8 可存储数字范围是 -(27) ~ 27 - 1，即 -128 ~ 127。无符号类型可以存储的数字范围是 0 ~ 2n - 1，所以 u8 能够存储的数字为 0 ~ 28 - 1，即 0 ~ 255。

此外，isize 和 usize 类型取决于程序运行的计算机体系结构，在表中表示为“arch”：若使用 64 位架构系统则为 64 位，若使用 32 位架构系统则为 32 位。

可按下表中所示的任意形式来编写整型的字面量。注意，可能属于多种数字类型的数字字面量允许使用类型后缀来指定类型，例如 57u8。数字字面量还可以使用 `_` 作为可视分隔符以方便读数，如 1_000，此值和 1000 相同。

| 数字字面量         | 示例          |
| ------------------ | ------------- |
| 十进制             | `98_222`      |
| 十六进制           | `0xff`        |
| 八进制             | `0o77`        |
| 二进制             | `0b1111_0000` |
| 字节 (仅限于 `u8`) | `b'A'`        |

那么该使用哪种类型的整型呢？如果不确定，Rust 的默认形式通常是个不错的选择，整型默认是 i32。isize 和 usize 的主要应用场景是用作某些集合的索引。

:::caution

##### 整型溢出

比方说有一个 u8 ，它可以存放从 0 到 255 的值。那么当你将其修改为范围之外的值，比如 256，则会发生**整型溢出**（integer overflow），这会导致两种行为的其中一种。当在调试（debug）模式编译时，Rust 会检查整型溢出，若存在这些问题则使程序在编译时 panic。Rust 使用 panic 这个术语来表明程序因错误而退出。

在当使用 --release 参数进行发布（release）模式构建时，Rust **不**检测会导致 panic 的整型溢出。相反当检测到整型溢出时，Rust 会进行一种被称为二进制补码包裹（two’s complement wrapping）的操作。简而言之，大于该类型最大值的数值会被“包裹”成该类型能够支持的对应数字的最小值。比如在 u8 的情况下，256 变成 0，257 变成 1，依此类推。程序不会 panic，但是该变量的值可能不是你期望的值。依赖整型溢出包裹的行为不是一种正确的做法。

要显式处理溢出的可能性，可以使用标准库针对原始数字类型提供的以下一系列方法：

- 使用 `wrapping_*` 方法在所有模式下进行包裹，例如 wrapping_add
- 如果使用 `checked_*` 方法时发生溢出，则返回 None 值
- 使用 `overflowing_*` 方法返回该值和一个指示是否存在溢出的布尔值
- 使用 `saturating_*` 方法使值达到最小值或最大值

:::

### 浮点类型

**浮点数**（floating-point number）是带有小数点的数字，在 Rust 中浮点类型（简称浮点型）数字也有两种基本类型。Rust 的浮点型是 f32 和 f64，它们的大小分别为 32 位和 64 位。默认浮点类型是 f64，因为在现代的 CPU 中它的速度与 f32 的几乎相同，但精度更高。所有浮点型都是有符号的。

下面是一个演示浮点数的示例:

```rust
fn main() {
  let x = 2.0; // f64

  ley y: f32 = 3.0; // f32
}
```

浮点数按照 IEEE-754 标准表示。f32 类型是单精度浮点型，f64 为双精度浮点型。

### 布尔型

### 字符型

## 符合类型
