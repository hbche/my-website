---
title: Python编程：从入门到实践(第3版)
description: python入门书籍
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['读书笔记', 'python']
date: 2025-07-24
---

## 简介

"Python 三剑客"之一，豆瓣评分 9.3；另外两剑客为 《Python 编程快速上手 —— 让繁琐
工作自动化》和《Python 极客项目编程》第二版

- **书名**：《Python 编程：从入门到实践》
- **作者**：[美]埃里克·马瑟斯
- **时间**：2023-05-01
- **出版社**：人民邮电出版社

## 第一部分 基础知识

### 第 1 章 起步

### 第 2 章 变量和简单的数据类型

### 第 3 章 列表简介

### 第 4 章 操作列表

#### 4.1 遍历整个列表

for 循环语法

```python
for item in items:
  operation_1
  operation_2
  ...
  operation_n
```

冒号后面的每一行缩进语句都是 for 循环每次执行的代码

使用循环打印魔术师的名字

magicians.py

```python
magicians = ["alice", "david", "carolina"]
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!.")
    print(f"I cat't wait to see your next trick, {magician.title()}\n")
```

##### 4.1.1 深入研究循环

magicians.py

```python
magicians = ["alice", "david", "carolina"]
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!.")
```

##### 4.1.2 在 for 循环中执行更多操作

for 循环中每个缩进行都是循环的一部分，将在每次循环时都执行一次

magicians.py

```python
magicians = ["alice", "david", "carolina"]
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!.")
    print(f"I cat't wait to see your next trick, {magician.title()}\n")
```

##### 4.1.3 在 for 循环结束之后执行一些操作

for 循环后，没有缩进的代码不属于循环的一部分，只执行一次，可作为循环结束后的逻辑
。

```python
magicians = ["alice", "david", "carolina"]
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!")
    print(f"I can't wait to see your next trick, {magician.title()}.\n")
print("Thank you, everyone. That was a great magic show!")
```

#### 4.2 避免缩进错误

Python 根据缩进来判断代码行与程序其他部分的关系。

##### 4.2.1 忘记缩进

位于 for 语句后面且属于循环组成部分的代码行，一定要缩进。

##### 4.2.2 忘记缩进额外的代码行

有时候循环可以正常执行，但结果出人意料。当试图在循环中执行多项操作时，却忘记缩进其中一些操作，就会出现这种情况。

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(f"{magician.title()}, that was great trick!")
print(f"I cant't wait to see your next trick, {magician.title()}.\n")
```

第二个 print 原本需要缩进，但是 Python 发现 for 语句后面有一行代码是缩进的，因此没有报错。最终结果是如下，只有最后一个魔术师收到了消息"I can't wait to see your next trick":

```bash
Alice, that was great trick!
David, that was great trick!
Carolina, that was great trick!
I cant't wait to see your next trick, Carolina.
```

这是一个逻辑错误。

##### 4.2.3 不必要的缩进

如果不小心缩进了无须缩进的代码行 ，Python 将指出这一点：

```python
message = "Hello Python World!"
    print(message)
```

调用 print 无须缩进，因为它并非循环的一部分，因此 Python 将指出这种错误：

```python
  File "hello_world.py", line 2
    print(message)
IndentationError: unexpected indent
```

##### 4.2.4 循环后不必要的缩进

如果不小心缩进了在循环结束后执行的代码，这些代码将在每个循环重复执行。也会造成逻辑错误。

```python

magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(f"{magician.title()}, that was great trick!")
    print(f"I cant't wait to see your next trick, {magician.title()}.\n")
    print("Thank you everyone, that was a great magic show!")
```

由于最后一行也缩进了，它将针对列表中的每位魔术师执行一次：

```python
Alice, that was great trick!
I cant't wait to see your next trick, Alice.

Thank you everyone, that was a great magic show!
David, that was great trick!
I cant't wait to see your next trick, David.

Thank you everyone, that was a great magic show!
Carolina, that was great trick!
I cant't wait to see your next trick, Carolina.

Thank you everyone, that was a great magic show!
```

这也是一个逻辑错误。

##### 4.2.5 遗漏冒号

for 语句末尾的冒号告诉 Python，下一行是循环的第一行。

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians
    print(magician)
```

