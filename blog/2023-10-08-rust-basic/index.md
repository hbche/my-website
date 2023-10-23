---
title: Rust 通用编程概念
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '入门', '通用编程概念', '数据类型', '控制流', '函数']
date: 2023-10-08
---

## 变量和可变性

在 Rust 中，变量和可变性是两个重要的概念，它们用于管理数据的状态和访问权限。

1. **变量（Variables）**：

   - 在 Rust 中，变量是用于存储和管理数据的标识符。变量可以具有不同的数据类型，包括整数、浮点数、布尔值、字符、结构体等。
   - 变量默认是不可变的（immutable），这意味着一旦赋值后，其值不能被修改。例如：
     ```rust
     let x = 5;  // 不可变变量
     ```
   - 不可变变量的好处是可以确保数据不会在不经意间被修改，从而提高了代码的安全性。

2. **可变性（Mutability）**：
   - 在 Rust 中，如果需要更改变量的值，可以使用`mut`关键字来声明可变变量。可变变量允许在其作用域内修改其值。例如：
     ```rust
     let mut y = 10;  // 可变变量
     y = y + 1;       // 可以修改 y 的值
     ```
   - 使用可变性时，需要谨慎，因为它引入了潜在的并发问题和不可预测的行为。Rust 的可借用规则和所有权系统帮助确保了可变性的安全使用。

总结：

- 变量用于存储数据，可以是不可变的（默认情况下）或可变的（使用`mut`关键字声明）。
- 不可变变量在赋值后不能更改，这有助于代码的安全性和可维护性。
- 可变变量允许在其作用域内修改其值，但需要注意可变性引入的潜在问题。
- Rust 的所有权系统和借用规则有助于确保可变性的安全使用，防止数据竞态和内存不安全问题。
<!--truncate-->

### 常量

在 Rust 中，常量（constants）是在编译时无法更改其值的变量。常量的名称通常使用大写字母和下划线的命名约定，并且必须在声明时明确指定其类型。与不可变变量不同，常量的值必须在编译时确定，不能在运行时计算或更改。这使得常量非常适合存储不会更改的配置参数、数学常数和其他编译时确定的值。

以下是定义和使用常量的一般语法：

```rust
const THREE_HOURS_IN_SECONDS: u32 = 3;
fn main() {
    // const THREE_HOURS_IN_SECONDS: u32 = 3 * 60;
    // println!(
    //     "The value of THREE_HOURS_IN_SECONDS is: {}",
    //     THREE_HOURS_IN_SECONDS
    // );
    const THREE_HOURS_IN_SECONDS: u32 = 3 * 60 * 60;
    println!(
        "The value of THREE_HOURS_IN_SECONDS is: {}",
        THREE_HOURS_IN_SECONDS
    );
}
```

输出结果：

```
warning: constant `THREE_HOURS_IN_SECONDS` is never used
 --> src\main.rs:1:7
  |
1 | const THREE_HOURS_IN_SECONDS: u32 = 42;
  |       ^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: `variables` (bin "variables") generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.45s
     Running `target\debug\variables.exe`
The value of THREE_HOURS_IN_SECONDS is: 10800
```

在上述示例中，我们定义了一个名为 `THREE_HOURS_IN_SECONDS` 的常量，类型为 `u32`，并将其值设置为 `3 * 60 * 60`。然后，在 `main` 函数中，我们打印了常量的值。

如果打开注释部分的代码，输出如下：

```
   Compiling variables v0.1.0 (E:\github\rust-projects\variables)
error[E0428]: the name `THREE_HOURS_IN_SECONDS` is defined multiple times
 --> src\main.rs:8:5
  |
3 |     const THREE_HOURS_IN_SECONDS: u32 = 3 * 60;
  |     ------------------------------------------- previous definition of the value `THREE_HOURS_IN_SECONDS` here
...
8 |     const THREE_HOURS_IN_SECONDS: u32 = 3 * 60 * 60;
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `THREE_HOURS_IN_SECONDS` redefined here
  |
  = note: `THREE_HOURS_IN_SECONDS` must be defined only once in the value namespace of this block

For more information about this error, try `rustc --explain E0428`.
error: could not compile `variables` (bin "variables") due to previous error
```

总结：

- 常量的类型必须显式指定，它不能像不可变变量那样进行类型推断。
- 常量可以在任何作用域中定义，并且具有全局作用域，可以在整个程序中访问。
- 常量的值不能在运行时更改，它们是在编译时确定的。
- 常量名称通常使用大写字母和下划线，以便与不可变变量区分开来。
- 同一作用域常量不可重复声明，不同作用域常量可以重复声明，但是 Rust 编译器可能会报声明的变量未引用的警告。

常量在 Rust 中是一个重要的编程工具，用于存储程序的配置信息、常量参数和其他在运行时不会更改的值。它们有助于提高代码的可维护性和安全性。

### 遮蔽

在 Rust 中，遮蔽(shadowing)是一种将一个变量引入到一个更内部作用域的过程，以隐藏(或遮蔽)外部作用域中具有相同名称的变量。遮蔽允许我们在 **同一作用域内多次声明同名变量** ，每次声明都会创建一个新的变量，新的变量会隐藏先前声明的同名变量。这个过程不改变变量的可变性，但是可以改变变量的值和类型。

