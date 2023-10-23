---
title: Rust 结构体
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '结构体', '入门']
date: 2023-10-18
time: 14:49:00
---

`struct`，或者 `structure`，是一个自定义数据类型，允许你命名和包装多个相关的值，从而形成一个有意义的组合。如果你熟悉一门面向对象语言，`struct` 就像对象中的数据属性。在本章中，我们会对元组和结构体进行比较和对比，以及演示如何定义和实例化结构体，并讨论如何定义关联函数，特别是被称为方法的那种关联函数，以指定与结构体类型相关的行为。你可以在程序中基于结构体和枚举（enum）创建新类型，以充分利用 Rust 的编译时类型检查。

<!--truncate-->

## 定义和举例说明结构体

### 定义并实例化结构体

和元组一样，结构体的每一部分可以是不同类型。但不同于元组，结构体需要命名各部分数据以便能清楚的表明其值的意义。由于有了这些名字，结构体比元组更灵活：不需要依赖顺序来指定或访问实例中的值。

定义结构体，需要使用 `struct` 关键字并为整个结构体提供一个名字。结构体的名字需要描述它所组合的数据的意义。接着，在大括号中，定义每一部分数据的名字和类型，我们称为 **字段**（field）,多个字段之间使用 **逗号** 分隔,每个字段后面的逗号都是 **必须** 的,包括最后一个字段类型末尾的。

```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64, // 这个逗号是必须的
}
```

要在定义结构体后使用它，我们可以通过为每个字段指定具体值的方式来创建该结构体的实例。创建一个实例需要以结构体的名字开头，接着在大括号中使用 `key: value` 键-值对的形式提供字段，其中 `key` 是字段的名字，`value` 是需要存储在字段中的数据值。实例中字段的顺序不需要和它们在结构体中声明的顺序一致。换句话说，结构体的定义就像一个类型的通用模板，而实例则会在这个模板中放入特定数据来创建这个类型的值。

```rust
fn main() {
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
}
```

为了从结构体中获取某个特定的值，可以使用点号。如果我们只想要用户的邮箱地址，可以用 `user1.email`。要更改结构体中的值，整个结构体的实例必须是可变的，我们可以使用点号并为对应的字段赋值。

```rust
fn main() {
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");
}
```

注意整个实例必须是可变的；Rust 并不允许只将某个字段标记为可变。另外需要注意同其他任何表达式一样，我们可以在函数体的最后一个表达式中构造一个结构体的新实例，来隐式地返回这个实例。

```rust
fn build_user(email: String, username: String) -> User {
    User {
        email: email,
        username: username,
        active: true,
        sign_in_count: 1,
    }
}
```

### 变量与字段同名时的字段初始化简写语法

参数名如果与字段名都完全相同，我们可以使用**字段初始化简写语法**（field init shorthand）来重写 `build_user`，这样其行为与之前完全相同，不过无需重复 `email` 和 `username` 了。

```rust
fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}
```

这里我们创建了一个新的 `User` 结构体实例，它有一个叫做 `email` 的字段。我们想要将 `email` 字段的值设置为 `build_user` 函数 `email` 参数的值。因为 `email` 字段与 `email` 参数有着相同的名称，则只需编写 `email` 而不是 `email: email`。

### 使用结构体更新语法从其他实例创建实例

使用旧实例的大部分值但改变其部分值来创建一个新的结构体实例通常很有用。这可以通过**结构体更新语法**（struct update syntax）实现。

```rust
fn main() {
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    let user2 = User {
        active: user1.active,
        username: user1.username,
        email: String::from("another@example.com"),
        sign_in_count: user1.sign_in_count,
    };
}
```

使用结构体更新语法，我们可以通过更少的代码来达到相同的效果。`..` 语法指定了剩余未显式设置值的字段应有与给定实例对应字段相同的值。

```rust
fn main() {
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    let user2 = User {
        email: String::from("another@example.com"),
        // username: String::from("anotherusername123");  // 如果此处对 username 也指定新值的话，user1 中没有字段发生借用,后面打印 user1时就不会报错
        ..user1 // 此处不能有逗号
    };

    // println!("{:#?}", user1); // 此处由于 user1.username 是 String 类型,在进行 结构体更新语法 时,其内部的 username发生了 借用，所以此处会发生编译报错
    println!("{:#?}", user2);
}
```

