---
title: Rust 所有权
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '所有权']
date: 2023-10-09
time: 15:35:00
---

所有权（系统）是 Rust 最为与众不同的特性，它让 Rust 无需垃圾回收器（garbage collector）即可保证内存安全。因此，理解 Rust 中所有权的运作方式非常重要。在本章中，我们将讨论所有权以及相关功能：借用、slice 以及 Rust 如何在内存中存放数据。

<!--truncate-->

## 什么是所有权

所有运行的程序都必须管理其使用计算机内存的方式。一些语言中具有垃圾回收机制，在程序运行时不断地寻找不再使用的内存；在另一些语言中，开发者必须亲自分配和释放内存。Rust 则选择了第三种方式：通过所有权系统管理内存，编译器在编译时会根据一系列的规则进行检查。在运行时，所有权系统的任何功能都不会减慢程序。

<details>
<summary><b>栈（Stack）与堆（Heap）</b></summary>

在很多语言中，你并不需要经常考虑到栈与堆。不过在像 Rust 这样的系统编程语言中，值是位于栈上还是堆上在很大程度上影响了语言的行为以及为何必须做出这样的抉择。

栈和堆都是代码在运行时可供使用的内存，但是它们的结构不同。栈以放入值的顺序存储值并以相反顺序取出值。这也被称作 **后进先出**（last in, first out）。想象一下一叠盘子：当增加更多盘子时，把它们放在盘子堆的顶部，当需要盘子时，也从顶部拿走。不能从中间也不能从底部增加或拿走盘子！增加数据叫做 **进栈**（pushing onto the stack），而移出数据叫做 **出栈**（popping off the stack）。

栈中的所有数据都必须占用**已知且固定的大小**。在编译时大小未知或大小可能变化的数据，要改为存储在堆上。堆是缺乏组织的：当向堆放入数据时，你要请求一定大小的空间。内存分配器（memory allocator）在堆的某处找到一块足够大的空位，把它标记为已使用，并返回一个表示该位置地址的 **指针**（pointer）。这个过程称作 **在堆上分配内存**（allocating on the heap），有时简称为 “分配”（allocating）。将数据推入栈中并不被认为是分配。因为指针的大小是已知并且固定的，你可以将指针存储在栈上，不过当需要实际数据时，必须访问指针。

想象一下去餐馆就座吃饭。当进入时，你说明有几个人，餐馆员工会找到一个够大的空桌子并领你们过去。如果有人来迟了，他们也可以通过询问来找到你们坐在哪。

入栈比在堆上分配内存要快，因为（入栈时）分配器无需为存储新数据去搜索内存空间；其位置总是在栈顶。相比之下，在堆上分配内存则需要更多的工作，这是因为分配器必须首先找到一块足够存放数据的内存空间，并接着做一些记录为下一次分配做准备。

访问堆上的数据比访问栈上的数据慢，因为**必须通过指针来访问**。现代处理器在内存中跳转越少就越快（缓存）。继续类比，假设有一个服务员在餐厅里处理多个桌子的点菜。在一个桌子报完所有菜后再移动到下一个桌子是最有效率的。从桌子 A 听一个菜，接着桌子 B 听一个菜，然后再桌子 A，然后再桌子 B 这样的流程会更加缓慢。出于同样原因，处理器在处理的数据彼此较近的时候（比如在栈上）比较远的时候（比如可能在堆上）能更好的工作。在堆上分配大量的空间也可能消耗时间。

当你的代码调用一个函数时，传递给函数的值（包括可能指向堆上数据的指针）和函数的局部变量被压入栈中。当函数结束时，这些值被移出栈。

跟踪哪部分代码正在使用堆上的哪些数据，最大限度地减少堆上的重复数据量，以及清理堆上不再使用的数据确保不会耗尽空间，这些问题正是所有权系统要处理的。一旦理解了所有权，你就不需要经常考虑栈和堆了，不过明白了所有权的存在就是为了管理堆数据，能够帮助解释为什么所有权要以这种方式工作。

