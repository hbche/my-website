---
title: Rust 泛型trait与生命周期
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '入门', '泛型', 'trait', '生命周期']
date: 2023-10-26
---

每一个编程语言都有高效处理重复概念的工具。在 Rust 中其工具之一就是 **泛型**（generics）。泛型是具体类型或其他属性的抽象替代。我们可以表达泛型的属性，比如他们的行为或如何与其他泛型相关联，而不需要在编写和编译代码时知道他们在这里实际上代表什么。

同理为了编写一份可以用于多种具体值的代码，函数并不知道其参数为何值，这时就可以让函数获取泛型而不是像 `i32` 或 `String` 这样的具体类型。

首先，我们将回顾一下提取函数以减少代码重复的机制。接下来，我们将使用相同的技术，从两个仅参数类型不同的函数中创建一个泛型函数。我们也会讲到结构体和枚举定义中的泛型。

之后，我们讨论 **trait**，这是一个定义泛型行为的方法。trait 可以与泛型结合来将泛型限制为拥有特定行为的类型，而不是任意类型。

最后介绍 **生命周期**_（lifetimes）_，它是一类允许我们向编译器提供引用如何相互关联的泛型。Rust 的生命周期功能允许在很多场景下借用值的同时仍然使编译器能够检查这些引用的有效性。

## 提取函数来减少重复

在介绍泛型语法之前，首先来回顾一个不使用泛型处理重复的技术：提取一个函数。当熟悉了这个技术以后，我们将使用相同的机制来提取一个泛型函数！如同你识别出可以提取到函数中重复代码那样，你也会开始识别出能够使用泛型的重复代码。

考虑一下这个寻找列表中最大值的小程序，如示例 10-1 所示：

文件名: src/main.rs

```rust
fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let mut largest = number_list[0];
    for number in number_list {
        if number > largest {
            largest = number;
        }
    }

    println!("The largest number is {}", largest);
}
```

##### 示例 10-1：在一个数字列表中寻找最大值的函数

这段代码获取一个整型列表，存放在变量 `number_list` 中。它将列表的第一项放入了变量 `largest` 中。接着遍历了列表中的所有数字，如果当前值大于 `largest` 中储存的值，将 `largest` 替换为这个值。如果当前值小于或者等于目前为止的最大值，`largest` 保持不变。当列表中所有值都被考虑到之后，`largest` 将会是最大值，在这里也就是 `100`。

如果需要在两个不同的列表中寻找最大值，我们可以重复示例 10-1 中的代码，这样程序中就会存在两段相同逻辑的代码，如示例 10-2 所示：

文件名: src/main.rs

```rust
fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let mut largest = number_list[0];
    for number in number_list {
        if number > largest {
            largest = number;
        }
    }

    println!("The largest number is {}", largest);

    let number_list = vec![102, 34, 6000, 89, 54, 2, 43, 8];

    let mut largest = number_list[0];

    for number in number_list {
        if number > largest {
            largest = number;
        }
    }

    println!("The largest number is {}", largest);
}
```

##### 示例 10-2：寻找 **两个** 数字列表最大值的代码

虽然代码能够执行，但是重复的代码是冗余且容易出错的，并且意味着当更新逻辑时需要修改多处地方的代码。

为了消除重复，我们可以创建一层抽象，在这个例子中将表现为一个获取任意整型列表作为参数并对其进行处理的函数。这将增加代码的简洁性并让我们将表达和推导寻找列表中最大值的这个概念与使用这个概念的特定位置相互独立。

在示例 10-3 的程序中将寻找最大值的代码提取到了一个叫做 `largest` 的函数中。这不同于示例 10-1 中的代码只能在一个特定的列表中找到最大的数字，这个程序可以在两个不同的列表中找到最大的数字。

文件名: src/main.rs

```rust
fn largest(list: &[i32]) -> i32 {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let number_list = vec![102, 34, 6000, 89, 54, 2, 43, 8];

    let result = largest(&number_list);
    println!("The largest number is {}", result);
}
```

##### 示例 10-3：抽象后的寻找两个数字列表最大值的代码

`largest` 函数有一个参数 `list`，它代表会传递给函数的任何具体的 `i32` 值的 `slice`。函数定义中的 `list` 代表任何 `&[i32]`。当调用 `largest` 函数时，其代码实际上运行于我们传递的特定值上。

总的来说，从示例 10-2 到示例 10-3 中涉及的机制经历了如下几步：

1. 找出重复代码。
2. 将重复代码提取到了一个函数中，并在函数签名中指定了代码中的输入和返回值。
3. 将重复代码的两个实例，改为调用函数。

在不同的场景使用不同的方式，我们也可以利用相同的步骤和泛型来减少重复代码。与函数体可以在抽象 `list` 而不是特定值上操作的方式相同，泛型允许代码对抽象类型进行操作。

如果我们有两个函数，一个寻找 `i32` 值的 `slice` 中的最大项，而另一个寻找 `char` 值的 `slice` 中的最大项，该怎么办？该如何消除重复呢？让我们拭目以待！

## 泛型数据类型

我们可以使用泛型为函数签名或结构体等项创建定义，这样它们就可以用于多种不同的具体数据类型。让我们看看如何使用泛型定义函数、结构体、枚举和方法，然后我们将讨论泛型如何影响代码性能。

### 在函数定义中使用泛型

当使用泛型定义函数时，本来在函数签名中指定参数和返回值的类型的地方，会改用泛型来表示。采用这种技术，使得代码适应性更强，从而为函数的调用者提供更多的功能，同时也避免了代码的重复。