如果不小心漏了冒号，将导致 Python 语法错误。

```
  File "magicians.py", line 2
    for magician in magicians
                             ^
SyntaxError: expected ':'
```

##### 4.2.6 动手试一试

```python
# 练习4.1：比萨　想出至少三种你喜欢的比萨，将其名称存储在一个列表中，再使用for循环将每种比萨的名称打印出来。
# • 修改这个for循环，使其打印包含比萨名称的句子，而不仅仅是比萨的名称。对于每种比萨都显示一行输出，如下所示。I like pepperoni pizza.
# • 在程序末尾添加一行代码（不包含在for循环中）​，指出你有多喜欢比萨。输出应包含针对每种比萨的消息，还有一个总结性的句子，如下所示。I really love pizza!

# pizzas = ['Margherita', 'Pepperoni', 'BBQ Chicken']
# for pizza in pizzas:
#     print(f"I like {pizza} pizza")
# print("I really love pizza!")

# 练习4.2：动物　想出至少三种有共同特征的动物，将其名称存储在一个列表中，再使用for循环将每种动物的名称打印出来
# • 修改这个程序，使其针对每种动物都打印一个句子，如下所示。A dog would make a great pet.
# • 在程序末尾添加一行代码，指出这些动物的共同之处，如打印下面这样的句子。Any of these animals would make a great pet!
animals = ['dog', 'peg', 'cat', 'bird']
for animal in animals:
    print(f"A {animal.title()} would make a great pet.")
print("Any of these animals would make a great pet!")
```

#### 4.3 创建数值列表

列表非常适合存储数据集合，Python 给我们提供了很多高效的工具处理数值列表。

##### 4.3.1 使用 range()函数

可以像下面这用使用 range() 函数来打印一些列的数：

```python
for value in range(1, 5):
    print(value)
```

上述代码打印 1~4 之间的数字， 不包含 5。在调用 range 函数时，也可以只指定一个参数，这样它将从 0 开始生成对应参数的整数列表。

```python
for value in range(6):
  print(value)
```

上述返回 0~5 （含）之间的整数列表。

##### 4.3.2 使用 range() 创建数值列表

要创建数值列表，可使用 list()函数将 range()函数的结果直接转换成数值列表。如果将 range()函数的结果作为 list()函数的参数，输出将是一个数值列表。

```python
numbers = list(range(1, 6))
print(numbers)
```

创建 1~10 之间整数的平方列表

```python
values = []
for value in range(1, 11):
    values.append(value ** 2)
print(values)
```

##### 4.3.3 对数值列表执行简单的统计计算

最大值、最小值和求和

```python
values = []
for value in range(1, 11):
    values.append(value ** 2)

print(values)
print(f"The max number of values is: {max(values)}")
print(f"The sum of values is: {sum(values)}")
print(f"The min number of values is: {min(values)}")
```

#### 4.3.4 列表推导式

列表推导式将 for 循环和创建新元素的代码合并成一行。

```python
# 列表推导式：将for循环和列表生成结合成一句话，生成列表

squares = [value ** 2 for value in range(2, 11, 2)]
print(squares)
```

#### 4.3.5 动手练一练

```python
# # 练习4.3：数到20　使用一个for循环打印数1～20（含）​。
# values = list(range(1, 21))
# for value in values:
#     print(value)

# # 练习4.4: 100万　创建一个包含数1～1 000 000的列表，再使用一个for循环将这些数打印出来。​（如果输出的时间太长，按Ctrl + C停止输出，或关闭输出窗口。​）
# values = range(1, 1_000_001)
# for value in values:
#     print(value)

# # 练习4.5: 100万求和　创建一个包含数1～1 000 000的列表，再使用min()和max()核实该列表确实是从1开始、到1 000 000结束的。另外，对这个列表调用函数sum()，看看Python将100万个数相加需要多长时间。
# values = range(1, 1_000_001)
# print(min(values))
# print(max(values))
# print(sum(values))

# # 练习4.6：奇数　通过给range()函数指定第三个参数来创建一个列表，其中包含1～20的奇数；再使用一个for循环将这些数打印出来。
# odds = range(1, 20, 1)
# for odd in odds:
#     print(odd)

# # 练习4.7: 3的倍数　创建一个列表，其中包含3～30内能被3整除的数，再使用一个for循环将这个列表中的数打印出来。
# values = range(3, 31, 3)
# for value in values:
#     print(value)

# # 练习4.8：立方　将同一个数乘三次称为立方。例如，在Python中，2的立方用2**3表示。创建一个列表，其中包含前10个整数(1～10)的立方，再使用一个for循环将这些立方数打印出来。
# values = []
# for value in range(1, 11):
#     num = value ** 3
#     values.append(num)
#     print(num)

# # 练习4.9：立方推导式　使用列表推导式生成一个列表，其中包含前10个整数的立方。
# values = [value ** 3 for value in range(1, 11)]
# for value in values:
#     print(value)
```