</details>

### 所有权规则

首先，让我们看一下所有权的规则。当我们通过举例说明时，请谨记这些规则：

- Rust 中的每一个值都有一个被称为其 **所有者** (owner) 的变量
- 值在任一时刻有且只有一个所有者
- 当所有者（变量）离开作用域，这个值将被丢弃

### 变量与作用域

在所有权的第一个例子中，我们看看一些变量的 **作用域**（scope）。作用域是一个项（item）在程序中有效的范围。假设有这样一个变量：

```rust
let s = String::from("hello");
```

变量 `s` 绑定到了一个字符串字面量，这个字符串值是硬编码进程序代码中的。该变量从声明的那一刻开始直到当前 **作用域** 结束时都是有效的。下面的示例给出了变量 `s` 的有效范围:

```rust
{   // s 在这里无效, 它尚未声明
    let s = String::from("hello");  // 从此处起, s 开始有效
    // 使用 s
}   // 此作用域已经结束, s 不再有效
```

换句话说，这里有两个重要的时间点：

- 当 `s` **进入作用域** 时，它就是有效的。
- 这一直持续到它 **离开作用域** 为止。

目前为止，变量是否有效与作用域的关系跟其他编程语言是类似的。现在我们在此基础上介绍 `String` 类型。

### String 类型

字符串字面量是很方便的，不过它们并不适合使用文本的每一种场景。原因之一就是它们是不可变的。另一个原因是并非所有字符串的值都能在编写代码时就知道：例如，要是想获取用户输入并存储该怎么办呢？为此，Rust 有第二个字符串类型，`String`。这个类型管理被分配到堆上的数据，所以能够存储在编译时未知大小的文本。可以使用 `from` 函数基于字符串字面量来创建 `String`，如下：

```rust
let s = String::from("Hello");
```

双冒号（::）运算符允许我们将特定的 `from` 函数置于 `String` 类型的命名空间（namespace）下。

可以 修改此类字符串 ：

```rust
let mut s = String::from("Hello");
s.push_str(", world!");
println!("{}", s);
```

那么这里有什么区别呢？为什么 String 可变而字面量却不行呢？区别在于两个类型对内存的处理上。

### 内存与分配

就字符串字面量来说，我们在编译时就知道其内容，所以文本被直接硬编码进最终的可执行文件中。这使得字符串字面量快速且高效。不过这些特性都只得益于字符串字面量的不可变性。不幸的是，我们不能为了每一个在编译时大小未知的文本而将一块内存放入二进制文件中，并且它的大小还可能随着程序运行而改变。

<details>
<summary>字符串字面量与字符串变量内存分布</summary>

在 Rust 中，字符串字面量（string literals）是在栈（stack）上存储的。

在 Rust 的内存管理中，堆（heap）和栈（stack）是两种主要的方式。栈用于存储局部变量和函数调用的信息，其存储的数据在函数调用结束后就会被销毁。而堆则是用于动态分配内存，存储全局变量或长期存活的数据。

字符串字面量是一种在编译时就已知其内容的字符串，因此它们被存储在程序的代码段中，也就是栈上。当然，如果你通过动态分配的方式（如使用 `String` 类型）创建字符串，那么这些字符串将会在堆上分配内存。

以下是一个简单的例子来说明这个问题：

```rust
fn main() {
    let s1 = "Hello, world!"; // 字符串字面量，存储在栈上
    let s2 = String::from("Hello, world!"); // 动态分配的字符串，存储在堆上
}
```

在这个例子中，`s1` 是一个字符串字面量，它会在栈上分配内存。而 `s2` 是通过 `String::from` 动态分配的字符串，它会在堆上分配内存。

需要注意的是，尽管字符串字面量在栈上，但由于它们的生命周期与程序的生命周期相同（它们是全局的），所以它们实际上是不会被销毁的。