回到 `largest` 函数，示例 10-4 中展示了两个函数，它们的功能都是寻找 `slice` 中最大值。

文件名: src/main.rs

```rust
fn largest_i32(list: &[i32]) -> i32 {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn largest_char(list: &[char]) -> char {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest_i32(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest_char(&char_list);
    println!("The largest char is {}", result);
}
```

##### 示例 10-4：两个函数，不同点只是名称和签名类型

`largest_i32` 函数是从示例 10-3 中摘出来的，它用来寻找 `slice` 中最大的 `i32`。`largest_char` 函数寻找 `slice` 中最大的 `char`。因为两者函数体的代码一致，我们可以定义一个函数，再引进泛型参数来消除这种重复。

为了参数化新函数中的这些类型，我们也需要为类型参数取个名字，道理和给函数的形参起名一样。任何标识符都可以作为类型参数的名字。这里选用 `T`，因为传统上来说，Rust 的参数名字都比较短，通常就只有一个字母，同时，Rust 类型名的命名规范是骆驼命名法（CamelCase）。`T` 作为 “type” 的缩写是大部分 Rust 开发者的首选。

如果要在函数体中使用参数，就必须在函数签名中声明它的名字，好让编译器知道这个名字指代的是什么。同理，当在函数签名中使用一个类型参数时，必须在使用它之前就声明它。为了定义泛型版本的 `largest` 函数，类型参数声明位于函数名称与参数列表中间的尖括号 `<>` 中，像这样：

```rust
fn largest<T>(list: &[T]) -> T {}
```

可以这样理解这个定义：函数 `largest` 有泛型类型 `T`。它有个参数 `list`，其类型是元素为 `T` 的 `slice`。`largest` 函数的返回值类型也是 `T`。

示例 10-5 中的 `largest` 函数在它的签名中使用了泛型，统一了两个实现。该示例也展示了如何调用 `largest` 函数，把 `i32` 值的 `slice` 或 `char` 值的 `slice` 传给它。请注意这些代码还不能编译，不过稍后在本章会解决这个问题。

文件名: src/main.rs

```rust
fn largest<T>(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest(&char_list);
    println!("The largest char is {}", result);
}
```

##### 示例 10-5：一个使用泛型参数的 `largest` 函数定义，尚不能编译

如果现在就编译这个代码，会出现如下错误：

```
PS E:\github\rust-projects\generate_type> cargo run
   Compiling generate_type v0.1.0 (E:\github\rust-projects\generate_type)
error[E0369]: binary operation `>` cannot be applied to type `T`
 --> src\main.rs:5:17
  |
5 |         if item > largest {
  |            ---- ^ ------- T
  |            |
  |            T
  |
help: consider restricting type parameter `T`
  |
1 | fn largest<T: std::cmp::PartialOrd>(list: &[T]) -> T {
  |             ++++++++++++++++++++++

For more information about this error, try `rustc --explain E0369`.
error: could not compile `generate_type` (bin "generate_type") due to previous error
```

注释中提到了 `std::cmp::PartialOrd`，这是一个 _trait_。下一部分会讲到 trait。不过简单来说，这个错误表明 largest 的函数体不能适用于 T 的所有可能的类型。因为在函数体需要比较 T 类型的值，不过它只能用于我们知道如何排序的类型。为了开启比较功能，标准库中定义的 `std::cmp::PartialOrd trait` 可以实现类型的比较功能。

标准库中定义的 `std::cmp::PartialOrd trait` 可以实现类型的比较功能。在 “trait 作为参数” 部分会讲解如何指定泛型实现特定的 trait，不过让我们先探索其他使用泛型参数的方法。

### 结构体定义中的泛型

同样也可以用 `<>` 语法来定义结构体，它包含一个或多个泛型参数类型字段。示例 10-6 展示了如何定义和使用一个可以存放任何类型的 `x` 和 `y` 坐标值的结构体 `Point`：

文件名: src/main.rs

```rust
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let integer = Point { x: 5, y: 10 };
    let float = Point { x: 1.0, y: 4.0 };

    println!("The integer point is ({}, {})", integer.x, integer.y);
    println!("The float point is ({}, {})", float.x, float.y);
}
```

##### 示例 10-6：`Point` 结构体存放了两个 `T` 类型的值 `x` 和 `y`

其语法类似于函数定义中使用泛型。首先，必须在结构体名称后面的尖括号中声明泛型参数的名称。接着在结构体定义中可以指定具体数据类型的位置使用泛型类型。

注意 `Point<T>` 的定义中只使用了一个泛型类型，这个定义表明结构体 `Point<T>` 对于一些类型 `T` 是泛型的，而且字段 `x` 和 `y` **都是** 相同类型的，无论它具体是何类型。如果尝试创建一个有不同类型值的 `Point<T>` 的实例，像示例 10-7 中的代码就不能编译：

文件名: src/main.rs

```rust
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let wont_work = Point { x: 5, y: 4.0 };
}
```

##### 示例 10-7：字段 `x` 和 `y` 的类型必须相同，因为他们都有相同的泛型类型 `T`

在这个例子中，当把整型值 `5` 赋值给 `x` 时，就告诉了编译器这个 `Point<T>` 实例中的泛型 `T` 是整型的。接着指定 `y` 为 `4.0`，它被定义为与 `x` 相同类型，就会得到一个像这样的类型不匹配错误：