该实例具有不同的 `email` 值，但 `username`、 `active` 和 `sign_in_count` 字段的值与 `user1` 相同。`..user1` 必须放在最后，以指定其余的字段应从 `user1` 的相应字段中获取其值，但我们可以选择以任何顺序为任意字段指定值，而不用考虑结构体定义中字段的顺序。

请注意，结构更新语法就像带有 `=` 的赋值，因为它会移动数据。在这个例子中，我们在创建 `user2` 后不能再使用 `user1`，因为 `user1` 的 `username` 字段中的 `String` 被移到 `user2` 中。如果我们给 `user2` 的 `email` 和 `username` 都赋予新的 `String` 值，从而只使用 `user1` 的 `active` 和 `sign_in_count` 值，那么 `user1` 在创建 `user2` 后仍然有效。`active` 和 `sign_in_count` 的类型是实现 `Copy trait` 的类型。

:::danger
结构体更新语法结尾不能有多余的逗号，否则 rust 编译器会报错。

```rust
let user2 = User {
    email: String::from("another@example.com"),
    ..user1 // 此处不能有逗号
};
```

例如上述代码中 `..user1` 后面就不能带有逗号，否则 rust 认为该行是一个 _字段_。
:::

### 使用没有命名字段的元组结构体来创建不同的类型

也可以定义与元组类似的结构体，称为**元组结构体**（tuple struct）。元组结构体有着结构体名称提供的含义，但没有具体的字段名，只有字段的类型。当你想给整个元组取一个名字，并使元组成为与其他元组不同的类型时，元组结构体是很有用的，这时像常规结构体那样为每个字段命名就显得多余和形式化了。

要定义元组结构体，以 `struct` 关键字和结构体名开头并后跟元组中的类型。例如，下面是两个分别叫做 `Color` 和 `Point` 元组结构体的定义和用法：

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
```

注意 `black` 和 `origin` 值的类型不同，因为它们是不同的元组结构体的实例。你定义的每一个结构体有其自己的类型，即使结构体中的字段有着相同的类型。例如，一个获取 `Color` 类型参数的函数不能接受 `Point` 作为参数，即便这两个类型都由三个 `i32` 值组成。在其他方面，元组结构体实例类似于元组：可以将其解构为单独的部分，也可以使用 . 后跟索引来访问单独的值，等等。

### 没有任何字段的类单元结构体

我们也可以定义一个没有任何字段的结构体！它们被称为**类单元结构体**（unit-like structs），因为它们类似于 `()` unit 类型。类单元结构体常常在你想要在某个类型上实现 `trait` 但不需要在类型中存储数据的时候发挥作用。下面是一个声明和实例化一个名为 `AlwaysEqual` 的 `unit` 结构的例子。

```rust
struct AlwaysEqual;

fn main() {
  let subject = AlwaysEqual;
}
```

要定义 `AlwaysEqual`，我们使用 `struct` 关键字，我们想要的名称，然后是一个分号。不需要花括号或圆括号！然后，我们可以以类似的方式获得 `AlwaysEqual` 的实例变量 `subject`：使用我们定义的名称，不需要任何花括号或圆括号。

<details>
<summary>结构体数据的所有权</summary>

在第一个示例中的 `User` 结构体的定义中，我们使用了自身拥有所有权的 `String` 类型而不是 `&str` 字符串 slice 类型。这是一个有意而为之的选择，因为我们想要这个结构体拥有它所有的数据，为此只要整个结构体是有效的话其数据也是有效的。

可以使结构体存储被其他对象拥有的数据的引用，不过这么做的话需要用上**生命周期**（lifetime）。生命周期确保结构体引用的数据有效性跟结构体本身保持一致。如果你尝试在结构体中存储一个引用而不指定生命周期将是无效的，比如这样：

文件名: src/main.rs

```rust
struct User {
    active: bool,
    username: &str,
    email: &str,
    sign_in_count: u64,
}

