---
title: Rust 通用编程概念 - 变量
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', 'cargo', 'tutorial']
date: 2023-10-07
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

在 Rust 中，遮蔽(shadowing)是一种将一个变量引入到一个更内部作用域的过程，以隐藏(或遮蔽)外部作用域中具有相同名称的变量。遮蔽允许我们在同一作用域内多次声明同名变量，每次声明都会创建一个新的变量，新的变量会隐藏先前声明的同名变量.这个过程不改变变量的可变性，但是可以改变变量的值和类型。

以下是一个示例，说明了 Rust 中的遮蔽:

```rust
fn main() {
    let x = "你好~";  // 外部作用域的 x
    println!("x in outer scope: {}", x);    // 打印外部作用域的 x

    {
        let x = 10; // 内部作用域中的 x 遮蔽了外部作用域的 x
        println!("x in inner scope: {}", x);    // 打印外部作用域的 x
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

在上述示例中，我们首先声明了一个名为 x 的变量，并在外部作用域中赋予它值 5。然后，在内部作用域中声明了一个名为 x 的新变量，它遮蔽了外部作用域的 x。在内部作用域中，我们可以访问和修改内部作用域的 x，而不会影响外部作用域的 x。一旦内部作用域结束，内部作用域的 x 超出了范围，我们又可以访问外部作用域的 x。

遮蔽通常用于引入新变量，而不是更改现有变量。这允许在不改变可变性的情况下，对变量的值和类型进行更改。需要注意的是，Rust 的编译器会警告您关于未使用的变量，因此遮蔽可能会导致警告，但可以安全地忽略这些警告。

### 问题

1. fn main() {
   println!(
   "The value of THREE*HOURS_IN_SECONDS is: {}",
   THREE_HOURS_IN_SECONDS
   );
   const THREE_HOURS_IN_SECONDS: u32 = 3 * 60 \_ 60;
   }
   代码是否能正常运行？

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

3. Rust 常量是否允许允许声明多次
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

   在上述示例中，我们尝试在同一作用域内两次声明名为`MY_CONSTANT`的常量，一个是`i32`类型，另一个是`f64`类型。这将导致编译错误，因为常量名称必须是唯一的。要解决此错误，您可以选择不同的名称或将它们分开到不同的作用域中。 2. Rust 中常量和不可变变量的区别
   在 Rust 中，常量（constants）和不可变变量（immutable variables）之间有一些关键的区别，尽管它们都涉及到不可变性。

4. **赋值和可变性**
   - **常量**: 常量在声明时必须赋予一个确定的值，并且一旦赋值后，它们的值在整个程序运行过程中都不能被修改。常量在声明时使用 `const` 关键字，并且通常采用大写字母和下划线的命名约定，例如 `const THREE_HOURS_IN_SECONDS: i32 = 3 * 60 * 60;`。
   - **不可变变量**: 不可变变量在声明后可以赋值一次，并且一旦赋值后，它们的值也不能被修改。不可变变量在声明时使用`let` 关键字，例如 `let x = 10;`。
5. **作用域和生命周期**
   - **常量**: 常量具有全局作用域（global scope），它们可以在整个程序中访问，无论它们被定义在哪个作用域内。
   - **不可变变量**: 不可变变量的作用域通常是有限的，限定在它们被声明的代码块内。这有助于减小不可变性的范围，以提高程序的可维护性。
6. **类型和可变性**
   - **常量**: 常量的类型必须在声明时明确指定，且不能随后更改。常量通常用于存储编译时确定的值，例如数学常数或配置信息。
   - **不可变变量**: 不可变变量的类型可以通过类型推断自动确定，也可以显式指定。不可变变量通常用于存储运行时确定的数据。
7. **编程惯例**

   - **常量**: 常量通常用于存储不会更改的数据，如数学常数、配置参数、全局常量等。
   - **不可变变量**: 不可变变量通常用于存储会在程序运行期间发生变化的数据，但在某个特定点上不需要改变的数据。

总的来说，常量和不可变变量都用于实现不可变性，但它们的用途和语法略有不同。选择使用哪种取决于您的需求：如果需要在整个程序中共享不会更改的值，常量是一个不错的选择；如果只需要在特定作用域内保持不可变性，不可变变量更合适。不管哪种方式，Rust 的强类型系统和不可变性保证了代码的安全性和可维护性。

3. Rust 中遮蔽和 mut 的区别
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