```
PS E:\github\rust-projects\generate_type> cargo run
   Compiling generate_type v0.1.0 (E:\github\rust-projects\generate_type)
error[E0308]: mismatched types
 --> src\main.rs:7:38
  |
7 |     let wont_work = Point { x: 5, y: 4.0 };
  |                                      ^^^ expected integer, found floating-point number

For more information about this error, try `rustc --explain E0308`.
error: could not compile `generate_type` (bin "generate_type") due to previous error
```

如果想要定义一个 `x` 和 `y` 可以有不同类型且仍然是泛型的 `Point` 结构体，我们可以使用多个泛型类型参数。在示例 10-8 中，我们修改 `Point` 的定义为拥有两个泛型类型 `T` 和 `U`。其中字段 `x` 是 `T` 类型的，而字段 `y` 是 `U` 类型的：

文件名: src/main.rs

```rust
struct Point<T, U> {
    x: T,
    y: U,
}

fn main() {
    let both_integer = Point {x: 5, y: 10,};
    let both_float = Point {x: 1.0, y: 4.0,};
    let integer_and_float = Point {x: 5, y: 4.0,};
}
```

##### 示例 10-8：使用两个泛型的 `Point`，这样 `x` 和 `y` 可能是不同类型

现在所有的 `Point` 实例都合法了！你可以在定义中使用任意多的泛型类型参数，不过太多的话，代码将难以阅读和理解。当你的代码中需要许多泛型类型时，它可能表明你的代码需要重构，分解成更小的结构。

### 枚举定义中的泛型

和结构体类似，枚举也可以在成员中存放泛型数据类型。标准库提供的 `Option<T>` 枚举，这里再回顾一下：

```rust
enum Option<T> {
    Some(T),
    None,
}
```

现在这个定义应该更容易理解了。如你所见 `Option<T>` 是一个拥有泛型 `T` 的枚举，它有两个成员：`Some`，它存放了一个类型 `T` 的值，和不存在任何值的 `None`。通过 `Option<T>` 枚举可以表达有一个可能的值的抽象概念，同时因为 `Option<T>` 是泛型的，无论这个可能的值是什么类型都可以使用这个抽象。

枚举也可以拥有多个泛型类型。

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

`Result` 枚举有两个泛型类型，`T` 和 `E`。`Result` 有两个成员：`Ok`，它存放一个类型 `T` 的值，而 `Err` 则存放一个类型 `E` 的值。这个定义使得 `Result` 枚举能很方便的表达任何可能成功（返回 `T` 类型的值）也可能失败（返回 `E` 类型的值）的操作。

当你意识到代码中定义了多个结构体或枚举，它们不一样的地方只是其中的值的类型的时候，不妨通过泛型类型来避免重复。

### 方法中的泛型

在为结构体和枚举实现方法时，一样也可以用泛型。示例 10-9 中展示了示例 10-6 中定义的结构体 `Point<T>`，和在其上实现的名为 `x` 的方法。

文件名: src/main.rs

```rust
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let p = Point {x: 5, y: 10, };

    println!("p.x = {}", p.x());
}
```

##### 示例 10-9：在 `Point<T>` 结构体上实现方法 `x`，它返回 `T` 类型的字段 `x` 的引用

这里在 `Point<T>` 上定义了一个叫做 `x` 的方法来返回字段 `x` 中数据的引用：

注意必须在 `impl` 后面声明 `T`，这样就可以在 `Point<T>` 上实现的方法中使用它了。在 `impl` 之后声明泛型 `T` ，这样 Rust 就知道 `Point` 的尖括号中的类型是泛型而不是具体类型。

例如，可以选择为 `Point<f32>` 实例实现方法，而不是为泛型 `Point` 实例。示例 10-10 展示了一个没有在 `impl` 之后（的尖括号）声明泛型的例子，这里使用了一个具体类型，`f32`：

```rust
impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        ((self.x).powi(2) + (self.y).powi(2)).sqrt()
    }
}
```

##### 示例 10-10：构建一个只用于拥有泛型参数 `T` 的结构体的具体类型的 `impl` 块

这段代码意味着 `Point<f32>` 类型会有一个方法 `distance_from_origin`，而其他 `T` 不是 `f32` 类型的 `Point<T>` 实例则没有定义此方法。这个方法计算点实例与坐标 `(0.0, 0.0)` 之间的距离，并使用了只能用于浮点型的数学运算符。

结构体定义中的泛型类型参数并不总是与结构体方法签名中使用的泛型是同一类型。示例 10-11 中在示例 10-8 中的结构体 `Point<T, U>` 上定义了一个方法 `mixup`。这个方法获取另一个 `Point` 作为参数，而它可能与调用 `mixup` 的 `self` 是不同的 `Point` 类型。这个方法用 `self` 的 `Point` 类型的 `x` 值（类型 `T`）和参数的 `Point` 类型的 `y` 值（类型 `W`）来创建一个新 `Point` 类型的实例：

文件名: src/main.rs

```rust
struct Point<T, U> {
    x: T,
    y: U,
}

impl<T, U> Point<T, U> {
    fn mixup<V, W>(self, other: Point<V, W>) -> Point<T, W> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}

fn main() {
    let p1 = Point { x: 5, y: 10.4 };
    let p2 = Point { x: "Hello", y: 'c' };

    let p3 = p1.mixup(p2);

    println!("p3.x = {}, p3.y = {}", p3.x, p3.y);
}
```