fn main() {
    let user1 = User {
        email: "someone@example.com",
        username: "someusername123",
        active: true,
        sign_in_count: 1,
    };
}
```

这段代码是无法编译的!

编译器会抱怨它需要生命周期标识符：

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
error[E0106]: missing lifetime specifier
 --> src\main.rs:3:15
  |
3 |     username: &str,
  |               ^ expected named lifetime parameter
  |
help: consider introducing a named lifetime parameter
  |
1 ~ struct User<'a> {
2 |     active: bool,
3 ~     username: &'a str,
  |

error[E0106]: missing lifetime specifier
 --> src\main.rs:4:12
  |
4 |     email: &str,
  |            ^ expected named lifetime parameter
  |
help: consider introducing a named lifetime parameter
  |
1 ~ struct User<'a> {
2 |     active: bool,
3 |     username: &str,
4 ~     email: &'a str,
  |

For more information about this error, try `rustc --explain E0106`.
error: could not compile `rectangle` (bin "rectangle") due to 2 previous errors
```

</details>

## 使用结构体的代码例子

### 一个使用结构体的示例程序

如下是一个计算长方形面积的程序

```rust
fn main() {
    let width = 30.0;
    let height = 50.0;

    println!(
        "The area of the rectangle is {} square pixels.",
        area(width, height)
    );
}

fn area(width: f64, height: f64) -> f64 {
    width * height
}
```

输出如下:

```rust
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
    Finished dev [unoptimized + debuginfo] target(s) in 0.97s
     Running `target\debug\rectangle.exe`
The area of the rectangle is 1500 square pixels.
```

在调用 `area` 函数时传入每个维度来计算出长方形的面积，不过我们可以做的更好。宽度和高度是相关联的，因为他们在一起才能定义一个长方形。

这些代码的问题突显在 `area` 的签名上：

```rust
fn area(width: f64, height: f64) -> f64 {
```

函数 `area` 本应该计算一个长方形的面积，不过函数却有两个参数。这两个参数是相关联的，不过程序本身却没有表现出这一点。将长度和宽度组合在一起将更易懂也更易处理。

### 使用元组重构

```rust
fn main() {
    let dimensions = (30.0, 50.0);

    println!(
        "The area of the rectangle is {} square pixels.",
        area(dimensions)
    );
}

fn area(dimensions: (f64, f64)) -> f64 {
    dimensions.0 * dimensions.1
}
```

输出如下

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
    Finished dev [unoptimized + debuginfo] target(s) in 0.72s
     Running `target\debug\rectangle.exe`
The area of the rectangle is 1500 square pixels.
```

在某种程度上说，这个程序更好一点了。元组帮助我们增加了一些结构性，并且现在只需传一个参数。不过在另一方面，这个版本却有一点不明确了：元组并没有给出元素的名称，所以我们不得不使用索引来获取元组的每一部分，这导致计算变得更令人费解了。

在计算面积时将宽和高弄混倒无关紧要，不过当在屏幕上绘制长方形时就有问题了！我们必须牢记 `width` 的元组索引是 `0`，`height` 的元组索引是 `1`。如果其他人要使用这些代码，他们必须要搞清楚这一点，并也要牢记于心。我们没有在代码中表达数据的意义，所以很容易因为忘记或者混淆这些值而造成错误。

### 使用结构体重构：赋予更多意义

我们使用结构体为数据命名来为其赋予意义。我们可以将我们正在使用的元组转换成一个有整体名称而且每个部分也有对应名字的数据类型，如以下示例所示：

```rust
fn main() {
    let rect = Rectangle {
        width: 30.0,
        height: 50.0,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect)
    );
}

struct Rectangle {
    width: f64,
    height: f64,
}

