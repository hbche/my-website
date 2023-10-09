---
title: Rust 通用编程概念 - 数据类型
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '数据类型', '通用编程概念']
date: 2023-10-08
---

Rust 是一种**静态类型**(statically typed)的语言，这意味着它必须在编译期间就要知道所有变量的类型。编译器通常可以根据值和使用方式推导出我们想要使用的类型。在类型可能是多种情况时，例如我们使用 `parse` 将 `String` 转换成数值类型时，必须加上一个类型标注：

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

帮助信息中给出了修改建议 `consider giving 'guess' an explicit type`[考虑给 guess 一个明确的类型]

<!--truncate-->

## 标量类型

标量（scalar）类型表示单个值。Rust 有 4 个基本的标量类型：整型、浮点型、布尔型和字符。你可能从其他语言了解过这些类型。下面我们深入了解它们在 Rust 中的用法。

### 整数类型

整数（integer）是没有小数部分的数字。例如 `u32`，此类型声明表明它关联的值应该是占用 32 位空间的无符号整型（有符号整型以 i 开始，i 是英文单词 integer 的首字母，与之相反的是 u，代表无符号 unsigned 类型）。下表显示了 Rust 中内置的整数类型。我们可以使用这些定义形式中的任何一个来声明整数值的类型。

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

此外，`isize` 和 `usize` 类型取决于程序运行的计算机体系结构，在表中表示为“arch”：若使用 64 位架构系统则为 64 位，若使用 32 位架构系统则为 32 位。

可按下表中所示的任意形式来编写整型的字面量。注意，可能属于多种数字类型的数字字面量允许使用类型后缀来指定类型，例如 `57u8`。数字字面量还可以使用 `_` 作为可视分隔符以方便读数，如 `1_000`，此值和 `1000` 相同。

| 数字字面量         | 示例          |
| ------------------ | ------------- |
| 十进制             | `98_222`      |
| 十六进制           | `0xff`        |
| 八进制             | `0o77`        |
| 二进制             | `0b1111_0000` |
| 字节 (仅限于 `u8`) | `b'A'`        |

那么该使用哪种类型的整型呢？如果不确定，**Rust 的默认形式通常是个不错的选择，整型默认是 `i32`**。`isize` 和 `usize` 的主要应用场景是用作某些集合的索引。

:::caution

#### 整型溢出

比方说有一个 `u8` 类型的变量 ，它可以存放从 `0` 到 `255` 的值。那么当你将其修改为范围之外的值，比如 `256`，则会发生**整型溢出**（integer overflow），这会导致两种行为的其中一种。当在调试（debug）模式编译时，Rust 会检查整型溢出，若存在这些问题则使程序在编译时 panic。Rust 使用 panic 这个术语来表明程序因错误而退出。

在当使用 --release 参数进行发布（release）模式构建时，Rust **不**检测会导致 panic 的整型溢出。相反当检测到整型溢出时，Rust 会进行一种被称为二进制补码包裹（two’s complement wrapping）的操作。简而言之，大于该类型最大值的数值会被“包裹”成该类型能够支持的对应数字的最小值。比如在 u8 的情况下，256 变成 0，257 变成 1，依此类推。程序不会 `panic`，但是该变量的值可能不是你期望的值。依赖整型溢出包裹的行为不是一种正确的做法。

要显式处理溢出的可能性，可以使用标准库针对原始数字类型提供的以下一系列方法：

- 使用 `wrapping_*` 方法在所有模式下进行包裹，例如 wrapping_add
- 如果使用 `checked_*` 方法时发生溢出，则返回 None 值
- 使用 `overflowing_*` 方法返回该值和一个指示是否存在溢出的布尔值
- 使用 `saturating_*` 方法使值达到最小值或最大值

:::

### 浮点类型

**浮点数**（floating-point number）是带有小数点的数字，在 Rust 中浮点类型（简称浮点型）数字也有两种基本类型。Rust 的浮点型是 `f32` 和 `f64`，它们的大小分别为 `32` 位和 `64` 位。默认浮点类型是 `f64`，因为在现代的 CPU 中它的速度与 `f32` 的几乎相同，但精度更高。**所有浮点型都是有符号的。**

下面是一个演示浮点数的示例:

```rust
fn main() {
    let x = 2.0; // f64

    ley y: f32 = 3.0; // f32
}
```

浮点数按照 IEEE-754 标准表示。`f32` 类型是单精度浮点型，`f64` 为双精度浮点型。

### 数字运算

Rust 的所有数字类型都支持基本数学运算：加法、减法、乘法、除法和取模运算。**整数除法会向下取整。**下面代码演示了各使用一条 let 语句来说明相应数字运算的用法：

```rust
fn main() {
    let sum = 5 + 10;

    let difference = 95.5 - 4.3;

    let product = 4 * 30;

    let quotient = 56.7 / 32.2;
    let floored = 2 / 3; // Results in 0

    let remainder = 43 % 5;

    println!(
        "sum: {}, difference: {}, product: {}, quotient: {}, floored: {}, remainder: {}",
        sum, difference, product, quotient, floored, remainder
    );
}
```

输出:

```
sum: 15, difference: 91.2, product: 120, quotient: 1.7608695652173911, floored: 0, remainder: 3
```

### 布尔类型

和大多数编程语言一样，Rust 中的布尔类型也有两个可能的值：`true` 和 `false`。布尔值的大小为 1 个字节。Rust 中的布尔类型使用 `bool` 声明。例如：

```rust
fn main() {
    let t = true;

    let f: bool = false;
}
```

### 字符类型

Rust 的 `char`（字符）类型是该语言最基本的字母类型，下面是一些声明 `char` 值的例子：

```rust
fn main() {
    let c = 'z';
    let z = 'ℤ';
    let heart_eyed_cat = '😻';
    println!("c: {}, z: {}, heart_eyed_cat: {}", c, z, heart_eyed_cat);
}
```

输出:

```
country: z, province: ℤ, heart_eyed_cat: 😻
```

:::caution
注意，我们声明的 `char` 字面量采用单引号括起来 [双引号也可以]，这与 **字符串** 字面量不同，字符串字面量是用双引号括起来。Rust 的字符类型大小为 4 个字节，表示的是一个 Unicode 标量值，这意味着它可以表示的远远不止是 ASCII。标音字母，中文/日文/韩文的文字，emoji，还有零宽空格(zero width space)在 Rust 中都是合法的字符类型。Unicode 值的范围为 `U+0000 ~ U+D7FF` 和 `U+E000~U+10FFFF`。不过“字符”并不是 Unicode 中的一个概念，所以人在直觉上对“字符”的理解和 Rust 的字符概念并不一致。
:::

字符串示例:

```rust
fn main() {
    let country = "China";
    let province = "Hubei";
    let heart_eyed_cat = "😻";

    println!(
        "country: {}, province: {}, heart_eyed_cat: {}",
        country, province, heart_eyed_cat
    );
}
```

输出:

```
country: China, province: Hubei, heart_eyed_cat: 😻
```

:::caution

字符串常量只能使用双引号`"`包裹，不能用单引号`'`包裹，否则 Rust 编译器会报错。

```
error: character literal may only contain one codepoint
 --> src\main.rs:2:19
  |
2 |     let country = 'China';
  |                   ^^^^^^^
  |
help: if you meant to write a `str` literal, use double quotes
  |
2 |     let country = "China";
  |                   ~~~~~~~
error: character literal may only contain one codepoint
 --> src\main.rs:3:20
  |
3 |     let province = 'Hubei';
  |                    ^^^^^^^
  |
help: if you meant to write a `str` literal, use double quotes
  |
3 |     let province = "Hubei";
  |                    ~~~~~~~

error: could not compile `guessing` (bin "guessing") due to 2 previous errors
```

上述提示中 `if you meant to write a 'str' literal, use double quotes` 已经给出了很明确的提示了 `如果你想写一个' str '字面值，请使用双引号`，并给出了正确的格式。

:::

## 复合类型

**复合类型**（compound type）可以将多个值组合成一个类型。Rust 有两种基本的复合类型：元组（tuple）和数组（array）。

### 元组类型

元组是将多种类型的多个值组合到一个复合类型中的一种基本方式。元组的长度是固定的：声明后，它们就无法增长或缩小。

我们通过在小括号内写入以逗号分隔的值列表来创建一个元组。元组中的每个位置都有一个类型，并且元组中不同值的类型不要求是相同的。我们在下面示例中添加了可选的类型标注：

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
```

变量 tup 绑定到整个元组，因为元组被认作是单个复合元素。 想从元组中获取个别值，我们可以使用模式匹配来解构（destructure）元组的一个值，如下所示：

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (x, y, z) = tup;
    println!("The value of tup is: ({}, {}, {})", x, y, z);
}
```

输出:

```
The value of tup is: (500, 6.4, 1)
```

该程序首先创建一个元组并将其绑定到变量 tup 上。 然后它借助 let 来使用一个模式匹配 tup，并将它分解成三个单独的变量 x、y 和 z。 这过程称为解构（destructuring），因为它将单个元组分为三部分。最后，程序打印出 y 值，为 6.4。

除了通过模式匹配进行解构外，我们还可以使用一个句点（.）连上要访问的值的索引来直接访问元组元素。例如：

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    println!("The value of tup is: ({}, {}, {})", tup.0, tup.1, tup.2);
}
```

输出:

```
The value of tup is: (500, 6.4, 1)
```

和大多数编程语言一样，元组中的第一个索引为 0。

没有任何值的元组 () 是一种特殊的类型，只有一个值，也写成 ()。该类型被称为单元类型（unit type），该值被称为单元值（unit value）。如果表达式不返回任何其他值，就隐式地返回单元值。

### 数组类型

将多个值组合在一起的另一种方式就是使用数组（array）。与元组不同，数组的每个元素必须具有相同的类型。与某些其他语言中的数组不同，Rust 中的数组具有固定长度。

我们在方括号内以逗号分隔的列表形式将值写到数组中：

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];
}
```