以下是一个示例，说明了 Rust 中的遮蔽:

```rust
fn main() {
    let x = "你好~";  // 外部作用域的 x
    println!("x in outer scope: {}", x);    // 打印外部作用域的 x

    {
        let x = 10; // 内部作用域中的 x 遮蔽了外部作用域的 x
        println!("x in inner scope: {}", x);    // 打印内部作用域的 x
    }

    // 新声明的变量会遮蔽先前的同名变量
    let x = x.len();
    // 在这里又可以访问外部作用域中的 x, 因为内部作用域的 x 已经超出了范围
    println!("x in outer scope: {}", x); // 6
}
```

输出结果:

```
x in outer scope: 你好~
x in inner scope: 10
x in outer scope: 7
```

在上述示例中，我们首先声明了一个名为 x 的变量，并在外部作用域中赋予它值 "你好~"。然后，在内部作用域中声明了一个名为 x 的新变量，它遮蔽了外部作用域的 x。在内部作用域中，我们可以访问和修改内部作用域的 x，而不会影响外部作用域的 x。一旦内部作用域结束，内部作用域的 x 超出了范围，我们又可以访问外部作用域的 x。

遮蔽通常用于引入新变量，而不是更改现有变量。这允许在不改变可变性的情况下，对变量的值和类型进行更改。需要注意的是，Rust 的编译器会警告您关于未使用的变量，因此遮蔽可能会导致警告，但可以安全地忽略这些警告。

### 问题

1. 代码是否能正常运行？

   ```rust
   fn main() {
       println!(
       "The value of THREE_HOURS_IN_SECONDS is: {}",
       THREE_HOURS_IN_SECONDS
       );
       const THREE_HOURS_IN_SECONDS: u32 = 3 * 60 * 60;
    }
   ```

   在您提供的代码示例中，虽然在 `println!` 宏中似乎引用了常量 `THREE_HOURS_IN_SECONDS` 在其声明之前，但实际上它可以正常运行。这是因为在 Rust 中，编译器会在编译时进行静态分析并执行名为 "名字解析（name resolution）" 的步骤，以确定变量和常量的词法作用域。

   具体来说，Rust 编译器会在整个代码文件中查找常量 `THREE_HOURS_IN_SECONDS` 的定义，而不仅仅是在 `println!` 宏的内部。如果找到常量定义，它就会将该常量的值插入到 `println!` 宏中，然后在运行时将其打印出来。

   这是因为常量的值在编译时就已经确定，所以编译器可以在编译期间执行这种操作。这与变量的行为不同，变量的值在运行时确定，因此不能在使用之前声明。

   虽然这在 Rust 中是合法的，但为了代码的可读性和清晰性，通常建议在使用常量之前先声明它们，以防止可能的混淆或误解。

2. Rust 中常量是否存在遮蔽

   在 Rust 中，常量不会发生遮蔽（shadowing）的情况。遮蔽通常是与变量相关的概念，而不是常量。常量在其作用域内是唯一的，不允许在相同作用域内多次定义相同名称的常量。

   例如，以下示例是非法的，因为它尝试在同一作用域内多次定义相同名称的常量：

   ```rust
   const MY_CONSTANT: i32 = 42;
   const MY_CONSTANT: f64 = 3.14;  // 错误：常量名重复定义

   fn main() {
       println!("The value of MY_CONSTANT is: {}", MY_CONSTANT);
   }
   ```

   与变量不同，常量不能被遮蔽或重新定义。一旦常量在某个作用域内定义，它就不能在相同的作用域内再次定义或修改。这有助于确保常量的唯一性和稳定性。

   Rust 常量是否允许允许声明多次
   在 Rust 中，常量不允许在同一作用域内多次声明，即常量的名称必须是唯一的。如果您尝试在同一作用域内多次声明具有相同名称的常量，编译器将会产生错误。

   这是因为常量在编译时被赋予一个确定的、不可更改的值，并且具有全局作用域，所以不允许多次定义相同名称的常量。这有助于确保常量的唯一性，防止在程序中引入混淆或不一致的值。

   以下是一个示例，演示了在同一作用域内多次声明相同名称的常量会导致编译错误：

   ```rust
   const MY_CONSTANT: i32 = 42;
   const MY_CONSTANT: f64 = 3.14;  // 错误：常量名重复定义

   fn main() {
       println!("The value of MY_CONSTANT is: {}", MY_CONSTANT);
   }
   ```

   在上述示例中，我们尝试在同一作用域内两次声明名为`MY_CONSTANT`的常量，一个是`i32`类型，另一个是`f64`类型。这将导致编译错误，因为常量名称必须是唯一的。要解决此错误，您可以选择不同的名称或将它们分开到不同的作用域中。