#### 4.4 使用列表的一部分

在 Python 中，我们可以处理列表的部分元素，在 Python 中列表的部分元素称为切片

##### 4.4.1 切片

要创建切片，可指定要获取切片范围的第一个参数和最后一个参数的索引。与 range 函数相似，Python 在到达指定的第二个索引之前的元素时就停止了。

```python
players = ["charles", "martina", "michael", "florence", "eli"]
# 获取前三个元素
print(players[0: 3])
```

我们可以生成列表的任意子集。

```python
players = ["charles", "martina", "michael", "florence", "eli"]
# 获取第二、三、四索引对应的元素
print(players[1:4])
```

如果没有指定第一个索引，Python 将自动从列表开头开始提取：

```python
players = ["charles", "martina", "michael", "florence", "eli"]
print(players[:4])
```

也可省略第二个索引，Python 将从第一个索引开始，直接到列表的结尾。

```python
players = ["charles", "martina", "michael", "florence", "eli"]
# 将取第三个元素到结尾之间的元素
print(players[2:])
```

参数可以为负数，负数表示从结尾倒数的索引

```python
players = ["charles", "martina", "michael", "florence", "eli"]
# 从倒数第三个开始到结尾之间的元素
print(players[-3:])
```

还可在切片的中括号内指定第三个参数，指定切片在指定范围内的步长，每相隔多少个元素取一个作为切片的元素。

```python
players = ["charles", "martina", "michael", "florence", "eli"]
# 可以指定切片的第三个参数，表示指定范围切片每相隔几个元素取下一个元素
print(players[0::2])

# 输出
# ['charles', 'michael', 'eli']
```

##### 4.4.2 遍历切片

可使用 for 循环遍历切片。

```python
players = ["charles", "martina", "michael", "florence", "eli"]
print("Here are the first three players on my team:")
for player in players[:3]:
    print(player.title())
```

##### 4.4.3 复制列表

要复制列表，可以创建一个包含整个列表的切片，方法是同时省略起始和终止索引（[:]）。

```python
my_foods = ["pizza", "falafel", "carrot cake"]
friend_foods = my_foods[:]

print(f"My favorite foods are: \n{my_foods}\n")
print(f"My friend favorite foods are: \n{friend_foods}")
```

为了核实确实是两个独立的列表，我们在每个列表中添加一个食品：

```python
my_foods = ["pizza", "falafel", "carrot cake"]
friend_foods = my_foods[:]

my_foods.append("cannoli")
friend_foods.append("ice cream")

print(f"My favorite foods are: \n{my_foods}\n")
print(f"My friend favorite foods are: \n{friend_foods}")
```

输出：

```
My favorite foods are:
['pizza', 'falafel', 'carrot cake', 'cannoli']

My friend favorite foods are:
['pizza', 'falafel', 'carrot cake', 'ice cream']
```

##### 4.4.4 动手试一试