</details>

对于 `String` 类型，为了支持一个可变，可增长的文本片段，需要在堆上分配一块在编译时未知大小的内存来存放内容。这意味着：

- 必须在运行时向内存分配器请求内存。
- 需要一个当我们处理完 `String` 时将内存返回给分配器的方法。

第一部分由我们完成：当调用 `String::from` 时，它的实现（implementation）请求其所需的内存。这在编程语言中是非常通用的。

然而，第二部分实现起来就各有区别了。在有 **垃圾回收**（garbage collector，GC）的语言中， `GC` 记录并清除不再使用的内存，而我们并不需要关心它。没有 `GC` 的话，识别出不再使用的内存并调用代码显式释放就是我们的责任了，跟请求内存的时候一样。从历史的角度上说正确处理内存回收曾经是一个困难的编程问题。如果忘记回收了会浪费内存。如果过早回收了，将会出现无效变量。如果重复回收，这也是个 bug。我们需要精确地为一个 `allocate` 配对一个 `free`。

Rust 采取了一个不同的策略：内存在拥有它的变量离开作用域后就被自动释放。下面是示例中作用域例子的一个使用 `String` 而不是字符串字面量的版本：

```rust
    {
        let s = String::from("hello"); // 从此处起，s 开始有效

        // 使用 s
    }                                  // 此作用域已结束，
                                       // s 不再有效
```

这是一个将 `String` 需要的内存返回给分配器的很自然的位置：当 s 离开作用域的时候。当变量离开作用域，Rust 为我们调用一个特殊的函数。这个函数叫做 `drop`，在这里 `String` 的作者可以放置释放内存的代码。Rust 在结尾的 `}` 处自动调用 `drop`。

> 注意：在 C++ 中，这种 item 在生命周期结束时释放资源的模式有时被称作 **资源获取即初始化**（Resource Acquisition Is Initialization (RAII)）。如果你使用过 RAII 模式的话应该对 Rust 的 drop 函数并不陌生。

这个模式对编写 Rust 代码的方式有着深远的影响。现在它看起来很简单，不过在更复杂的场景下代码的行为可能是不可预测的，比如当有多个变量使用在堆上分配的内存时。现在让我们探索一些这样的场景。

### 变量与数据交互的方式（一）：移动

在 Rust 中，多个变量能够以不同的方式与同一数据交互。让我们看看下面的示例:

```rust
let x = 5;
let y = x;
```

我们大致可以猜到这在干什么：“将 `5` 绑定到 `x`；接着生成一个值 `x` 的拷贝并绑定到 `y`”。现在有了两个变量，`x` 和 `y`，都等于 `5`。这也正是事实上发生了的，因为整数是有已知固定大小的简单值，所以这两个 `5` 被放入了栈中。

现在看看这个 `String` 版本：

```rust
let s1 = String::from("hello");
let s2 = s1;
```

这看起来与上面的代码非常类似，所以我们可能会假设他们的运行方式也是类似的：也就是说，第二行可能会生成一个 `s1` 的拷贝并绑定到 `s2` 上。不过，事实上并不完全是这样。

看看下图以了解 `String` 的底层会发生什么。`String` 由三部分组成，如图左侧所示：一个指向存放字符串内容内存的指针，一个长度，和一个容量。这一组数据存储在栈上。右侧则是堆上存放内容的内存部分。

![](./ownership-01.svg)

<h5>图 4-1：将值 "hello" 绑定给 s1 的 String 在内存中的表现形式</h5>

长度表示 `String` 的内容当前使用了多少字节的内存。容量是 `String` 从分配器总共获取了多少字节的内存。长度与容量的区别是很重要的，不过在当前上下文中并不重要，所以现在可以忽略容量。

当我们将 `s1` 赋值给 `s2`，`String` 的数据被复制了，这意味着我们从栈上拷贝了它的指针、长度和容量。我们并没有复制指针指向的堆上数据。换句话说，内存中数据的表现如下图所示。