3. Rust 中常量和不可变变量的区别

   在 Rust 中，常量（constants）和不可变变量（immutable variables）之间有一些关键的区别，尽管它们都涉及到不可变性。

   1. **赋值和可变性**

      - **常量**: 常量在声明时必须赋予一个确定的值，并且一旦赋值后，它们的值在整个程序运行过程中都不能被修改。常量在声明时使用 `const` 关键字，并且通常采用大写字母和下划线的命名约定，例如 `const THREE_HOURS_IN_SECONDS: i32 = 3 * 60 * 60;`。
      - **不可变变量**: 不可变变量在声明后可以赋值一次，并且一旦赋值后，它们的值也不能被修改。不可变变量在声明时使用`let` 关键字，例如 `let x = 10;`。

   2. **作用域和生命周期**

      - **常量**: 常量具有全局作用域（global scope），它们可以在整个程序中访问，无论它们被定义在哪个作用域内。
      - **不可变变量**: 不可变变量的作用域通常是有限的，限定在它们被声明的代码块内。这有助于减小不可变性的范围，以提高程序的可维护性。

   3. **类型和可变性**

      - **常量**: 常量的类型必须在声明时明确指定，且不能随后更改。常量通常用于存储编译时确定的值，例如数学常数或配置信息。
      - **不可变变量**: 不可变变量的类型可以通过类型推断自动确定，也可以显式指定。不可变变量通常用于存储运行时确定的数据。

   4. **编程惯例**

      - **常量**: 常量通常用于存储不会更改的数据，如数学常数、配置参数、全局常量等。
      - **不可变变量**: 不可变变量通常用于存储会在程序运行期间发生变化的数据，但在某个特定点上不需要改变的数据。

   总的来说，常量和不可变变量都用于实现不可变性，但它们的用途和语法略有不同。选择使用哪种取决于您的需求：如果需要在整个程序中共享不会更改的值，常量是一个不错的选择；如果只需要在特定作用域内保持不可变性，不可变变量更合适。不管哪种方式，Rust 的强类型系统和不可变性保证了代码的安全性和可维护性。

4. Rust 中遮蔽和 mut 的区别

   在 Rust 中，"遮蔽"（Shadowing）和"mut"（Mutable）是两种不同的概念，它们用于处理变量的不可变性和可变性，有一些区别：

   1. 遮蔽（Shadowing）：

      - 遮蔽是指在同一作用域内声明具有相同名称的新变量，从而隐藏（遮蔽）之前同名变量的值。遮蔽允许您在同一作用域内多次声明变量，但每次声明都会创建一个新的变量。
      - 遮蔽可以用于在同一作用域内改变变量的类型，例如，您可以先声明一个不可变变量，然后遮蔽它并声明一个可变变量。
      - 遮蔽后的变量，包括之前的同名变量，都可以具有不同的类型和值。遮蔽通常用于需要在相同作用域内引入新变量并保留之前变量的值的情况。

      ```rust
      let x = 5;  // 不可变变量
      let x = x + 1; // 遮蔽 x，创建一个新的不可变变量
      let mut x = x * 2; // 遮蔽并创建一个新的可变变量
      ```

   2. mut 关键字（Mutable）：

      - "mut"是 Rust 中的关键字，用于声明可变变量。使用"mut"关键字声明的变量可以在其作用域内修改其值。
      - 声明一个可变变量后，您可以在需要的时候重新赋值给它，而不需要重新声明变量。这允许对变量的值进行更改。

      ```rust
      let mut y = 5;  // 声明一个可变变量
      y = y + 1;      // 可以修改 y 的值
      ```

   3. 总结:
      - 遮蔽允许在同一作用域内多次声明变量，每次声明都创建一个新的变量，可以改变变量的类型和值。
      - "mut"关键字用于声明可变变量，允许在其作用域内修改变量的值。不使用遮蔽，只需使用"mut"关键字即可实现可变性。
      - 两者通常根据需求选择使用。如果您只需要修改变量的值而不需要改变其类型，可以使用"mut"关键字。如果需要在同一作用域内引入新的同名变量，可以使用遮蔽。

## 数据类型

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

### 标量类型

标量（scalar）类型表示单个值。Rust 有 4 个基本的标量类型：整型、浮点型、布尔型和字符。你可能从其他语言了解过这些类型。下面我们深入了解它们在 Rust 中的用法。

#### 整数类型

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

##### 整型溢出

比方说有一个 `u8` 类型的变量 ，它可以存放从 `0` 到 `255` 的值。那么当你将其修改为范围之外的值，比如 `256`，则会发生**整型溢出**（integer overflow），这会导致两种行为的其中一种。当在调试（debug）模式编译时，Rust 会检查整型溢出，若存在这些问题则使程序在编译时 panic。Rust 使用 panic 这个术语来表明程序因错误而退出。

在当使用 --release 参数进行发布（release）模式构建时，Rust **不**检测会导致 panic 的整型溢出。相反当检测到整型溢出时，Rust 会进行一种被称为二进制补码包裹（two’s complement wrapping）的操作。简而言之，大于该类型最大值的数值会被“包裹”成该类型能够支持的对应数字的最小值。比如在 u8 的情况下，256 变成 0，257 变成 1，依此类推。程序不会 `panic`，但是该变量的值可能不是你期望的值。依赖整型溢出包裹的行为不是一种正确的做法。

要显式处理溢出的可能性，可以使用标准库针对原始数字类型提供的以下一系列方法：