##### 示例 10-11：方法使用了与结构体定义中不同类型的泛型

在 `main` 函数中，定义了一个有 `i32` 类型的 `x`（其值为 `5`）和 `f64` 的 `y`（其值为 `10.4`）的 `Point`。`p2` 则是一个有着字符串 `slice` 类型的 `x`（其值为 `"Hello"`）和 `char` 类型的 `y`（其值为 `c`）的 `Point`。在 `p1` 上以 `p2` 作为参数调用 `mixup` 会返回一个 `p3`，它会有一个 `i32` 类型的 `x`，因为 `x` 来自 `p1`，并拥有一个 `char` 类型的 `y`，因为 `y` 来自 `p2`。`println!` 会打印出 `p3.x = 5`, `p3.y = c`。

这个例子的目的是展示一些泛型通过 `impl` 声明而另一些通过方法定义声明的情况。这里泛型参数 `T` 和 `U` 声明于 `impl` 之后，因为他们与结构体定义相对应。而泛型参数 `V` 和 `W` 声明于 `fn mixup` 之后，因为他们只是相对于方法本身的。

### 泛型代码的性能

在阅读本部分内容的同时，你可能会好奇使用泛型类型参数是否会有运行时消耗。好消息是：Rust 实现了泛型，使得使用泛型类型参数的代码相比使用具体类型并没有任何速度上的损失。

Rust 通过在编译时进行泛型代码的 **单态化\***（monomorphization）\*来保证效率。单态化是一个通过填充编译时使用的具体类型，将通用代码转换为特定代码的过程。

编译器所做的工作正好与示例 10-5 中我们创建泛型函数的步骤相反。编译器寻找所有泛型代码被调用的位置并使用泛型代码针对具体类型生成代码。

让我们看看一个使用标准库中 Option 枚举的例子：

```rust
let integer = Some(5);
let float = Some(5.0);
```

当 Rust 编译这些代码的时候，它会进行单态化。编译器会读取传递给 `Option<T>` 的值并发现有两种 `Option<T>`：一个对应 `i32` 另一个对应 `f64`。为此，它会将泛型定义 `Option<T>` 展开为 `Option_i32` 和 `Option_f64`，接着将泛型定义替换为这两个具体的定义。

编译器生成的单态化版本的代码看起来像这样，并包含将泛型 `Option<T>` 替换为编译器创建的具体定义后的用例代码：

文件名: src/main.rs

```rust
enum Option_i32 {
    Some(i32),
    None,
}

enum Option_f64 {
    Some(f64),
    None,
}

fn main() {
    let integer = Option_i32::Some(5);
    let float = Option_f64::Some(5.0);
}
```

我们可以使用泛型来编写不重复的代码，而 Rust 将会为每一个实例编译其特定类型的代码。这意味着在使用泛型时没有运行时开销；当代码运行，它的执行效率就跟好像手写每个具体定义的重复代码一样。这个单态化过程正是 Rust 泛型在运行时极其高效的原因。

## trait: 定义共享的行为

_trait_ 告诉 Rust 编译器某个特定类型拥有可能与其他类型共享的功能。可以通过 trait 以一种抽象的方式定义共享的行为。可以使用 trait bounds 指定泛型是任何拥有特定行为的类型。

:::caution
trait 类似于其他语言中常被称为 接口（interfaces）的功能，虽然有一些不同。
:::

### 定义 trait

一个类型的行为由其可供调用的方法构成。如果可以对不同类型调用相同的方法的话，这些类型就可以共享相同的行为了。trait 定义是一种将方法签名组合起来的方法，目的是定义一个实现某些目的所必需的行为的集合。

例如，这里有多个存放了不同类型和属性文本的结构体：结构体 `NewsArticle` 用于存放发生于世界各地的新闻故事，而结构体 `Tweet` 最多只能存放 `280` 个字符的内容，以及像是否转推或是否是对推友的回复这样的元数据。

我们想要创建一个多媒体聚合库用来显示可能储存在 `NewsArticle` 或 `Tweet` 实例中的数据的总结。每一个结构体都需要的行为是他们是能够被总结的，这样的话就可以调用实例的 `summarize` 方法来请求总结。示例 10-12 中展示了一个表现这个概念的 `Summary` trait 的定义：

文件名: src/lib.rs

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}
```

##### 示例 10-12：`Summary` trait 定义，它包含由 `summarize` 方法提供的行为

这里使用 `trait` 关键字来声明一个 trait，后面是 trait 的名字，在这个例子中是 `Summary`。在大括号中声明描述实现这个 trait 的类型所需要的行为的方法签名，在这个例子中是 `fn summarize(&self) -> String`。

在方法签名后跟分号，而不是在大括号中提供其实现。接着每一个实现这个 trait 的类型都需要提供其自定义行为的方法体，编译器也会确保任何实现 `Summary` trait 的类型都拥有与这个签名的定义完全一致的 `summarize` 方法。

trait 体中可以有多个方法：一行一个方法签名且都以分号结尾。

### 为类型实现 trait

现在我们定义了 `Summary` trait，接着就可以在多媒体聚合库中需要拥有这个行为的类型上实现它了。示例 10-13 中展示了 `NewsArticle` 结构体上 `Summary` trait 的一个实现，它使用标题、作者和创建的位置作为 `summarize` 的返回值。对于 `Tweet` 结构体，我们选择将 `summarize` 定义为用户名后跟推文的全部文本作为返回值，并假设推文内容已经被限制为 `280` 字符以内。

文件名: src/lib.rs

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewsArticle {
    pub headline: String,
    pub author: String,
    pub location: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}
```