![](./ownership-02.svg)

<h5>图 4-2：变量 s2 的内存表现，它有一份 s1 指针、长度和容量的拷贝</h5>

这个表现形式看起来 `并不像` 下图中的那样，如果 Rust 也拷贝了堆上的数据，那么内存看起来就是这样的。如果 Rust 这么做了，那么操作 `s2 = s1` 在堆上数据比较大的时候会对运行时性能造成非常大的影响。

![](./ownership-03.svg)

<h5>图 4-3：另一个 s2 = s1 时可能的内存表现，如果 Rust 同时也拷贝了堆上的数据的话</h5>

之前我们提到过当变量离开作用域后，Rust 自动调用 `drop` 函数并清理变量的堆内存。不过图 4-2 展示了两个数据指针指向了同一位置。这就有了一个问题：当 `s2` 和 `s1` 离开作用域，他们都会尝试释放相同的内存。这是一个叫做 **二次释放**（double free）的错误，也是之前提到过的内存安全性 bug 之一。两次释放（相同）内存会导致内存污染，它可能会导致潜在的安全漏洞。

为了确保内存安全，这种场景下 Rust 的处理有另一个细节值得注意。在 `let s2 = s1` 之后，Rust 认为 `s1` 不再有效，因此 Rust 不需要在 `s1` 离开作用域后清理任何东西。看看在 `s2` 被创建之后尝试使用 `s1` 会发生什么；这段代码不能运行：

```rust
let s1 = String::from("hello");
let s2 = s1.trim();
println!("{}, world!", s1);
```

你会得到一个类似如下的错误，因为 Rust 禁止你使用无效的引用。

```
PS E:\github\rust-projects\ownership> cargo run
   Compiling ownership v0.1.0 (E:\github\rust-projects\ownership)
warning: unused variable: `s2`
 --> src\main.rs:3:9
  |
3 |     let s2 = s1;
  |         ^^ help: if this is intentional, prefix it with an underscore: `_s2`
  |
  = note: `#[warn(unused_variables)]` on by default

error[E0382]: borrow of moved value: `s1`
 --> src\main.rs:4:27
  |
2 |     let s1 = String::from("Hello");
  |         -- move occurs because `s1` has type `String`, which does not implement the `Copy` trait
3 |     let s2 = s1;
  |              -- value moved here
4 |     println!("{} world!", s1);
  |                           ^^ value borrowed here after move
  |
  = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider cloning the value if the performance cost is acceptable
  |
3 |     let s2 = s1.clone();
  |                ++++++++