```python
# 练习4.10：切片　选择你在本章编写的一个程序，在末尾添加几行代码，以完成如下任务。
# • 打印消息“The first three items in the list are:”​，再使用切片来打印列表的前三个元素。
# • 打印消息“Three items from the middle of the list are:”​，再使用切片来打印列表中间的三个元素。
# • 打印消息“The last three items in the list are:”​，再使用切片来打印列表末尾的三个元素。

available_toppings = ['mushrooms', 'olives', 'green peppers', 'pepperoni', 'pineapple' ]

print(f"The first three items in the list are: {available_toppings[:3]}")
print(f"Three items from the middle of the list are: {available_toppings[2:5]}")
print(f"The last three items in the list are: {available_toppings[-3:]}")


# 练习4.11：你的比萨，我的比萨　在你为练习4.1编写的程序中，创建比萨列表的副本，并将其赋给变量friend_pizzas，再完成如下任务。
# • 在原来的比萨列表中添加一种比萨。
# • 在列表friend_pizzas中添加另一种比萨。
# • 核实有两个不同的列表。为此，打印消息“My favorite pizzas are:”​，再使用一个for循环来打印第一个列表；打印消息“My friend's favorite pizzas are:”​，再使用一个for循环来打印第二个列表。核实新增的比萨被添加到了正确的列表中。


# 练习4.12：使用多个循环　在本节中，为节省篇幅，程序foods.py的每个版本都没有使用for循环来打印列表。请选择一个版本的foods.py，在其中编写两个for循环，将各个食品列表都打印出来。
```

#### 4.5 元组

列表非常适合存储在运行期间可能变化的数据集。列表是可以修改的。然后，有时候需要创建一组不可修改的数据集，元组可满足这种需求。

##### 4.5.1 定义元组

元组看起来和列表很像，但是使用圆括号而不是方括号来标识。定义元组后，就可以使用索引访问其元素，就行访问列表一样。

```python
# 定义一个元组存储矩形的长宽
dimensions = (200, 50)
print(dimensions[0])
print(dimensions[1])
```

下面尝试修改元组的元素：

```python
dimensions[0] = 300
```

如果尝试修改元组中元素的值，将导致 Python 返回类型错误的消息。

```
200
50
Traceback (most recent call last):
  File "dimensions.py", line 5, in <module>
    dimensions[0] = 300
    ~~~~~~~~~~^^^
TypeError: 'tuple' object does not support item assignment
```

:::warning
注意：严格地说，元组是由逗号标识的，圆括号只是让元组看起来更整洁、更清晰。如果你要定义只包含一个元素的元组，必须在这个元素后面加上逗号:

```python
my_t = (3,)
```

创建只包含一个元素的元组通常没有意义，但自动生成的元组有可能只有一个元素。
:::

##### 4.5.2 便利元组中的所有值

像列表一样，也可以使用 for 循环来遍历元组中的所有值：

```python
dimensions = (200, 50)
for dimension in dimensions:
    print(dimension)
```

就像遍历列表时一样，Python 返回元组中的所有元素：

```
200
50
```

##### 4.5.3 修改元组变量

虽然不能修改元组的元素，但是可以给表示元组的变量重新赋值。例如，要修改前述矩形的尺寸，可重新定义整个元组：

```python
dimensions = (200, 50)
print("Original dimensions:")
for dimension in dimensions:
    print(dimension)
dimensions = (400, 100)
print("\nModified dimensions:")
for dimension in dimensions:
    print(dimension)
```

输出：

```
Original dimensions:
200
50

Modified dimensions:
400
100
```

相比列表，元组是更简单的数据结构。如果需要存储一组在程序生命周期内都不可变的集合，就可以使用元组。

##### 4.5.4 动手试一试

```python
# 练习4.13：自助餐　有一家自助式餐馆，只提供5种简单的食品。请想出5种简单的食品，并将其存储在一个元组中。
# • 使用一个for循环将该餐馆提供的5种食品都打印出来。
# • 尝试修改其中的一个元素，核实Python确实会拒绝你这样做。
# • 餐馆调整菜单，替换了两种食品。请编写一行给元组变量赋值的代码，并使用一个for循环将新元组的每个元素都打印出来。

foods = ("Grilled Chicken","Caesar Salad","Spaghetti Bolognese","Beef Burger","French Fries")
print("Original foods:")
for food in foods:
    print(food)

# # 尝试修改食谱，将 烤鸡肉 修改为 红烧鱼
# foods[0] = 'Soy-Braised Fish'

foods = ("Soy-Braised Fish","Rice Noodles","Spaghetti Bolognese","Beef Burger","French Fries")
print("\nImproved foods:")
for food in foods:
    print(food)
```

### 第 5 章 if 语句