##### 示例 10-13：在 `NewsArticle` 和 `Tweet` 类型上实现 `Summary` trait

在类型上实现 trait 类似于实现与 trait 无关的方法。区别在于 `impl` 关键字之后，我们提供需要实现 trait 的名称，接着是 `for` 和需要实现 trait 的类型的名称。在 `impl` 块中，使用 trait 定义中的方法签名，不过不再后跟分号，而是需要在大括号中编写函数体来为特定类型实现 trait 方法所拥有的行为。

一旦实现了 trait，我们就可以用与 `NewsArticle` 和 `Tweet` 实例的非 `trait` 方法一样的方式调用 trait 方法了：

文件名: src/main.rs

```rust
use aggregator::{Summary, Tweet};

fn main() {
    let tweet = Tweet {
        username: String::from("hero_ebooks"),
        content: String::from("of course, as you probably already know, people"),
        reply: false,
        retweet: false,
    };

    println!("1 new tweet: {}", tweet.summarize());
}
```

这会打印出 `1 new tweet: horse_ebooks: of course, as you probably already know, people`。

注意因为示例 10-13 中我们在相同的 `lib.rs` 里定义了 `Summary` trait 和 `NewsArticle` 与 `Tweet` 类型，所以他们是位于同一作用域的。如果这个 `lib.rs` 是对应 `aggregator` crate 的，而别人想要利用我们 crate 的功能为其自己的库作用域中的结构体实现 `Summary` trait。首先他们需要将 `trait` 引入作用域。这可以通过指定 `use aggregator::Summary;` 实现，这样就可以为其类型实现 `Summary` trait 了。`Summary` 还必须是公有 trait 使得其他 crate 可以实现它，这也是为什么实例 10-12 中将 pub 置于 trait 之前。

实现 trait 时需要注意的一个限制是，只有当 trait 或者要实现 trait 的类型位于 crate 的本地作用域时，才能为该类型实现 trait。例如，可以为 `aggregator` crate 的自定义类型 `Tweet` 实现如标准库中的 `Display` trait，这是因为 `Tweet` 类型位于 `aggregator` crate 本地的作用域中。类似地，也可以在 `aggregator` crate 中为 `Vec<T>` 实现 `Summary`，这是因为 `Summary` trait 位于 `aggregator` crate 本地作用域中。

但是不能为外部类型实现外部 trait。例如，不能在 `aggregator` crate 中为 `Vec<T>` 实现 `Display` trait。这是因为 `Display` 和 `Vec<T>` 都定义于标准库中，它们并不位于 `aggregator` crate 本地作用域中。这个限制是被称为 **相干性**_（coherence）_ 的程序属性的一部分，或者更具体的说是 **孤儿规则**_（orphan rule）_，其得名于不存在父类型。这条规则确保了其他人编写的代码不会破坏你代码，反之亦然。没有这条规则的话，两个 crate 可以分别对相同类型实现相同的 trait，而 Rust 将无从得知应该使用哪一个实现。

### 默认实现

有时为 trait 中的某些或全部方法提供默认的行为，而不是在每个类型的每个实现中都定义自己的行为是很有用的。这样当为某个特定类型实现 trait 时，可以选择保留或重载每个方法的默认行为。

示例 10-14 中展示了如何为 `Summary` trait 的 `summarize` 方法指定一个默认的字符串值，而不是像示例 10-12 中那样只是定义方法签名：

文件名: src/lib.rs

```rust
pub trait Summary {
    fn summarize(&self) -> String {
        String::from("Read more...")
    }
}
```

##### 示例 10-14：`Summary` trait 的定义，带有一个 `summarize` 方法的默认实现

如果想要对 `NewsArticle` 实例使用这个默认实现，而不是定义一个自己的实现，则可以通过 `impl Summary for NewsArticle {}` 指定一个空的 `impl` 块。

虽然我们不再直接为 `NewsArticle` 定义 `summarize` 方法了，但是我们提供了一个默认实现并且指定 `NewsArticle` 实现 `Summary` trait。因此，我们仍然可以对 `NewsArticle` 实例调用 `summarize` 方法，如下所示：

```rust
let article = NewsArticle {
    headline: String::from("Penguins win the Stanley Cup Championship!"),
    location: String::from("Pittsburgh, PA, USA"),
    author: String::from("Iceburgh"),
    content: String::from("The Pittsburgh Penguins once again are the best
    hockey team in the NHL."),
};

println!("New article available! {}", article.summarize());
```

这段代码会打印 `New article available! (Read more...)`。

为 `summarize` 创建默认实现并不要求对示例 10-13 中 `Tweet` 上的 `Summary` 实现做任何改变。其原因是重载一个默认实现的语法与实现没有默认实现的 trait 方法的语法一样。

默认实现允许调用相同 trait 中的其他方法，哪怕这些方法没有默认实现。如此，trait 可以提供很多有用的功能而只需要实现指定一小部分内容。例如，我们可以定义 `Summary` trait，使其具有一个需要实现的 `summarize_author` 方法，然后定义一个 `summarize` 方法，此方法的默认实现调用 `summarize_author` 方法：

```rust
pub trait Summary {
    fn summarize_author(&self) -> String;

    fn summarize(&self) -> String {
      format!("Read more from {} ...", self.summarize_author())
    }
}
```