- 使用 `wrapping_*` 方法在所有模式下进行包裹，例如 wrapping_add
- 如果使用 `checked_*` 方法时发生溢出，则返回 None 值
- 使用 `overflowing_*` 方法返回该值和一个指示是否存在溢出的布尔值
- 使用 `saturating_*` 方法使值达到最小值或最大值

:::

#### 浮点类型

**浮点数**（floating-point number）是带有小数点的数字，在 Rust 中浮点类型（简称浮点型）数字也有两种基本类型。Rust 的浮点型是 `f32` 和 `f64`，它们的大小分别为 `32` 位和 `64` 位。默认浮点类型是 `f64`，因为在现代的 CPU 中它的速度与 `f32` 的几乎相同，但精度更高。**所有浮点型都是有符号的。**

下面是一个演示浮点数的示例:

```rust
fn main() {
    let x = 2.0; // f64

    ley y: f32 = 3.0; // f32
}
```

浮点数按照 IEEE-754 标准表示。`f32` 类型是单精度浮点型，`f64` 为双精度浮点型。

#### 数字运算

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

#### 布尔类型

和大多数编程语言一样，Rust 中的布尔类型也有两个可能的值：`true` 和 `false`。布尔值的大小为 1 个字节。Rust 中的布尔类型使用 `bool` 声明。例如：

```rust
fn main() {
    let t = true;

    let f: bool = false;
}
```

#### 字符类型

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

### 复合类型

**复合类型**（compound type）可以将多个值组合成一个类型。Rust 有两种基本的复合类型：元组（tuple）和数组（array）。

#### 元组类型

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

#### 数组类型

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

##### 访问数组元素

数组是可以在栈上分配的已知固定大小的单个内存块。可以使用索引访问数组的元素，如下所示：

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
}
```

在这个例子中，名为 `first` 的变量将获得值 `1`，因为它是数组中索引 `[0]` 处的值。名为 second 的变量将从数组中的索引 `[1]` 中获取得 `2`。

##### 无效的数组元素访问

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

## 函数

函数在 Rust 代码中很普遍。你已经见过语言中最重要的函数之一：`main` 函数，它是很多程序的入口点。你也见过 `fn` 关键字，它用来声明新函数。

Rust 代码中的函数和变量名使用下划线命名法（snake case，直译为蛇形命名法）规范风格。在下划线命名法中，所有字母都是小写并使用下划线分隔单词。这是一个包含函数定义示例的程序：

```rust
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
```

Rust 中的函数定义以 `fn` 开始，后跟着函数名和一对圆括号。大括号告诉编译器函数体在哪里开始和结束。

可以使用函数名后跟圆括号来调用我们定义过的任意函数。因为程序中已定义 `another_function` 函数，所以可以在 `main` 函数中调用它。注意，源码中 `another_function` 定义在 `main` 函数**之后**；也可以定义在之前。**Rust 不关心函数定义于何处，只要定义了就行。**

### 参数

函数也可以被定义为拥有参数（parameter），参数是特殊变量，是函数签名的一部分。当函数拥有参数（形参）时，可以为这些参数提供具体的值（实参）。技术上讲，这些具体值被称为实参（argument），但是在日常交流中，人们倾向于不区分使用 parameter 和 argument 来表示函数定义中的变量或调用函数时传入的具体值。当一个函数有多个参数时，使用逗号分隔。我们来看一下下面的示例:

```rust
fn main() {
    println!("Hello, world!");

    another_function(3, 4);
}

fn another_function(x: i32, y: i32) {
    println!("The sum of x and y is: {}", x + y);
}
```

输出结果:

```
Hello, world!
The sum of a and b is: 7
```

`another_function` 函数中声明了两个参数，分别命名为 `x` 和 `y`，并指定类型为 `i32`。当我们将 `3` 和 `4` 传给 `another_function` 函数时，`println!` 宏将 `x` 和 `y` 相加的和放入格式化字符串中大括号的位置。

在函数签名中，必须声明每个参数的类型。这是一个在 Rust 设计中经过慎重考虑的决定：要求在函数定义中提供类型标注，意味着编译器几乎从不需要你在代码的其他地方注明类型来指出你的意图。

### 语句和表达式

函数体由一系列语句组成，也可选择以表达式结尾。目前为止，我们介绍的函数还没有包含结尾表达式，不过你已经看到了表达式作为语句的一部分。因为 Rust 是一门基于表达式（expression-based）的语言，所以这是一个需要理解的重要区别。其他语言没有这样的区别，所以让我们看看语句和表达式分别是什么，以及它们的区别如何影响函数体。

**语句**（statement）是执行一些操作但不返回值的指令。表达式（expression）计算并产生一个值。让我们看一些例子：

实际上，我们已经使用过语句和表达式。使用 `let` 关键字创建变量并绑定一个值是一个语句。例如，`let y = 6;` 是一个语句。

函数定义也是语句，上面整个例子本身就是一个语句。

语句不返回值。因此，不能把 `let` 语句赋值给另一个变量，就像下面的代码尝试做的那样，会产生一个错误：

```rust
fn main() {
    let x = (let y = 6);
}
```

当运行这个程序时，会得到如下错误：

```
   Compiling function-demo v0.1.0 (E:\github\rust-projects\function-demo)