fn area(rect: &Rectangle) -> f64 {
    rect.width * rect.height
}
```

这里我们定义了一个结构体并称其为 `Rectangle`。在大括号中定义了字段 `width` 和 `height`，类型都是 `f64`。接着在 `main` 中，我们创建了一个具体的 `Rectangle` 实例，它的宽是 `30.0`，高是 `50.0`。

函数 area 现在被定义为接收一个名叫 `rectangle` 的参数，其类型是一个结构体 `Rectangle` 实例的不可变借用。我们希望借用结构体而不是获取它的所有权，这样 `main` 函数就可以保持 `rect1` 的所有权并继续使用它，所以这就是为什么在函数签名和调用的地方会有 `&`。

`area` 函数访问 `Rectangle` 实例的 `width` 和 `height` 字段。`area` 的函数签名现在明确的阐述了我们的意图：使用 `Rectangle` 的 `width` 和 `height` 字段，计算 `Rectangle` 的面积。这表明宽高是相互联系的，并为这些值提供了描述性的名称而不是使用元组的索引值 `0` 和 `1`，现在更清晰明了。

### 通过派生 trait 增加实用功能

如果能够在调试程序时打印出 `Rectangle` 实例来查看其所有字段的值就更好了。

```rust
fn main() {
    let rect = Rectangle {
        width: 30.0,
        height: 50.0,
    };

    println!("rect is {}", rect);
}

struct Rectangle {
    width: f64,
    height: f64,
}
```

当我们运行这个代码时，会出现带有如下核心信息的错误：

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
    Finished dev [unoptimized + debuginfo] target(s) in 1.16s
     Running `target\debug\rectangle.exe`
The area of the rectangle is 1500 square pixels.
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
error[E0277]: `Rectangle` doesn't implement `std::fmt::Display`
 --> src\main.rs:7:28
  |
7 |     println!("rect is {}", rect);
  |                            ^^^^ `Rectangle` cannot be formatted with the default formatter
  |
  = help: the trait `std::fmt::Display` is not implemented for `Rectangle`
  = note: in format strings you may be able to use `{:?}` (or {:#?} for pretty-print) instead
  = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)

For more information about this error, try `rustc --explain E0277`.
error: could not compile `rectangle` (bin "rectangle") due to previous error
```

`println!` 宏能处理很多类型的格式，不过，`{}` 默认告诉 `println!` 使用被称为 `Display` 的格式：意在提供给直接终端用户查看的输出。目前为止见过的基本类型都默认实现了 `Display`，因为它就是向用户展示 `1` 或其他任何基本类型的唯一方式。不过对于结构体，`println!` 应该用来输出的格式是不明确的，因为这有更多显示的可能性：是否需要逗号？需要打印出大括号吗？所有字段都应该显示吗？由于这种不确定性，Rust 不会尝试猜测我们的意图，所以结构体并没有提供一个 `Display` 实现。根据提示信息，让我们来试试！现在 `println!` 宏调用看起来像 `println!("rect1 is {:?}", rect1);` 这样。在 `{}` 中加入 `:?` 指示符告诉 `println!` 我们想要使用叫做 `Debug` 的输出格式。`Debug` 是一个 `trait`，它允许我们以一种对开发者有帮助的方式打印结构体，以便当我们调试代码时能看到它的值。

这样调整后再次运行程序。仍然能看到一个错误：

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
error[E0277]: `Rectangle` doesn't implement `Debug`
 --> src\main.rs:7:31
  |
7 |     println!("rect is {:#?}", rect);
  |                               ^^^^ `Rectangle` cannot be formatted using `{:?}`
  |
  = help: the trait `Debug` is not implemented for `Rectangle`
  = note: add `#[derive(Debug)]` to `Rectangle` or manually `impl Debug for Rectangle`
  = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider annotating `Rectangle` with `#[derive(Debug)]`
  |