为了使用这个版本的 `Summary`，只需在实现 trait 时定义 `summarize_author` 即可：

```rust
impl Summary for Tweet {
    fn summarize_author(&self) -> String {
        format!("@{}", self.username)
    }
}
```

一旦定义了 `summarize_author`，我们就可以对 `Tweet` 结构体的实例调用 `summarize` 了，而 `summarize` 的默认实现会调用我们提供的 `summarize_author` 定义。因为实现了 `summarize_author`，`Summary` trait 就提供了 `summarize` 方法的功能，且无需编写更多的代码。

```rust
let tweet = Tweet {
    username: String::from("horse_ebooks"),
    content: String::from("of course, as you probably already know, people"),
    reply: false,
    retweet: false,
};

println!("1 new tweet: {}", tweet.summarize());
```

这会打印出 `1 new tweet: (Read more from @horse_ebooks...)`。

请注意，无法从相同方法的重载实现中调用默认方法。

### trait 作为参数

知道了如何定义 trait 和在类型上实现这些 trait 之后，我们可以探索一下如何使用 trait 来接受多种不同类型的参数。

例如在示例 10-13 中为 `NewsArticle` 和 `Tweet` 类型实现了 `Summary` trait。我们可以定义一个函数 `notify` 来调用其参数 item 上的 summarize 方法，该参数是实现了 Summary trait 的某种类型。为此可以使用 impl Trait 语法，像这样：

```rust
pub fn notify(item: impl Summary) {
    println!("Breaking news! {}", item.summarize())
}
```

对于 `item` 参数，我们指定了 `impl` 关键字和 trait 名称，而不是具体的类型。该参数支持任何实现了指定 trait 的类型。在 `notify` 函数体中，可以调用任何来自 `Summary` trait 的方法，比如 `summarize`。我们可以传递任何 `NewsArticle` 或 `Tweet` 的实例来调用 `notify`。任何用其它如 `String` 或 `i32` 的类型调用该函数的代码都不能编译，因为它们没有实现 `Summary`。

#### Trait Bound 语法

`impl Trait` 语法适用于直观的例子，它实际上是一种较长形式语法的语法糖。我们称为 _trait bound_，它看起来像：

```rust
pub fn notify<T: Summary>(item: T) {
    println!("Breaking news! {}", item.summarize())
}
```

这与之前的例子相同，不过稍微冗长了一些。`trait bound` 与泛型参数声明在一起，位于尖括号中的冒号后面。

`impl Trait` 很方便，适用于短小的例子。`trait bound` 则适用于更复杂的场景。例如，可以获取两个实现了 `Summary` 的参数。使用 `impl Trait` 的语法看起来像这样：

```rust
pub fn notify(item1: impl Summary, item2: impl Summary) {
    // ...
}
```

这适用于 `item1` 和 `item2` 允许是不同类型的情况（只要它们都实现了 `Summary`）。不过如果你希望强制它们都是相同类型呢？这只有在使用 trait bound 时才有可能：

```rust
pub fn notify<T: Summary>(item1: T, item2: T) {
    // ...
}
```

泛型 `T` 被指定为 `item1` 和 `item2` 的参数限制，如此传递给参数 `item1` 和 `item2` 值的具体类型必须一致。

#### 通过 + 指定多个 trait bound

如果 `notify` 需要显示 `item` 的格式化形式，同时也要使用 `summarize` 方法，那么 `item` 就需要同时实现两个不同的 trait：`Display` 和 `Summary`。这可以通过 `+` 语法实现：

```rust
pub fn notify(item: impl Display + Summary) {
    // ..
}
```

`+` 语法也适用于泛型的 trait bound：

```rust
pub fn notify<T: Display + Summary>(item: T) {
    // ...
}
```

#### 通过 where 简化 trait bound

然而，使用过多的 trait bound 也有缺点。每个泛型有其自己的 trait bound，所以有多个泛型参数的函数在名称和参数列表之间会有很长的 trait bound 信息，这使得函数签名难以阅读。为此，Rust 有另一个在函数签名之后的 `where` 从句中指定 trait bound 的语法。所以除了这么写：

```rust
pub fn notify<T: Display + Summary, U: Clone + Debug>(t: T, u: U) -> i32 {
    // ...
}
```

还可以像这样使用 `where` 从句：

```rust
pub fn notify<T, U>(t: T, u: u)
where
    T: Display + Summary,
    U: Clone + Debug,
{
    // ...
}
```

这个函数签名就显得不那么杂乱，函数名、参数列表和返回值类型都离得很近，看起来跟没有那么多 trait bounds 的函数很像。

### 返回实现 trait 的类型

也可以在返回值中使用 `impl Trait` 语法，来返回实现了某个 trait 的类型：

```rust
fn returns_summarizable() -> impl Summary {
    Tweet {
        username: String::from("heros_ebooks"),
        content: String::from("of course, as you probably already know, people."),
        reply: false,
        retweet: false,
    }
}
```

通过使用 `impl Summary` 作为返回值类型，我们指定了 `returns_summarizable` 函数返回某个实现了 `Summary` trait 的类型，但是不确定其具体的类型。在这个例子中 `returns_summarizable` 返回了一个 `Tweet`，不过调用方并不知情。

返回一个只是指定了需要实现的 trait 的类型的能力在闭包和迭代器场景十分的有用。闭包和迭代器创建只有编译器知道的类型，或者是非常非常长的类型。`impl Trait` 允许你简单的指定函数返回一个 Iterator 而无需写出实际的冗长的类型。