error: expected expression, found `let` statement
 --> src\main.rs:2:14
  |
2 |     let x = (let y = 6);
  |              ^^^

error: expected expression, found statement (`let`)
 --> src\main.rs:2:14
  |
2 |     let x = (let y = 6);
  |              ^^^^^^^^^
  |
  = note: variable declaration using `let` is a statement

error[E0658]: `let` expressions in this position are unstable
 --> src\main.rs:2:14
  |
2 |     let x = (let y = 6);
  |              ^^^^^^^^^
  |
  = note: see issue #53667 <https://github.com/rust-lang/rust/issues/53667> for more information

warning: unnecessary parentheses around assigned value
 --> src\main.rs:2:13
  |
2 |     let x = (let y = 6);
  |             ^         ^
  |
  = note: `#[warn(unused_parens)]` on by default
help: remove these parentheses
  |
2 -     let x = (let y = 6);
2 +     let x = let y = 6;
  |

For more information about this error, try `rustc --explain E0658`.
warning: `function-demo` (bin "function-demo") generated 1 warning
error: could not compile `function-demo` (bin "function-demo") due to 3 previous errors; 1 warning emitted
```

`let y = 6` 语句并不返回值，所以没有可以绑定到 `x` 上的值。这与其他语言不同，例如 `C` 和 `Ruby`，它们的赋值语句会返回所赋的值。在这些语言中，可以这么写 `x = y = 6`，这样 `x` 和 `y` 的值都是 `6`；**Rust 中不能这样写**。

表达式会计算出一个值，并且你接下来要用 Rust 编写的大部分代码都由表达式组成。考虑一个数学运算，比如 `5 + 6`，这是一个表达式并计算出值 `11`。函数调用是一个表达式。宏调用是一个表达式。我们用来创建新作用域的大括号（代码块） {} 也是一个表达式，例如：

```rust
fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {}", y);
}
```

输出:

```
The value of y is: 4
```

是一个代码块，在这个例子中计算结果是 `4`。这个值作为 `let` 语句的一部分被绑定到 `y` 上。注意，`x + 1` **行的末尾没有分号**，这与你目前见过的大部分代码行不同。**表达式的结尾没有分号。如果在表达式的末尾加上分号，那么它就转换为语句，而语句不会返回值。**在接下来探讨函数返回值和表达式时，请记住这一点。

### 带有返回值的函数

函数可以向调用它的代码返回值。我们并不对返回值命名，但要在箭头（`->`）后声明它的类型。在 Rust 中，函数的返回值等同于函数体最后一个表达式的值。使用 `return` 关键字和指定值，可以从函数中提前返回；但大部分函数隐式返回最后一个表达式。这是一个有返回值函数的例子：

```rust
fn five() -> i32 {
    5
}