当你希望将数据分配到栈（stack）而不是堆（heap）时，或者当你希望确保始终具有固定数量的元素时，数组特别有用。但它们不像 vector（译注：中文字面翻译为“向量”，在 Rust 中意义为“动态数组，可变数组”）类型那么灵活。vector 类型类似于标准库中提供的集合类型，其大小允许增长或缩小。如果不确定是使用数组还是 vector，那就应该使用一个 vector。

不过当你明确元素数量不需要改变时，数组会更有用。例如，如果你在程序中使用月份的名称，你很可能希望使用的是数组而不是 vector，因为你知道它始终包含 12 个元素：

```rust
let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
```

使用方括号编写数组的类型，其中包含每个元素的类型、分号，然后是数组中的元素数，如下所示：

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5];
```

这里，`i32` 是每个元素的类型。分号之后，数字 `5` 表明该数组包含 5 个元素。

以这种方式编写数组的类型看起来类似于初始化数组的另一种语法：如果要为每个元素创建包含相同值的数组，可以指定初始值，后跟分号，然后在方括号中指定数组的长度，如下所示：

```rust
fn main() {
    let a: [i32; 5] = [3; 5];
    println!(
        "The value of a is: [{}, {}, {}, {}, {}]",
        a[0], a[1], a[2], a[3], a[4]
    );
}
```

变量名为 `a` 的数组将包含 `5` 个元素，这些元素的值初始化为 `3`。这种写法与 `let a = [3, 3, 3, 3, 3];` 效果相同，但更简洁。

:::caution

#### 元组索引 vs 数组索引

```rust
fn main() {
    let a = [3; 5];
    println!(
        "The value of a is: [{}, {}, {}, {}, {}]",
        a.0, a.1, a.2, a.3, a.4
    );
}
```

如果上述数组使用的是点号引用指定索引的数据，将会报如下错误:

```
error[E0609]: no field `0` on type `[{integer}; 5]`
 --> src\main.rs:5:11
  |
5 |         a.0, a.1, a.2, a.3, a.4
  |         --^
  |         |
  |         help: instead of using tuple indexing, use array indexing: `a[0]`

error[E0609]: no field `1` on type `[{integer}; 5]`
 --> src\main.rs:5:16
  |
5 |         a.0, a.1, a.2, a.3, a.4
  |              --^
  |              |
  |              help: instead of using tuple indexing, use array indexing: `a[1]`

error[E0609]: no field `2` on type `[{integer}; 5]`
 --> src\main.rs:5:21
  |
5 |         a.0, a.1, a.2, a.3, a.4
  |                   --^
  |                   |
  |                   help: instead of using tuple indexing, use array indexing: `a[2]`

error[E0609]: no field `3` on type `[{integer}; 5]`
 --> src\main.rs:5:26
  |
5 |         a.0, a.1, a.2, a.3, a.4
  |                        |
  |                        help: instead of using tuple indexing, use array indexing: `a[3]`

error[E0609]: no field `4` on type `[{integer}; 5]`
 --> src\main.rs:5:31
  |
5 |         a.0, a.1, a.2, a.3, a.4
  |                             --^
  |                             |
  |                             help: instead of using tuple indexing, use array indexing: `a[4]`

For more information about this error, try `rustc --explain E0609`.
error: could not compile `guessing` (bin "guessing") due to 5 previous errors
```

帮助提示给的也很清晰，提示我们使用数组索引 `a[0]` 替换元组索引 `a.0`。

:::

#### 访问数组元素

数组是可以在栈上分配的已知固定大小的单个内存块。可以使用索引访问数组的元素，如下所示：

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
}
```

在这个例子中，名为 `first` 的变量将获得值 `1`，因为它是数组中索引 `[0]` 处的值。名为 second 的变量将从数组中的索引 `[1]` 中获取得 `2`。

#### 无效的数组元素访问

```rust
use std::io;

fn main() {
    let a = [1, 3, 5, 7, 9];
    println!("Please enter an array index.");
    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");
    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];
    println!(
        "The value of the element at index {} is: {}",
        index, element
    );
}
```

此代码编译成功。如果使用 cargo run 来运行此代码并输入 0、1、2、3 或 4，则程序将打印数组对应索引的值。如果输入的是超出数组末尾的数字，例如 5，则会看到类似以下的输出：

```
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target\debug\guessing.exe`
Please enter an array index.
5
thread 'main' panicked at 'index out of bounds: the len is 5 but the index is 5', src\main.rs:16:19
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
error: process didn't exit successfully: `target\debug\guessing.exe` (exit code: 101)
```

该程序在索引操作中使用无效值时导致**运行时**（runtime）错误。程序退出并显示错误消息，未执行后面的 println! 语句。当你尝试使用索引访问元素时，Rust 将检查你指定的索引是否小于数组长度。如果索引大于或等于数组长度，Rust 会出现 `panic`。这种检查必须在运行时进行，尤其是在这种情况下，因为编译器可能无法知道用户之后运行代码时将输入什么值。

这是 Rust 在安全原则实践中的第一个例子。在很多低级语言中，并不进行这种检查，而且在你使用不正确的索引时，可以访问无效的内存。Rust 通过立即退出来的方式防止这种错误，而不是允许内存访问并继续运行程序。