10+ #[derive(Debug)]
11| struct Rectangle {
  |

For more information about this error, try `rustc --explain E0277`.
error: could not compile `rectangle` (bin "rectangle") due to previous error
```

不过编译器又给出了帮助信息:

```
help: consider annotating `Rectangle` with `#[derive(Debug)]`
```

:::danger
注解需要紧贴着 struct 上一行，否则编译器无法识别是对应 struct 的注解
:::

Rust **确实**包含了打印出调试信息的功能，不过我们必须为结构体显式选择这个功能。为此，在结构体定义之前加上外部属性 `#[derive(Debug)]`，如下示例:

```rust
fn main() {
    let rect = Rectangle {
        width: 30.0,
        height: 50.0,
    };

    println!("rect is {:?}", rect);
}

#[derive(Debug)]
struct Rectangle {
    width: f64,
    height: f64,
}
```

现在我们再运行这个程序时，就不会有任何错误，并会出现如下输出：

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
warning: fields `width` and `height` are never read
  --> src\main.rs:12:5
   |
11 | struct Rectangle {
   |        --------- fields in this struct
12 |     width: f64,
   |     ^^^^^
13 |     height: f64,
   |     ^^^^^^
   |
   = note: `Rectangle` has a derived impl for the trait `Debug`, but this is intentionally ignored during dead code analysis
   = note: `#[warn(dead_code)]` on by default

warning: `rectangle` (bin "rectangle") generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.80s
     Running `target\debug\rectangle.exe`
rect is Rectangle { width: 30.0, height: 50.0 }
```

好极了！这并不是最漂亮的输出，不过它显示这个实例的所有字段，毫无疑问这对调试有帮助。当我们有一个更大的结构体时，能有更易读一点的输出就好了，为此可以使用 `{:#?}` 替换 `println!` 字符串中的 `{:?}`。如果在这个例子中使用了 `{:#?}` 风格的话，输出会看起来像这样：

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
warning: fields `width` and `height` are never read
  --> src\main.rs:12:5
   |
11 | struct Rectangle {
   |        --------- fields in this struct
12 |     width: f64,
   |     ^^^^^
13 |     height: f64,
   |     ^^^^^^
   |
   = note: `Rectangle` has a derived impl for the trait `Debug`, but this is intentionally ignored during dead code analysis
   = note: `#[warn(dead_code)]` on by default

warning: `rectangle` (bin "rectangle") generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.94s
     Running `target\debug\rectangle.exe`
rect is Rectangle {
    width: 30.0,
    height: 50.0,
}
```

另一种使用 `Debug` 格式打印数值的方法是使用 `dbg!` 宏。`dbg!` 宏接收一个表达式的所有权，打印出代码中调用 `dbg!` 宏时所在的文件和行号，以及该表达式的结果值，并返回该值的所有权。

## 方法语法

方法 与函数类似：它们使用 `fn` 关键字和名称声明，可以拥有参数和返回值，同时包含在某处调用该方法时会执行的代码。不过方法与函数是不同的，因为它们在结构体的上下文中被定义（或者是枚举或 `trait` 对象的上下文），并且它们第一个参数总是 `self`，它代表调用该方法的结构体实例。

下面是一个例子，我们对分配给 `width` 字段的值以及 `rect1` 中整个结构的值感兴趣：

```rust
fn main() {
    let rect = Rectangle {
        width: dbg!(30.0 * 2.0),
        height: 50.0,
    };

    dbg!(&rect);
}

#[derive(Debug)]
struct Rectangle {
    width: f64,
    height: f64,
}
```

我们可以把 `dbg!` 放在表达式 `30 * scale` 周围，因为 `dbg!` 返回表达式的值的所有权，所以 `width` 字段将获得相同的值，就像我们在那里没有 `dbg!` 调用一样。我们不希望 `dbg!` 拥有 `rect1` 的所有权，所以我们在下一次调用 `dbg!` 时传入一个引用。下面是这个例子的输出结果：

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
warning: fields `width` and `height` are never read
  --> src\main.rs:12:5
   |
11 | struct Rectangle {
   |        --------- fields in this struct
12 |     width: f64,
   |     ^^^^^
13 |     height: f64,
   |     ^^^^^^
   |
   = note: `Rectangle` has a derived impl for the trait `Debug`, but this is intentionally ignored during dead code analysis
   = note: `#[warn(dead_code)]` on by default

warning: `rectangle` (bin "rectangle") generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.51s
     Running `target\debug\rectangle.exe`
[src\main.rs:3] 30.0 * 2.0 = 60.0
[src\main.rs:7] &rect = Rectangle {
    width: 60.0,
    height: 50.0,
}
```

除了 `Debug trait`，Rust 还为我们提供了很多可以通过 `derive` 属性来使用的 `trait`，他们可以为我们的自定义类型增加实用的行为。

### 定义方法

让我们把前面实现的获取一个 `Rectangle` 实例作为参数的 `area` 函数，改写成一个定义于 `Rectangle` 结构体上的 `area` 方法:

```rust
#[derive(Debug)]
fn main() {
    let rect1 = Rectangle {
        width: 30.0,
        height: 50.0,
    };

    println!(
        "The area of rectangle is {} square pixels.",
        dbg!(rect1.area())
    );
}

struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
}
```

为了使函数定义于 `Rectangle` 的上下文中，我们开始了一个 `impl` 块（`impl` 是 `implementation` 的缩写），这个 `impl` 块中的所有内容都将与 `Rectangle` 类型相关联。接着将 `area` 函数移动到 `impl` 大括号中，并将签名中的第一个（在这里也是唯一一个）参数和函数体中其他地方的对应参数改成 `self`。然后在 `main` 中将我们先前调用 `area` 方法并传递 `rect1` 作为参数的地方，改成使用**方法语法**（method syntax）在 `Rectangle` 实例上调用 `area` 方法。方法语法获取一个实例并加上一个点号，后跟方法名、圆括号以及任何参数。

在 `area` 的签名中，使用 `&self` 来替代 `rectangle: &Rectangle`，`&self` 实际上是 `self: &Self` 的缩写。在一个 `impl` 块中，`Self` 类型是 `impl` 块的类型的别名。方法的第一个参数必须有一个名为 `self` 的 `Self` 类型的参数，所以 Rust 让你在第一个参数位置上只用 `self` 这个名字来缩写。注意，我们仍然需要在 `self` 前面使用 `&` 来表示这个方法借用了 `Self` 实例，就像我们在 `rectangle: &Rectangle` 中做的那样。方法可以选择获得 `self` 的所有权，或者像我们这里一样不可变地借用 `self`，或者可变地借用 `self`，就跟其他参数一样。

这里选择 `&self` 的理由跟在函数版本中使用 `&Rectangle` 是相同的：我们并不想获取所有权，只希望能够读取结构体中的数据，而不是写入。如果想要在方法中改变调用方法的实例，需要将第一个参数改为 `&mut self`。通过仅仅使用 `self` 作为第一个参数来使方法获取实例的所有权是很少见的；这种技术通常用在当方法将 `self` 转换成别的实例的时候，这时我们想要防止调用者在转换之后使用原始的实例。

使用方法替代函数，除了可使用方法语法和不需要在每个函数签名中重复 `self` 的类型之外，其主要好处在于组织性。我们将某个类型实例能做的所有事情都一起放入 `impl` 块中，而不是让将来的用户在我们的库中到处寻找 `Rectangle` 的功能。

请注意，我们可以选择将方法的名称与结构中的一个字段相同。例如，我们可以在 `Rectangle` 上定义一个方法，并命名为 `width`：

```rust
impl Rectangle {
    fn width(&self) -> bool {
        self.width > 0
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    if rect1.width() {
        println!("The rectangle has a nonzero width; it is {}", rect1.width);
    }
}
```

在这里，我们选择让 `width` 方法的行为是如果实例的 `width` 字段的值大于 `0`，返回 `true`。如果该值为 `0`，则返回 `false`：我们可以在同名的方法中使用一个字段来达到任何目的。在 `main` 中，当我们在 `rect1.width` 后面加上括号时。Rust 知道我们指的是方法 `width`。当我们不使用圆括号时，Rust 知道我们指的是字段 `width`。

通常，但并不总是如此，与字段同名的方法将被定义为只返回字段中的值，而不做其他事情。这样的方法被称为 `getters`，Rust 并不像其他一些语言那样为结构字段自动实现它们。`Getters` 很有用，因为你可以把字段变成私有的，但方法是公共的，这样就可以把对字段的只读访问作为该类型公共 API 的一部分。

### 带有多个参数的方法

让我们通过实现 `Rectangle` 结构体上的另一方法来练习使用方法。这回，我们让一个 `Rectangle` 的实例获取另一个 `Rectangle` 实例，如果 `self` 能完全包含第二个长方形则返回 `true`；否则返回 `false`。一旦定义了 `can_hold` 方法，就可以编写如下示例代码。

```rust
fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 10,
        height: 40,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 45,
    };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}
```

同时我们希望看到如下输出，因为 rect2 的两个维度都小于 rect1，而 rect3 比 rect1 要宽：

```
Can rect1 hold rect2? true
Can rect1 hold rect3? false
```

因为我们想定义一个方法，所以它应该位于 `impl Rectangle` 块中。方法名是 `can_hold`，并且它会获取另一个 `Rectangle` 的不可变借用作为参数。通过观察调用方法的代码可以看出参数是什么类型的：`rect1.can_hold(&rect2)` 传入了 `&rect2`，它是一个 `Rectangle` 的实例 `rect2` 的不可变借用。这是可以理解的，因为我们只需要读取 `rect2`（而不是写入，这意味着我们需要一个不可变借用），而且希望 `main` 保持 `rect2` 的所有权，这样就可以在调用这个方法后继续使用它。`can_hold` 的返回值是一个布尔值，其实现会分别检查 `self` 的宽高是否都大于另一个 `Rectangle`。让我们在上述示例的 `impl` 块中增加这个新的 `can_hold` 方法

```rust
impl Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
```

在方法签名中，可以在 `self` 后增加多个参数，而且这些参数就像函数中的参数一样工作。

### 关联函数

所有在 `impl` 块中定义的函数被称为**关联函数**（associated function），因为它们与 `impl` 后面命名的类型相关。我们可以定义不以 `self` 为第一参数的关联函数（因此不是方法），因为它们并不作用于一个结构体的实例。我们已经使用了一个这样的函数，`String::from` 函数，它是在 `String` 类型上定义的。

关联函数经常被用作返回一个结构体新实例的构造函数。例如我们可以提供一个关联函数，它接受一个维度参数并且同时作为宽和高，这样可以更轻松的创建一个正方形 `Rectangle` 而不必指定两次同样的值：

```rust
impl Rectangle {
    fn square(size: f64) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}
```

使用结构体名和 `::` 语法来调用这个关联函数：比如 `let sq = Rectangle::square(3);`。这个方法位于结构体的命名空间中：`::` 语法用于关联函数和模块创建的命名空间。

### 多个 impl 块

每个结构体都允许拥有多个 `impl` 块。例如，每个方法有其自己的 impl 块。

```rust
impl Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
```

这里没有理由将这些方法分散在多个 `impl` 块中，不过这是有效的语法。

:::danger
同一个 struct 的 impl 块中不能存在同名的 方法，否则 Rust 编译器会报错

```rust

// 多 impl 块
fn main() {
    let rect1 = Rectangle {
        width: 30.0,
        height: 50.0,
    };
    let rect2 = Rectangle {
        width: 10.0,
        height: 40.0,
    };
    let rect3 = Rectangle {
        width: 60.0,
        height: 45.0,
    };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));

    println!("New rect is {:#?}", Rectangle::square(45.0));
}

#[derive(Debug)]
struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    fn square(size: f64) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }

    // 不可重复定义
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
```

如下输出:

```
PS E:\github\rust-projects\rectangle> cargo run
   Compiling rectangle v0.1.0 (E:\github\rust-projects\rectangle)
error[E0592]: duplicate definitions with name `can_hold`
   --> src\main.rs:175:5
    |
175 |     fn can_hold(&self, other: &Rectangle) -> bool {
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ duplicate definitions for `can_hold`
...
181 |     fn can_hold(&self, other: &Rectangle) -> bool {
    |     --------------------------------------------- other definition for `can_hold`

For more information about this error, try `rustc --explain E0592`.
error: could not compile `rectangle` (bin "rectangle") due to previous error
```

:::

## 总结

结构体让你可以创建出在你的领域中有意义的自定义类型。通过结构体，我们可以将相关联的数据片段联系起来并命名它们，这样可以使得代码更加清晰。在 `impl` 块中，你可以定义与你的类型相关联的函数，而方法是一种相关联的函数，让你指定结构体的实例所具有的行为。