在 Python 中，if 语句能够让我们检查程序的当前状态，并采取相应的措施。

#### 5.1 一个简单的示例

```python cars.py
cars = ['audi', 'bmw', 'subaru', 'toyota']

for car in cars:
    if car == 'bmw':
        print(car.upper())
    else:
        print(car.title())
```

#### 5.2 条件测试

每条 if 语句的核心都是一个值为 True 或 False 的表达式，这种表达式称为条件测试。Python 根据条件测试的值是 True 或 False 来决定是否执行 if 语句中的代码。如果条件测试的值为 True，Python 就会执行紧跟在 if 语句后面的代码；否则就会忽略这些代码。

##### 5.2.1 检查是否相等

##### 5.2.2 如何在检查是否相等是忽略大小写

##### 5.2.3 检查是否不等

##### 5.2.4 数值比较

##### 5.2.5 检查多个条件

1. 使用 and 检查多个条件
2. 使用 or 检查多个条件

##### 5.2.6 检查特定的值是否在列表中

##### 5.2.7 检查特定的值是否不在列表中

##### 5.2.8 布尔表达式

##### 5.2.9 动手试一试

```python
# 练习5.1：条件测试　编写一系列条件测试，将每个条件测试以及你对其结果的预测和实际结果都打印出来。你编写的代码应类似于下面这样：
# car = 'subaru'
# print("Is car == 'subaru'? I predict True.")
# print(car == 'subaru')
# print("\nIs car == 'audi'? I predict False.")
# print(car == 'audi')
# • 详细研究实际结果，直到你明白它为何为True或False。
# • 创建至少10个条件测试，而且结果为True和False的条件测试分别至少有5个。

# 练习5.2：更多条件测试　你并非只能创建10个条件测试。如果想尝试做更多的比较，可再编写一些条件测试，并将它们加入conditional_tests.py。对于下面列出的各种情况，至少编写两个条件测试，结果分别为True和False。
# • 检查两个字符串是否相等和不等。
# • 使用lower()方法的条件测试。
# • 涉及相等、不等、大于、小于、大于等于和小于等于的数值比较。
# • 使用关键字and和or的条件测试。
# • 测试特定的值是否在列表中。
# • 测试特定的值是否不在列表中。
```

#### 5.3 if 语句

##### 5.3.1 简单的 if 语句

##### 5.3.2 if-else 语句

##### 5.3.3 if- elif-else 语句

##### 5.3.4 使用多个 elif 代码块

##### 5.3.5 省略 else 代码块

##### 5.3.6 测试多个条件

##### 5.3.7 动手试一试

```python
# 练习5.3：外星人颜色1　假设玩家在游戏中消灭了一个外星人，请创建一个名为alien_color的变量，并将其赋值为'green'、'yellow'或'red'。
# • 编写一条if语句，测试外星人是否是绿色的。如果是，就打印一条消息，指出玩家获得了5分。
# • 编写这个程序的两个版本，上述条件测试在其中的一个版本中通过，在另一个版本中未通过（未通过条件测试时没有输出）​。

# 练习5.4：外星人颜色2　像练习5.3那样设置外星人的颜色，并编写一个if-else结构。
# • 如果外星人是绿色的，就打印一条消息，指出玩家因消灭该外星人获得了5分。
# • 如果外星人不是绿色的，就打印一条消息，指出玩家获得了10分。
# • 编写这个程序的两个版本，在一个版本中将执行if代码块，在另一个版本中将执行else代码块。

# 练习5.5：外星人颜色3　将练习5.4中的if-else结构改为if-elif-else结构。
# • 如果外星人是绿色的，就打印一条消息，指出玩家获得了5分。
# • 如果外星人是黄色的，就打印一条消息，指出玩家获得了10分。
# • 如果外星人是红色的，就打印一条消息，指出玩家获得了15分。
# • 编写这个程序的三个版本，分别在外星人为绿色、黄色和红色时打印一条消息。

# 练习5.6：人生的不同阶段　设置变量age的值，再编写一个if-elif-else结构，根据age的值判断这个人处于人生的哪个阶段。
# • 如果年龄小于2岁，就打印一条消息，指出这个人是婴儿。
# • 如果年龄为2（含）～4岁，就打印一条消息，指出这个人是幼儿。
# • 如果年龄为4（含）～13岁，就打印一条消息，指出这个人是儿童。
# • 如果年龄为13（含）～18岁，就打印一条消息，指出这个人是少年。
# • 如果年龄为18（含）～65岁，就打印一条消息，指出这个人是中青年人。
# • 如果年龄达到65岁，就打印一条消息，指出这个人是老年人。

# 练习5.7：喜欢的水果　创建一个列表，其中包含你喜欢的水果，再编写一系列独立的if语句，检查列表中是否包含特定的水果。
# • 将该列表命名为favorite_fruits，并让其包含三种水果。
# • 编写5条if语句，每条都检查某种水果是否在列表中。如果是，就打印一条像下面这样的消息。You really like bananas!
```