不过这只适用于返回单一类型的情况。例如，这段代码的返回值类型指定为返回 `impl Summary`，但是返回了 `NewsArticle` 或 `Tweet` 就行不通：

```rust
fn returns_summarizable(switch: bool) -> impl Summary {
    if switch {
        NewsArticle {
            headline: String::from("Penguins win the Stanley Cup Championship!"),
            location: String::from("Pittsburgh, PA, USA"),
            author: String::from("Iceburgh"),
            content: String::from("The Pittsburgh Penguins once again are the best
            hockey team in the NHL."),
        }
    } else {
        Tweet {
            username: String::from("horse_ebooks"),
            content: String::from("of course, as you probably already know, people"),
            reply: false,
            retweet: false,
        }
    }
}
```

这里尝试返回 `NewsArticle` 或 `Tweet`。这不能编译，因为 `impl Trait` 工作方式的限制。

### 使用 trait bounds 来修复 largest 函数

现在你知道了如何使用泛型参数 trait bound 来指定所需的行为。让我们回到实例 10-5 修复使用泛型类型参数的 `largest` 函数定义！回顾一下，最后尝试编译代码时出现的错误是：

```
PS E:\github\rust-projects\generate_type> cargo run
   Compiling generate_type v0.1.0 (E:\github\rust-projects\generate_type)
error[E0369]: binary operation `>` cannot be applied to type `T`
 --> src\main.rs:5:17
  |
5 |         if item > largest {
  |            ---- ^ ------- T
  |            |
  |            T
  |
help: consider restricting type parameter `T`
  |
1 | fn largest<T: std::cmp::PartialOrd>(list: &[T]) -> T {
  |             ++++++++++++++++++++++

For more information about this error, try `rustc --explain E0369`.
error: could not compile `generate_type` (bin "generate_type") due to previous error
```

在 `largest` 函数体中我们想要使用大于运算符（`>`）比较两个 `T` 类型的值。这个运算符被定义为标准库中 `trait std::cmp::PartialOrd` 的一个默认方法。所以需要在 `T` 的 trait bound 中指定 `PartialOrd`，这样 `largest` 函数可以用于任何可以比较大小的类型的 `slice`。因为 `PartialOrd` 位于 `prelude` 中所以并不需要手动将其引入作用域。将 `largest` 的签名修改为如下：

```rust
fn largest<T: PartialOrd>(list: &[T]) -> T {
```

但是如果编译代码的话，会出现一些不同的错误：

```
PS E:\github\rust-projects\generate_type> cargo run
   Compiling generate_type v0.1.0 (E:\github\rust-projects\generate_type)
error[E0508]: cannot move out of type `[T]`, a non-copy slice
 --> src\main.rs:2:23
  |
2 |     let mut largest = list[0];
  |                       ^^^^^^^
  |                       |
  |                       cannot move out of here
  |                       move occurs because `list[_]` has type `T`, which does not implement the `Copy` trait
  |
help: consider borrowing here
  |
2 |     let mut largest = &list[0];
  |                       +

error[E0507]: cannot move out of a shared reference
 --> src\main.rs:4:18
  |
4 |     for &item in list {
  |          ----    ^^^^
  |          |
  |          data moved here
  |          move occurs because `item` has type `T`, which does not implement the `Copy` trait
  |
help: consider removing the borrow
  |
4 -     for &item in list {
4 +     for item in list {
  |

Some errors have detailed explanations: E0507, E0508.
For more information about an error, try `rustc --explain E0507`.
error: could not compile `generate_type` (bin "generate_type") due to 2 previous errors
```

错误的核心是 `cannot move out of type [T], a non-copy slice`，对于非泛型版本的 `largest` 函数，我们只尝试了寻找最大的 `i32` 和 `char`。像 `i32` 和 `char` 这样的类型是已知大小的并可以储存在栈上，所以他们实现了 `Copy` trait。当我们将 `largest` 函数改成使用泛型后，现在 `list` 参数的类型就有可能是没有实现 `Copy` trait 的。这意味着我们可能不能将 `list[0]` 的值移动到 `largest` 变量中，这导致了上面的错误。

为了只对实现了 `Copy` 的类型调用这些代码，可以在 `T` 的 trait bounds 中增加 `Copy`！示例 10-15 中展示了一个可以编译的泛型版本的 `largest` 函数的完整代码，只要传递给 `largest` 的 `slice` 值的类型实现了 `PartialOrd` 和 `Copy` 这两个 trait，例如 `i32` 和 `char`：

文件名: src/main.rs

```rust
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list {
        if item > largest {
            largest = item;
        }
    }

    largest
}

fn main() {
    let number_list = vec![34, 50, 25, 100, 65];

    let result = largest(&number_list);
    println!("The largest number is {}", result);

    let char_list = vec!['y', 'm', 'a', 'q'];

    let result = largest(&char_list);
    println!("The largest char is {}", result);
}
```

##### 示例 10-15：一个可以用于任何实现了 `PartialOrd` 和 `Copy` trait 的泛型的 `largest` 函数

如果并不希望限制 `largest` 函数只能用于实现了 `Copy` trait 的类型，我们可以在 `T` 的 trait bounds 中指定 `Clone` 而不是 `Copy`。并克隆 `slice` 的每一个值使得 `largest` 函数拥有其所有权。使用 `clone` 函数意味着对于类似 `String` 这样拥有堆上数据的类型，会潜在的分配更多堆上空间，而堆分配在涉及大量数据时可能会相当缓慢。

