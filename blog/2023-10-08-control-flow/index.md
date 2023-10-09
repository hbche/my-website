---
title: Rust 通用编程概念 - 控制流
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: 记录 Rust 学习过程
tags: ['rust', '控制流', '通用编程概念']
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

### 使用 else if 处理多重条件

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

### 在 let 语句中使用 if

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

## 使用循环重复执行

多次执行同一段代码是很常用的，Rust 为此提供了多种**循环**（loop），它们遍历执行循环体中的代码直到结尾并紧接着回到开头继续执行。为了试验循环，让我们新建一个名为 _loops_ 的项目。

Rust 有三种循环：`loop`、`while` 和 `for`。我们每一个都试试。

### 使用 loop 重复执行代码

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

### 从循环返回

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

### while 条件循环

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

### 使用 for 遍历集合

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

## 练习

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