#### 5.4 使用 if 语句处理列表

##### 5.4.1 检查特殊元素

##### 5.4.2 确定列表费控

##### 5.4.3 使用多个列表

##### 5.4.4 动手练一练

```python
# 练习5.8：以特殊方式跟管理员打招呼　创建一个至少包含5个用户名的列表，并且其中一个用户名为'admin'。想象你要编写代码，在每个用户登录网站后都打印一条问候消息。遍历用户名列表，向每个用户打印一条问候消息。
# • 如果用户名为'admin'，就打印一条特殊的问候消息，如下所示。Hello admin, would you like to see a status report?
# • 否则，打印一条普通的问候消息，如下所示。Hello Jaden, thank you for logging in again.

# 练习5.9：处理没有用户的情形　在为练习5.8编写的程序中，添加一条if语句，检查用户名列表是否为空。
# • 如果为空，就打印如下消息。We need to find some users!
# • 删除列表中的所有用户名，确认将打印正确的消息。

# 练习5.10：检查用户名　按照下面的说明编写一个程序，模拟网站如何确保每个用户的用户名都独一无二。
# • 创建一个至少包含5个用户名的列表，并将其命名为current_users。
# • 再创建一个包含5个用户名的列表，将其命名为new_users，并确保其中有一两个用户名也在列表current_users中。
# • 遍历列表new_users，检查其中的每个用户名是否已被使用。如果是，就打印一条消息，指出需要输入别的用户名；否则，打印一条消息，指出这个用户名未被使用。
# • 确保比较时不区分大小写。换句话说，如果用户名'John'已被使用，应拒绝用户名'JOHN'。​（为此，需要创建列表current_users的副本，其中包含当前所有用户名的全小写版本。​）

# 练习5.11：序数　序数表示顺序位置，如1st和2nd。序数大多以th结尾，只有1st、2nd、3rd例外。
# • 在一个列表中存储数字1～9。• 遍历这个列表。
# • 在循环中使用一个if-elif-else结构，打印每个数字对应的序数。输出内容应为"1st 2nd 3rd 4th 5th 6th 7th 8th 9th"，每个序数都独占一行。
```

#### 5.5 设置 if 语句的格式

本章的每个示例都展示了良好的格式设置习惯。在条件测试的格式设置方面，PEP 8 提供的唯一建议是：在诸如==、>=和<=等比较运算符两边各添加一个空格。例如：

```python
if age < 4:
```

要比

```python
if age<4:
```

好。

这样的空格不会影响 Python 对代码的解读，只是让代码阅读起来更容易。

##### 5.5.1 动手练一练

```python
# 练习5.12：设置if语句的格式　审核你在本章编写的程序，确保正确地设置了条件测试的格式。
# 练习5.13：自己的想法　与刚拿起本书时相比，现在你是一名能力更强的程序员了。鉴于你对如何在程序中模拟现实情形有了更深入的认识，可以考虑使用程序来解决一些问题了。随着编程技能不断提高，你可能想解决一些问题，请将这方面的想法记录下来。想想你可能想编写的游戏，想研究的数据集，以及想创建的Web应用程序。
```

### 第 6 章 字典

### 第 7 章 用户输入和 while 循环

### 第 8 章 函数

### 第 9 章 类

### 第 10 章 文件和异常

### 第 11 章 测试代码

## 第二部分 项目

### 项目 1 外星人入侵

### 项目 2 数据可视化

### 项目 3 web 应用程序

```

```