另一种 `largest` 的实现方式是返回在 `slice` 中 `T` 值的引用。如果我们将函数返回值从 `T` 改为 `&T` 并改变函数体使其能够返回一个引用，我们将不需要任何 `Clone` 或 `Copy` 的 trait bounds 而且也不会有任何的堆分配。尝试自己实现这种替代解决方式吧！

### 使用 trait bound 有条件地实现方法

通过使用带有 trait bound 的泛型参数的 `impl` 块，可以有条件地只为那些实现了特定 trait 的类型实现方法。例如，示例 10-16 中的类型 `Pair<T>` 总是实现了 `new` 方法，不过只有那些为 `T` 类型实现了 `PartialOrd` trait （来允许比较） 和 `Display` trait （来启用打印）的 `Pair<T>` 才会实现 `cmp_display` 方法：

```rust
use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is x = {}", self.y);
        }
    }
}
```

##### 示例 10-16：根据 trait bound 在泛型上有条件的实现方法

也可以对任何实现了特定 trait 的类型有条件地实现 trait。对任何满足特定 trait bound 的类型实现 trait 被称为 _blanket implementations_，他们被广泛的用于 Rust 标准库中。例如，标准库为任何实现了 `Display` trait 的类型实现了 `ToString` trait。这个 `impl` 块看起来像这样：

```rust
impl<T: Display> ToString for T {
    // ---snip---
}
```

因为标准库有了这些 `blanket implementation`，我们可以对任何实现了 `Display` trait 的类型调用由 `ToString` 定义的 `to_string` 方法。例如，可以将整型转换为对应的 `String` 值，因为整型实现了 `Display`：

```rust
let s = 3.to_string();
```

blanket implementation 会出现在 trait 文档的 “Implementors” 部分。

trait 和 trait bound 让我们使用泛型类型参数来减少重复，并仍然能够向编译器明确指定泛型类型需要拥有哪些行为。因为我们向编译器提供了 trait bound 信息，它就可以检查代码中所用到的具体类型是否提供了正确的行为。在动态类型语言中，如果我们尝试调用一个类型并没有实现的方法，会在运行时出现错误。Rust 将这些错误移动到了编译时，甚至在代码能够运行之前就强迫我们修复错误。另外，我们也无需编写运行时检查行为的代码，因为在编译时就已经检查过了，这样相比其他那些不愿放弃泛型灵活性的语言有更好的性能。

这里还有一种泛型，我们一直在使用它甚至都没有察觉它的存在，这就是 **生命周期**_（lifetimes）_。不同于其他泛型帮助我们确保类型拥有期望的行为，生命周期则有助于确保引用在我们需要他们的时候一直有效。让我们学习生命周期是如何做到这些的。

## 生命周期与引用有效性

Rust 中的每一个引用都有其 **生命周期**（lifetime），也就是引用保持有效的作用域。大部分时候生命周期是隐含并可以推断的，正如大部分时候类型也是可以推断的一样。类似于当因为有多种可能类型的时候必须注明类型，也会出现引用的生命周期以一些不同方式相关联的情况，所以 Rust 需要我们使用泛型生命周期参数来注明他们的关系，这样就能确保运行时实际使用的引用绝对是有效的。

生命周期的概念从某种程度上说不同于其他语言中类似的工具，毫无疑问这是 Rust 最与众不同的功能。虽然本章不可能涉及到它全部的内容，我们会讲到一些通常你可能会遇到的生命周期语法以便你熟悉这个概念。

### 生命周期避免了悬垂引用

生命周期的主要目标是避免悬垂引用，它会导致程序引用了非预期引用的数据。考虑一下示例 10-17 中的程序，它有一个外部作用域和一个内部作用域。

```rust
fn main() {
    let r;

    {
        let x = 5;
        r = &x;
    }

    println!("r: {}", r);
}
```

##### 示例 10-17：尝试使用离开作用域的值的引用

外部作用域声明了一个没有初值的变量 `r`，而内部作用域声明了一个初值为 `5` 的变量 `x`。在内部作用域中，我们尝试将 `r` 的值设置为一个 `x` 的引用。接着在内部作用域结束后，尝试打印出 `r` 的值。这段代码不能编译因为 `r` 引用的值在尝试使用之前就离开了作用域。如下是错误信息：

```
PS E:\github\rust-projects\lifetimes> cargo run
   Compiling lifetimes v0.1.0 (E:\github\rust-projects\lifetimes)
error[E0597]: `x` does not live long enough
 --> src\main.rs:6:13
  |
5 |         let x = 5;
  |             - binding `x` declared here
6 |         r = &x;
  |             ^^ borrowed value does not live long enough
7 |     }
  |     - `x` dropped here while still borrowed
8 |
9 |     println!("r: {}", r);
  |                       - borrow later used here

For more information about this error, try `rustc --explain E0597`.
error: could not compile `lifetimes` (bin "lifetimes") due to previous error
```

变量 `x` 并没有 “存在的足够久”。其原因是 `x` 在到达第 7 行内部作用域结束时就离开了作用域。不过 `r` 在外部作用域仍是有效的；作用域越大我们就说它 “存在的越久”。如果 Rust 允许这段代码工作，`r` 将会引用在 `x` 离开作用域时被释放的内存，这时尝试对 `r` 做任何操作都不能正常工作。那么 Rust 是如何决定这段代码是不被允许的呢？这得益于借用检查器。

#### 借用检查器