fn main() {
    let y = five();
    println!("The value of y is: {}", y);
}
```

在 `five` 函数中没有函数调用、宏，甚至没有 `let` 语句——只有数字 `5` 本身。这在 Rust 中是一个完全有效的函数。注意，函数返回值的类型也被指定好，即 `-> i32`。尝试运行代码；输出应如下所示：

```
PS E:\github\rust-projects\function-demo> cargo run
   Compiling function-demo v0.1.0 (E:\github\rust-projects\function-demo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.44s
     Running `target\debug\function-demo.exe`
The value of y is: 5
```

`five` 函数的返回值是 `5`，所以返回值类型是 `i32`。让我们仔细检查一下这段代码。有两个重要的部分：首先，`let x = five();` 这一行表明我们使用函数的返回值初始化一个变量。因为 `five` 函数返回 `5`，这一行与如下代码相同：

```rust
let y = 5;
```

其次，`five` 函数没有参数并定义了返回值类型，不过函数体只有单单一个 `5` 也没有分号，因为这是一个表达式，正是我们想要返回的值。

让我们看看另一个例子：

```rust
fn main() {
    let y = plus_one(5);
    println!("The value of y is: {}", y);
}

fn plus_one(x: i32) -> i32 {
    x + 1
}
```

运行代码会打印出 `The value of x is: 6`。但如果在包含 `x + 1` 的行尾加上一个分号，把它从表达式变成语句，我们将得到一个错误。

```rust
fn main() {
    let y = plus_one(5);
    println!("The value of y is: {}", y);
}

fn plus_one(x: i32) -> i32 {
    x + 1;
}
```

运行代码会产生一个错误，如下：

```
PS E:\github\rust-projects\function-demo> cargo run
   Compiling function-demo v0.1.0 (E:\github\rust-projects\function-demo)
error[E0308]: mismatched types
 --> src\main.rs:6:24
  |
6 | fn plus_one(x: i32) -> i32 {
  |    --------            ^^^ expected `i32`, found `()`
  |    |
  |    implicitly returns `()` as its body has no tail or `return` expression
7 |     x + 1;
  |          - help: remove this semicolon to return this value

For more information about this error, try `rustc --explain E0308`.
error: could not compile `function-demo` (bin "function-demo") due to previous error
```

主要的错误信息 “mismatched types”（类型不匹配）揭示了这段代码的核心问题。函数 `plus_one` 的定义说明它要返回一个 `i32` 类型的值，不过语句并不会返回值，此值由单元类型 () 表示，表示不返回值。因为不返回值与函数定义相矛盾，从而出现一个错误。在输出中，Rust 提供了一条信息，可能有助于纠正这个错误：它建议删除分号，这将修复错误。

如果在 `plus_one` 函数中增加返回语句的话也能修复上述错误，使用 `return` 语句显示地返回，修改如下:

```rust
fn main() {
    let y = plus_one(5);
    println!("The value of y is: {}", y);
}

fn plus_one(x: i32) -> i32 {
    let result = x + 1;
    return result;
}
```

经过上述修改后也能正常返回计算的结果。

## 控制流

根据条件是否为真来决定是否执行某些代码，或根据条件是否为真来重复运行一段代码，是大部分编程语言的基本组成部分。Rust 代码中最常见的用来控制执行流的结构是 `if` 表达式和循环。

### if 表达式

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

所有的 `if` 表达式都以 `if` 关键字开头，其后跟一个条件。在这个例子中，我们首先定义了一个函数 `even_number` 用来判断一个数字是否是偶数，并返回 `bool` 类型的结果；接着我们在 `main` 函数中调用了该函数，参数是用户从控制台输入的数字；接下来使用 `if` 表达式根据 `even_number` 函数的返回值进行判断，最后使用 `println` 宏打印相应的结果，并用输入的数字回填到标准输入占位符的位置。

在条件为真时希望执行的代码块位于紧跟条件之后的大括号中。`if` 表达式中与条件关联的代码块有时被叫做**分支**（arm），也可以包含一个可选的 else 表达式来提供一个在条件为假时应当执行的代码块，这里我们就这么做了。如果不提供 else 表达式并且条件为假时，程序会直接忽略 if 代码块并继续执行下面的代码。

尝试输入不同的值，根据条件判断将会打印不同的结果。

另外值得注意的是代码中的条件必须是 `bool` 值。如果条件不是 `bool` 值，我们将得到一个错误。例如，尝试运行以下代码：

```rust
fn main() {
    let number = 3;
    if number {
        println!("number was three");
    }
}
```

这里 `if` 条件的值是 `3`，Rust 抛出了一个错误

```
PS E:\github\rust-projects\branches> cargo run
   Compiling branches v0.1.0 (E:\github\rust-projects\branches)
error[E0308]: mismatched types
 --> src\main.rs:3:8
  |
3 |     if number {
  |        ^^^^^^ expected `bool`, found integer

For more information about this error, try `rustc --explain E0308`.
error: could not compile `branches` (bin "branches") due to previous error
```

这个错误表明 Rust 期望一个 `bool` 却得到了一个整数。不像 Ruby 或 JavaScript 这样的语言，Rust 并不会尝试自动地将非布尔值转换为布尔值。你必须自始至终显式地使用布尔值作为 `if` 的条件。例如，如果想要 `if` 代码块只在一个数字不等于 `0` 时执行，可以把 `if` 表达式修改成下面这样：

```rust
fn main() {
    let number = 3;
    if number != 0 {
        println!("number was something other than zero");
    }
}
```

运行代码会打印出 `number was something other than zero`。

#### 使用 else if 处理多重条件

可以将 `if` 和 `else` 组成的 `else if` 表达式来实现多重条件。例如：

```rust
use std::io;

fn main() {
    let mut number = String::new();

    println!("Please input a number: ");

    io::stdin().read_line(&mut number).expect("Input Failed.");

    let number: i32 = number.trim().parse().expect("Input is not a number.");

    if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 5 == 0 {
        println!("number is divisible by 5");
    } else if number % 7 == 0 {
        println!("number is divisible by 7");
    } else {
        println!("number is not divisible by 3, 5, or 7");
    }
}
```

输出:

```
PS E:\github\rust-projects\branches> cargo run
   Compiling branches v0.1.0 (E:\github\rust-projects\branches)
    Finished dev [unoptimized + debuginfo] target(s) in 0.82s
     Running `target\debug\branches.exe`
Please input a number:
15
number is divisible by 3
```

当执行这个程序时，它按顺序检查每个 `if` 表达式并执行第一个条件为真的代码块。注意及时 `15` 可以被 `5` 整除，也不会输出 `number is divisible by 5`，更不会输出 `else `块中的 `number is not divisible by 3, 5, or 7`。原因是 Rust 只会执行第一个条件为真的代码块，并且一旦它找到一个以后，甚至都不会检查剩下的条件了。

使用过多的 `else if` 表达式会使代码显得杂乱无章，所以如果有多于一个 `else if` 表达式，最好重构代码。为处理这些情况，可以使用 `match` 多分支结构。

#### 在 let 语句中使用 if

因为 `if` 是一个**表达式**，我们可以在 `let` 语句的右侧使用它来将结果赋值给一个变量，如下示例：

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {}", number);
}
```

`number` 变量将会绑定到表示 `if` 表达式结果的值上。运行这段代码看看会出现什么：

```
PS E:\github\rust-projects\branches> cargo run
   Compiling branches v0.1.0 (E:\github\rust-projects\branches)
    Finished dev [unoptimized + debuginfo] target(s) in 0.21s
     Running `target\debug\branches.exe`
The value of number is: 5
```

记住，代码块的值是其最后一个表达式的值，而数字本身就是一个表达式。在这个例子中，整个 `if` 表达式的值取决于哪个代码块被执行。这意味着 `if` 的每个分支的可能的返回值都必须是相同类型；在上述示例中，`if` 分支和 `else` 分支的结果都是 `i32` 整型。如果它们的类型不匹配，如下面这个例子，则会产生一个错误：

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {}", number);
}
```

当编译这段代码时，会得到一个错误。`if` 和 `else` 分支的值类型是不相容的，同时 Rust 也准确地指出在程序中的何处发现的这个问题：

```
PS E:\github\rust-projects\branches> cargo run
   Compiling branches v0.1.0 (E:\github\rust-projects\branches)
error[E0308]: `if` and `else` have incompatible types
 --> src\main.rs:3:44
  |
3 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found `&str`
  |                                 |
  |                                 expected because of this

For more information about this error, try `rustc --explain E0308`.
error: could not compile `branches` (bin "branches") due to previous error
```

`if` 代码块中的表达式返回一个整数，而 `else` 代码块中的表达式返回一个字符串。这不可行，因为变量必须只有一个类型。Rust 需要在编译时就确切地知道 `number` 变量的类型，这样它就可以在编译时验证在每处使用的 `number` 变量的类型是有效的。若 `number` 的类型仅在运行时确定，则 Rust 将无法做到这一点；而且若编译器必须跟踪任意变量的多种假设类型，则编译器会变得更复杂，并且对代码的保证也会减少。

### 使用循环重复执行

多次执行同一段代码是很常用的，Rust 为此提供了多种**循环**（loop），它们遍历执行循环体中的代码直到结尾并紧接着回到开头继续执行。为了试验循环，让我们新建一个名为 _loops_ 的项目。

Rust 有三种循环：`loop`、`while` 和 `for`。我们每一个都试试。

#### 使用 loop 重复执行代码

`loop` 关键字告诉 Rust 一遍又一遍地执行一段代码直到你明确要求停止。

```rust
fn main() {
    loop {
        println!("again!");
    }
}
```

当运行这个程序时，我们会看到连续的反复打印 `again!`，直到我们手动停止程序。大部分终端都支持一个快捷键 `ctrl-c` 来终止一个陷入无限循环的程序。尝试一下：

```
PS E:\github\rust-projects\loops> cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.01s
     Running `target\debug\loops.exe`
again!
again!
again!
^Cagain!
```

符号 `^C` 代表你在这按下了`ctrl-c`。在 `^C` 之后你可能看到也可能看不到 `again!` ，这取决于在接收到终止信号时代码执行到了循环的何处。

幸运的是，Rust 也提供了一种从代码中跳出循环的方法。可以使用 `break` 关键字来告诉程序何时停止循环。

循环中的 `continue` 关键字告诉程序跳过这个循环迭代中的任何剩余代码，并转到下一个迭代。

如果存在嵌套循环，`break` 和 `continue` 应用于此时最内层的循环。你可以选择在一个循环上指定一个**循环标签**（loop label），然后将标签与 `break` 或 `continue` 一起使用，使这些关键字应用于已标记的循环而不是最内层的循环。下面是一个包含两个嵌套循环的示例：

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);

            if remaining == 9 {
                break;
            }

            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {}", count);
}
```

外层循环有一个标签 `counting_up`，它将从 `0` 数到 `2`。没有标签的内部循环从 `10` 向下数到 `9`。第一个没有指定标签的 `break` 将只退出内层循环。`break 'counting_up;` 语句将退出外层循环。这个代码打印:

```
PS E:\github\rust-projects\loops> cargo run
   Compiling loops v0.1.0 (E:\github\rust-projects\loops)
    Finished dev [unoptimized + debuginfo] target(s) in 0.47s
     Running `target\debug\loops.exe`
count = 0
remaining = 10
remaining = 9
count = 1
remaining = 10
remaining = 9
count = 2
remaining = 10
End count = 2
```

#### 从循环返回

`loop` 的一个用例是重试可能会失败的操作，比如检查线程是否完成了任务。然而你可能会需要将操作的结果从循环中传递给其它的代码。为此，你可以在用于停止循环的 `break` 表达式添加你想要返回的值；该值将从循环中返回，以便您可以使用它，如下所示：

```rust
fn main() {
    let mut counter = 0;
    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
```

在循环之前，我们声明了一个名为 `counter` 的变量并初始化为 `0`。接着声明了一个名为 `result` 来存放循环的返回值。在循环的每一次迭代中，我们将 `counter` 变量加 `1`，接着检查计数是否等于 `10`。当相等时，使用 `break` 关键字返回值 `counter * 2`。循环之后，我们通过分号结束赋值给 `result` 的语句。最后打印出 `result` 的值，也就是 `20`。

#### while 条件循环

在程序中计算循环的条件也很常见。当条件为真，执行循环。当条件不再为真，调用 `break` 停止循环。这个循环类型可以通过组合 `loop`、`if`、`else` 和 `break` 来实现；如果你喜欢的话，现在就可以在程序中试试。然而，这个模式太常用了，Rust 为此内置了一个语言结构，它被称为 `while` 循环。

```rust
fn main() {
    let mut number = 3;
    while number != 0 {
        println!("{}", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

这种结构消除了很多使用 `loop`、`if`、`else` 和 `break` 时所必须的嵌套，这样更加清晰。当条件为真就执行，否则退出循环。

#### 使用 for 遍历集合

可以使用 `while` 结构来遍历集合中的元素，比如数组。

```rust
fn main() {
    let mut index = 0;
    let a = [10, 20, 30, 40, 50];

    while index < 5 {
        println!("The value is: {}", a[index]);

        index += 1;
    }
}
```

在这里，代码对数组中的元素进行计数。它从索引 0 开始，并接着循环直到遇到数组的最后一个索引（即 index < 5 不再为真时）。运行这段代码会打印出数组中的每一个元素：

```
PS E:\github\rust-projects\loops> cargo run
   Compiling loops v0.1.0 (E:\github\rust-projects\loops)
    Finished dev [unoptimized + debuginfo] target(s) in 0.48s
     Running `target\debug\loops.exe`
The value is: 10
The value is: 20
The value is: 30
The value is: 40
The value is: 50
```

数组中的 5 个元素全部都如期被打印出来。尽管 `index` 在某一时刻会到达值 `5`，不过循环在其尝试从数组获取第 6 个值（会越界）之前就停止了。

但是这个过程很容易出错；如果索引值或测试条件不正确会导致程序 panic。例如，如果将 a 数组的定义更改为包含 4 个元素，但忘记将条件更新为 `while index < 4`，则代码会出现 panic。这也使程序更慢，因为编译器增加了运行时代码来对每次循环进行条件检查，以确定在循环的每次迭代中索引是否在数组的边界内。

作为更简洁的替代方案，可以使用 `for` 循环来对一个集合的每个元素执行一些代码。`for` 循环看起来如下示例:

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("The value is: {}", element);
    }
}
```

当运行这段代码时，其结果与使用 `while` 实现的示例一样。更为重要的是，我们增强了代码安全性，并消除了可能由于超出数组的结尾或遍历长度不够而缺少一些元素而导致的 bug。

使用 `for` 循环的话，就不需要惦记着在改变数组元素个数时修改其他的代码了，就像使用上述示例中使用的方法一样。

`for` 循环的安全性和简洁性使得它成为 Rust 中使用最多的循环结构。即使是在想要循环执行代码特定次数时，大部分也会倾向于使用 `for` 循环实现。

下面是一个使用 `for` 循环来倒计时的例子，它还使用了一个我们还未讲到的方法，`rev` 用来反转区间:

```rust
fn main() {
    for element in (1..4).rev() {
        println!("The value is: {}", element);
    }
}
```

输出结果:

```
PS E:\github\rust-projects\loops> cargo run
   Compiling loops v0.1.0 (E:\github\rust-projects\loops)
    Finished dev [unoptimized + debuginfo] target(s) in 0.55s
     Running `target\debug\loops.exe`
The value is: 3
The value is: 2
The value is: 1
```

### 练习

1. `n` 阶段斐波那契数列

   <details>
   <summary>点击查看实现</summary>
   思路:

   F(0)=1，F(1)=1，F(n)=F(n-1)+F(n-2)（n≥2，n∈N\*）

   代码:

   ```rust
   fn fibonacci_sequence(n: i32) -> i32 {
       if n == 1 {
           return 1;
       } else if n == 2 {
           return 1;
       } else {
           return fibonacci_sequence(n - 1) + fibonacci_sequence(n - 2);
       }
   }
   ```

   </details>

2. 华氏温度和摄氏度之间转换

   <details>
   <summary>点击查看实现</summary>
   思路:

   华氏温度和摄氏度之间的温度转换公式如下：

   将摄氏度转换为华氏温度：
   F = C \* 9/5 + 32

   其中，F 代表华氏温度，C 代表摄氏度。

   将华氏温度转换为摄氏度：
   C = (F - 32) \* 5/9

   其中，F 代表华氏温度，C 代表摄氏度。

   例如：如果一个物体的温度是 37 摄氏度，那么用上述的转换公式可以计算出它对应的华氏温度为 37\*9/5+32=98.6 度。

   代码实现:

   ```rust
   fn main() {
       let degrees: f64 = 37.0;
       println!(
           "The fahrenheit of {} is: {}",
           degrees,
           degrees_to_fahrenheit(degrees)
       );
       let fahrenheit: f64 = 98.6;
       println!(
           "The fahrenheit of {} is: {}",
           fahrenheit,
           fahrenheit_to_degrees(fahrenheit)
       );
   }

   // 摄氏度转华氏度
   fn degrees_to_fahrenheit(degrees: f64) -> f64 {
       return degrees * 9.0 / 5.0 + 32.0;
   }

   // 华氏度转摄氏度
   fn fahrenheit_to_degrees(fahrenheit: f64) -> f64 {
       return (fahrenheit - 32.0) * (5.0 / 9.0);
   }
   ```

   </details>