For more information about this error, try `rustc --explain E0382`.
warning: `ownership` (bin "ownership") generated 1 warning
error: could not compile `ownership` (bin "ownership") due to previous error; 1 warning emitted
```

如果你在其他语言中听说过术语 **浅拷贝**（shallow copy）和 **深拷贝**（deep copy），那么拷贝指针、长度和容量而不拷贝数据可能听起来像浅拷贝。不过因为 Rust 同时使第一个变量无效了，这个操作被称为 **移动**（move），而不是浅拷贝。上面的例子可以解读为 `s1` 被 **移动** 到了 `s2` 中。那么具体发生了什么，如下图所示：

![](./ownership-04.svg)

<h5>图 4-4：s1 无效之后的内存表现</h5>

这样就解决了我们的问题！因为只有 `s2` 是有效的，当其离开作用域，它就释放自己的内存，完毕。

另外，这里还隐含了一个设计选择：Rust 永远也不会自动创建数据的 “深拷贝”。因此，任何 **自动** 的复制可以被认为对运行时性能影响较小。

### 变量与数据交互的方式（二）：克隆

如果我们 确实 需要深度复制 String 中堆上的数据，而不仅仅是栈上的数据，可以使用一个叫做 clone 的通用函数。

这是一个使用 `clone` 方法的例子：

```rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = s1.clone();
    println!("s1 = {}, s2 = {}", s1, s2);
}
```

这段代码能正常运行，并且明确产生图 4-3 中行为，这里堆上的数据 确实 被复制了。

当出现 `clone` 调用时，你知道一些特定的代码被执行而且这些代码可能相当消耗资源。你很容易察觉到一些不寻常的事情正在发生。

### 只在栈上的数据：拷贝

这里还有一个没有提到的小窍门。这些代码使用了整型并且是有效的

```rust
fn main() {
    let x = 5;
    let y = x;
    println!("x = {}, y = {}", x, y);
}
```

但这段代码似乎与我们刚刚学到的内容相矛盾：没有调用 `clone`，不过 `x` 依然有效且没有被移动到 `y` 中。

原因是像整型这样的在编译时已知大小的类型被整个存储在栈上，所以拷贝其实际的值是快速的。这意味着没有理由在创建变量 `y` 后使 `x` 无效。换句话说，这里没有深浅拷贝的区别，所以这里调用 `clone` 并不会与通常的浅拷贝有什么不同，我们可以不用管它。

Rust 有一个叫做 `Copy trait` 的特殊标注，可以用在类似整型这样的存储在栈上的类型上。如果一个类型实现了 `Copy trait`，那么一个旧的变量在将其赋值给其他变量后仍然可用。Rust 不允许自身或其任何部分实现了 `Drop trait` 的类型使用 `Copy trait`。如果我们对其值离开作用域时需要特殊处理的类型使用 `Copy` 标注，将会出现一个编译时错误。

那么哪些类型实现了 `Copy trait` 呢？你可以查看给定类型的文档来确认，不过作为一个通用的规则，任何一组简单标量值的组合都可以实现 `Copy`，任何不需要分配内存或某种形式资源的类型都可以实现 `Copy` 。如下是一些 `Copy` 的类型：

- 所有整数类型，比如 `u32`。
- 布尔类型，`bool`，它的值是 `true` 和 `false` 。
- 所有浮点数类型，比如 `f64`。
- 字符类型，`char`。
- 元组，当且仅当其包含的类型也都实现 `Copy` 的时候。比如，`(i32, i32)` 实现了 `Copy`，但 `(i32, String)` 就没有。

### 所有权与函数

将值传递给函数在语义上与给变量赋值相似。向函数传递值可能会移动或者复制，就像赋值语句一样。

```rust
fn main() {
    let s = String::from("Hello ownership");
    takes_ownership(s);

    let i = 5;
    makes_copy(i);
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
}
```

当尝试在调用 `takes_ownership` 后使用 `s` 时，Rust 会抛出一个编译时错误。这些静态检查使我们免于犯错。试试在 `main` 函数中添加使用 `s` 和 `x` 的代码来看看哪里能使用他们，以及所有权规则会在哪里阻止我们这么做。

```rust
fn main() {
    let s = String::from("Hello ownership");
    takes_ownership(s);

    println!("s = {}", s);

    let i = 5;
    makes_copy(i);
    println!("i = {}", i);
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
}
```

如果在 `takes_ownership` 函数调用后打印 `s`，将会报错

```
PS E:\github\rust-projects\ownership> cargo run
   Compiling ownership v0.1.0 (E:\github\rust-projects\ownership)
error[E0382]: borrow of moved value: `s`
  --> src\main.rs:5:24
   |
2  |     let s = String::from("Hello ownership");
   |         - move occurs because `s` has type `String`, which does not implement the `Copy` trait
3  |     takes_ownership(s);
   |                     - value moved here
4  |
5  |     println!("s = {}", s);
   |                        ^ value borrowed here after move
   |
note: consider changing this parameter type in function `takes_ownership` to borrow instead if owning the value isn't necessary
  --> src\main.rs:12:33
   |
12 | fn takes_ownership(some_string: String) {
   |    ---------------              ^^^^^^ this parameter takes ownership of the value
   |    |
   |    in this function
   = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider cloning the value if the performance cost is acceptable
   |
3  |     takes_ownership(s.clone());
   |                      ++++++++

For more information about this error, try `rustc --explain E0382`.
error: could not compile `ownership` (bin "ownership") due to previous error
```

如果在 `takes_ownership` 函数调用中传入的是 `s.clone()` 后的结果，进行深克隆，那么 `s` 将不会在 `takes_ownership` 调用后发生移动。

```rust
fn main() {
    let s = String::from("Hello ownership");
    takes_ownership(s.clone());

    println!("s = {}", s);

    let i = 5;
    makes_copy(i);
    println!("i = {}", i);
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
}
```

### 返回值与作用域

返回值也可以转移所有权。

```rust
fn main() {
  let s1 = gives_ownership();         // gives_ownership 将返回值
                                      // 移给 s1

  let s2 = String::from("hello");     // s2 进入作用域

  let s3 = takes_and_gives_back(s2);  // s2 被移动到
                                      // takes_and_gives_back 中,
                                      // 它也将返回值移给 s3
} // 这里, s3 移出作用域并被丢弃。s2 也移出作用域，但已被移走，
  // 所以什么也不会发生。s1 移出作用域并被丢弃

fn gives_ownership() -> String {           // gives_ownership 将返回值移动给
                                           // 调用它的函数

  let some_string = String::from("yours"); // some_string 进入作用域

  some_string                              // 返回 some_string 并移出给调用的函数
}

// takes_and_gives_back 将传入字符串并返回该值
fn takes_and_gives_back(a_string: String) -> String { // a_string 进入作用域

  a_string  // 返回 a_string 并移出给调用的函数
}
```

变量的所有权总是遵循相同的模式：将值赋给另一个变量时移动它。当持有堆中数据值的变量离开作用域时，其值将通过 `drop` 被清理掉，除非数据被移动为另一个变量所有。

在每一个函数中都获取所有权并接着返回所有权有些啰嗦。如果我们想要函数使用一个值但不获取所有权该怎么办呢？如果我们还要接着使用它的话，每次都传进去再返回来就有点烦人了，除此之外，我们也可能想返回函数体中产生的一些数据。我们可以使用元组来返回多个值:

```rust
fn main() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() 返回字符串的长度

    (s, length)
}
```

但是这未免有些形式主义，而且这种场景应该很常见。幸运的是，Rust 对此提供了一个功能，叫做 **引用**（references）。

### 问答

1.  Rust 的所有权是否与其存储形式有关?

    <details>

    <summary>点击查看答案</summary>
    在Rust中，所有权（ownership）是一个重要的概念，它与变量绑定和生命周期密切相关。然而，所有权并不直接与数据是否存储在栈上或堆上有关。

    在 Rust 中，每个变量都有一个独特的所有权，这意味着只有一个变量可以拥有某个值的所有权。一旦变量离开其作用域，其所有权就会失效，该值就会变成无效的。

    对于在栈上存储的数据，所有权通常与函数中的局部变量绑定。当函数执行时，这些变量被创建并存储在栈上，它们在函数的作用域内拥有其值。当函数执行完毕并返回时，这些变量的所有权会失效，它们的值会被销毁。

    与此类似，堆上的数据也具有所有权，但该所有权是通过引用和生命周期来管理的。对于通过引用分配在堆上的数据，其所有权与引用一起存在，只要引用仍然有效，该数据的所有权就不会失效。一旦引用失效或被解引用，该数据的所有权就会失效，相应的内存就会变成无效的。

    因此，尽管在 Rust 中数据的存储位置（栈或堆）与其所有权的管理方式有关，但它们是两个独立的概念。数据的存储位置取决于其分配方式（静态分配或动态分配），而数据的所有权则取决于其绑定方式和生命周期。

    </details>
