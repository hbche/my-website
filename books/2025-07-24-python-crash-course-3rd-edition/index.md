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

> 注意：严格地说，元组是由逗号标识的，圆括号只是让元组看起来更整洁、更清晰。如果你要定义只包含一个元素的元组，必须在这个元素后面加上逗号:

> ```python
> my_t = (3,)
> ```

> 创建只包含一个元素的元组通常没有意义，但自动生成的元组有可能只有一个元素。

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

```python
car = 'Audi'
car == 'Audi'
# True
```

##### 5.2.2 如何在检查是否相等是忽略大小写

```python
car = 'Audi'
car.lower() == 'audi'
# True
```

##### 5.2.3 检查是否不等

```python
request_topping = 'mushrooms'
if request_topping != 'anchovies':
    print('Hold the anchovies!')
```

##### 5.2.4 数值比较

```python
answer = 17
if answer != 42:
    print("That is not the correct answer. Please try again!")
```

##### 5.2.5 检查多个条件

1. 使用 and 检查多个条件

   ```python
   age_0 = 22
   age_1 = 18
   (age_0 >= 21) and (age_1 >= 21)
   # False
   age_1 = 22
   age_0 >= 21 and age_1 >= 21
   # True
   ```

2. 使用 or 检查多个条件
   ```python
   age_0 = 22
   age_1 = 18
   age_0 >= 21 or age_1 >= 21
   # True
   age_0 = 18
   age_0 >= 21 or age_1 >= 21
   # False
   ```

##### 5.2.6 检查特定的值是否在列表中

```python
requested_toppings = ['mushrooms', 'onions', 'pineapple']
'mushrooms' in requested_toppings
# True
'pepperoni' in requested_toppings
# False
```

##### 5.2.7 检查特定的值是否不在列表中

```python
banned_users = ['andrew', 'carolina', 'david']
user = 'marie'

if user not in banned_users:
    print(f"{user.title()}, you can post a response if you wish.")
```

##### 5.2.8 布尔表达式

```python
game_active = True
can_edit = False
```

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

```python
age = 19
vote = 18
if age >= vote:
    print("You are old enough to vote!")
print("Have you registered to vote yet?")
```

##### 5.3.2 if-else 语句

```python
age = 19
vote = 18
if age >= vote:
    print("You are old enough to vote!")
    print("Have you registered to vote yet?")
else:
    print("Sorry, you are too young to vote.")
    print("Please register to vote as soon as you turn 18!")
```

##### 5.3.3 if- elif-else 语句

游乐场根据年龄段收费：

- 4 岁以下免费。
- 4（含）～ 18 岁收费 25 美元。
- 年满 18 岁收费 40 美元。

```python
age = 12
if age < 4:
    print("Your admission cost is $0.")
elif age < 18:
    print("Your admission cost is $25")
else:
    print("Your admission cost is $40.")
```

优化版：

```python
age = 12
if age < 4:
    price = 0
elif age < 18:
    price = 25
else:
    price = 40
print(f"Your admission cost is ${price}.")
```

##### 5.3.4 使用多个 elif 代码块

修改游乐场收费规则，新增 65 岁以上人员 20$。

```python
age = 12
if age < 4:
    price = 0
elif age < 18:
    price = 25
elif age < 65:
    price = 40
else:
    price = 20
print(f"Your admission cost is ${price}.")
```

##### 5.3.5 省略 else 代码块

Python 没有 要求 `if-elif`结构后面必须有 else 代码结构。有时候使用 elif 逻辑更清晰：

```python
age = 12
if age < 4:
    price = 0
elif age < 18:
    price = 25
elif age < 65:
    price = 40
elif age >= 65:
    price = 20
print(f"Your admission cost is ${price}.")
```

##### 5.3.6 测试多个条件

```python
requested_toppings = ['mushrooms', 'extra_cheese']
if 'mushrooms' in requested_toppings:
    print("Add mushrooms.")
if 'pepperoni' in requested_toppings:
    print("Add pepperoni.")
if 'extra_cheese' in requested_toppings:
    print("Add extra_cheese.")
print("\nFinished making your pizza!")
```

##### 5.3.7 动手试一试

```python
# 练习5.3：外星人颜色1　假设玩家在游戏中消灭了一个外星人，请创建一个名为alien_color的变量，并将其赋值为'green'、'yellow'或'red'。
# • 编写一条if语句，测试外星人是否是绿色的。如果是，就打印一条消息，指出玩家获得了5分。
# • 编写这个程序的两个版本，上述条件测试在其中的一个版本中通过，在另一个版本中未通过（未通过条件测试时没有输出）​。
# alien_color = 'red'
# if alien_color == 'green':
#     print("You get 5")
# elif alien_color == 'yellow':
#     print("You get 10")
# elif alien_color == 'red':
#     print("You get 15")

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

# age = 29
# if age < 2:
#     age_type = 'infant'
# elif age < 4:
#     age_type = 'toddler'
# elif age < 13:
#     age_type = 'child'
# elif age < 18:
#     age_type = 'juvenile'
# elif age < 65:
#     age_type = 'middle-age and young'
# elif age >= 65:
#     age_type = 'old age'
# print(f"You are {age_type}.")

# 练习5.7：喜欢的水果　创建一个列表，其中包含你喜欢的水果，再编写一系列独立的if语句，检查列表中是否包含特定的水果。
# • 将该列表命名为favorite_fruits，并让其包含三种水果。
# • 编写5条if语句，每条都检查某种水果是否在列表中。如果是，就打印一条像下面这样的消息。You really like bananas!

favorite_fruits = ['apple', 'banana', 'pear', 'watermelon', 'lichee', 'peach']
if 'banana' in favorite_fruits:
    print("You really like banana!")
if 'watermelon' in favorite_fruits:
    print(f"You really like {'watermelon'}!")
if 'lichee' in favorite_fruits:
    print("You really like lichee!")
```

#### 5.4 使用 if 语句处理列表

##### 5.4.1 检查特殊元素

```python
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping == 'green peppers':
        print("Sorry, we are out of green peppers right now.")
    else:
        print(f"Add {requested_topping}")
```

##### 5.4.2 确定列表非空

```python
requested_toppings = []
if requested_toppings:
    for requested_topping in requested_toppings:
        print(f"Add {requested_topping}")
else:
    print("Are you sure you want to a plain pizza.")
```

##### 5.4.3 使用多个列表

```python
available_toppings = ['mushrooms', 'olives', 'green peppers', 'pepperoni', 'pineapple', 'extra cheese']

requested_toppings = ['mushrooms', 'french fires', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping not in available_toppings:
        print(f"Sorry, we don't have {requested_topping}")
    else:
        print(f"Add {requested_topping}")
print("\nFinished making your pizza.")
```

##### 5.4.4 动手练一练

```python
# 练习5.8：以特殊方式跟管理员打招呼　创建一个至少包含5个用户名的列表，并且其中一个用户名为'admin'。想象你要编写代码，在每个用户登录网站后都打印一条问候消息。遍历用户名列表，向每个用户打印一条问候消息。
# • 如果用户名为'admin'，就打印一条特殊的问候消息，如下所示。Hello admin, would you like to see a status report?
# • 否则，打印一条普通的问候消息，如下所示。Hello Jaden, thank you for logging in again.


# users = ['admin', 'tom', 'alice', 'bob', 'jack']
# for user in users:
#     if user == 'admin':
#         print("Hello admin, would you like to see a status report?")
#     else:
#         print(f"Hello {user.title()}, thank you for logging in again.")

# 练习5.9：处理没有用户的情形　在为练习5.8编写的程序中，添加一条if语句，检查用户名列表是否为空。
# • 如果为空，就打印如下消息。We need to find some users!
# • 删除列表中的所有用户名，确认将打印正确的消息。

# # users = ['admin', 'tom', 'alice', 'bob', 'jack']
# users = []
# if users:
#     for user in users:
#         if user == 'admin':
#             print("Hello admin, would you like to see a status report?")
#         else:
#             print(f"Hello {user.title()}, thank you for logging in again.")
# else:
#     print("We need to find some users!")

# 练习5.10：检查用户名　按照下面的说明编写一个程序，模拟网站如何确保每个用户的用户名都独一无二。
# • 创建一个至少包含5个用户名的列表，并将其命名为current_users。
# • 再创建一个包含5个用户名的列表，将其命名为new_users，并确保其中有一两个用户名也在列表current_users中。
# • 遍历列表new_users，检查其中的每个用户名是否已被使用。如果是，就打印一条消息，指出需要输入别的用户名；否则，打印一条消息，指出这个用户名未被使用。
# • 确保比较时不区分大小写。换句话说，如果用户名'John'已被使用，应拒绝用户名'JOHN'。​（为此，需要创建列表current_users的副本，其中包含当前所有用户名的全小写版本。​）

# current_users = ['Admin', 'tom', 'alice', 'bob', 'jack']
# # 使用列表推导式将 current_users 转换成对应的全小写列表
# current_users = [user.lower() for user in current_users]
# new_users = ['TOM', 'jackson', 'Alice', 'lucy', 'lulu']

# for new_user in new_users:
#     if new_user.lower() in current_users:
#         print(f"The username {new_user} is already in use, please change it to a different username.")
#     else:
#         print(f"{new_user}, the username is not used.")


# 练习5.11：序数　序数表示顺序位置，如1st和2nd。序数大多以th结尾，只有1st、2nd、3rd例外。
# • 在一个列表中存储数字1～9。• 遍历这个列表。
# • 在循环中使用一个if-elif-else结构，打印每个数字对应的序数。输出内容应为"1st 2nd 3rd 4th 5th 6th 7th 8th 9th"，每个序数都独占一行。

# order_list = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
order_list = list(range(1, 10))
for order in order_list:
    if order == 1:
        print('1st')
    elif order == 2:
        print('2nd')
    elif order == 3:
        print('3rd')
    else:
        print(f"{order}th")
```

#### 5.5 设置 if 语句的格式

本章的每个示例都展示了良好的格式设置习惯。在条件测试的格式设置方面，PEP 8 提供的唯一建议是：在诸如`==`、`>=`和`<=`等比较运算符两边各添加一个空格。例如：

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

#### 6.1 一个简单的字典

```python
alien_0 = {
    "color": 'red',
    'points': 5
}

print(alien_0['color'])
print(alien_0['points'])
```

Python 字典字面量 key 必须使用引号包裹，否则会导致 Python 报错。

```
Traceback (most recent call last):
  File "chapter-06\alien.py", line 3, in <module>
    color: 'red',
    ^^^^^
NameError: name 'color' is not defined
```

没用引号包裹的 key，Python 认为是一个变量。访问也一样，

#### 6.2 使用字典

在 Python 中，字典是一系列键值对。每个键都一个值关联，可以使用键访问与之关联的值。与键相关联的值可以是数值、字符串、列表甚至是字典。事实上，可以将任意 Python 对象用作字典的值。

在 Python 中字典用放在花括号({})中的一系列键值对表示，如前面的示例所在：

```python
aline_0 = {'color': 'green', 'points': 5}
```

键值之间使用冒号分隔，键值对之间使用逗号分隔，在字典中可以存储多少键值对都可以。

##### 6.2.1 访问字典中的值

要获取字典中与键关联的值，可指定字典名并把键放在字典后面的方括号内，如下所示：

```python
alien_0 = {'color': 'green', 'points': 5}
new_points = alien_0['points']
print(f"You just earned {new_points} points!")
```

##### 6.2.2 添加键值对

字典是一种动态结构，可随时在其中添加键值对。要添加键值对，可依次指定字典名、用方括号括起来的键和与键对应的值。

```python
alien_0 = {
    "color": 'red',
    'points': 5
}
print(alien_0)
alien_0['x_position'] = 0
alien_0['y_position'] = 25
print(alien_0)
```

> 字典会保留字典定义时的元素排列顺序。

##### 6.2.3 从创建一个空字典开始

```python
alien_0 = {}
alien_0['color'] = 'red'
alien_0['points'] = 5
print(alien_0)
```

##### 6.2.4 修改字典中的值

要修改字典中的值，可依次指定字典名、用方括号括起来的键和与该键关联的新值。

```python
alien_0 = {
    'color': 'red'
}
print(f"The alien is {alien_0['color']}")
alien_0['color'] = 'yellow'
print(f"The alien is {alien_0['color']}")
```

```python
alien_0 = {
    "x_position": 0,
    'y_position': 25,
    "speed": 'medium'
}
print(f"Original position: {alien_0['x_position']}")
if alien_0['speed'] == 'slow':
    x_increment = 1
elif alien_0['speed'] == 'medium':
    x_increment = 2
else:
    x_increment = 3
alien_0['x_position'] += x_increment
print(f"New position: {alien_0['x_position']}")
```

##### 6.2.5 删除键值对

对于字典中不需要的信息，可使用 `del` 语句将相应的键值对彻底删除。在使用 del 语句时，务必指定字典名和要删除的键。

```python
alien_0 = {
    'color': 'red',
    'points': 5
}
print(alien_0)
del alien_0['points']
print(alien_0)
```

> 被删除的键值对将永远从字典中消失了。

##### 6.2.6 由类似的对象组成的字典

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}
favorite_language = favorite_languages['sarah'].title()
print(f"Sarah's favorite language is {favorite_language}.")
```

##### 6.2.7 使用 get() 来访问值

```python
alien_0 = {
    'color': 'green',
    'speed': 'slow'
}
print(alien_0['points'])
```

这将导致 Python 显示 traceback，指出存在键值错误(KeyError)

```
Traceback (most recent call last):
  File "chapter-06\alien_no_points.py", line 5, in <module>
    print(alien_0['points'])
          ~~~~~~~^^^^^^^^^^
KeyError: 'points'
```

就字典而言，为避免出现这样的错误，可使用 get() 方法在指定的键不存在时返回一个默认值。get()方法的第一个参数用于指定键，是必需要的；第二个参数为当指定的键不存在时要返回的值，是可选的：

```python
alien_0 = {
    'color': 'green',
    'speed': 'slow'
}
print(alien_0.get('points', 'No point value assigned.'))
```

不会引发错误：

```
No point value assigned.
```

如果没有指定可选的默认值，则 get()方法返回 None

如果指定的键有可能不存在，应考虑使用 get()方法，而不要使用方括号表示法。

> 注意：在调用 get()时，如果没有指定第二个参数且指定的键不存在，Python 将返回值 None，这个特殊的值表示没有相应的值。这并非错误，None 只是一个表示所需值不存在的特殊值，第 8 章将介绍它的其他用途。

##### 6.2.8 动手试一试

```python
# 练习6.1：人　使用一个字典来存储一个人的信息，包括名、姓、年龄和居住的城市。该字典应包含键first_name、last_name、age和city。将存储在该字典中的每项信息都打印出来。
# person_info = {
#     'first_name': 'Robin',
#     'last_name': 'Che',
#     'age': 29,
#     'city': 'Wuhan'
# }
# print(person_info)

# 练习6.2：喜欢的数1　使用一个字典来存储一些人喜欢的数。请想出5个人的名字，并将这些名字用作字典中的键。再想出每个人喜欢的一个数，并将这些数作为值存储在字典中。打印每个人的名字和喜欢的数。为了让这个程序更有趣，通过询问朋友确保数据是真实的。
# favorite_nums = {
#     'Jack': 9,
#     'Tom': 5,
#     "Alice": 8,
#     'Lucy': 1,
#     'Bob': 6
# }
# print(f"Jack's favorite number is {favorite_nums['Jack']}")
# print(f"Tom's favorite number is {favorite_nums['Tom']}")
# print(f"Alice's favorite number is {favorite_nums['Alice']}")
# print(f"Lucy's favorite number is {favorite_nums['Lucy']}")
# print(f"Bob's favorite number is {favorite_nums['Bob']}")

# 练习6.3：词汇表1　Python字典可用于模拟现实生活中的字典。为避免混淆，我们将后者称为词汇表。
# • 想出你在前面学过的5个编程术语，将它们用作词汇表中的键，并将它们的含义作为值存储在词汇表中。
# • 以整洁的方式打印每个术语及其含义。为此，既可以先打印术语，在它后面加上一个冒号，再打印其含义；也可以先在一行里打印术语，再使用换行符(\n)插入一个空行，然后在下一行里以缩进的方式打印其含义。
word_list = {
    '==': 'equality operator: returns True if the values of two operands are equal',
    'in': 'membership operator: returns True if a value is found in a sequence (string, list, tuple, dict, set, etc.)',
    'not in': 'negated membership operator: returns True if a value is NOT found in a sequence',
    'and': 'logical AND operator: returns True only if both operands are truthy',
    'or' : 'logical OR operator: returns True if at least one operand is truthy'
}
print(f"The mean of '==' is: {word_list['==']}")
print(f"The mean of 'in' is: {word_list['in']}")
print(f"The mean of 'not in' is: {word_list['not in']}")
print(f"The mean of 'and' is: {word_list['and']}")
print(f"The mean of 'or' is: {word_list['or']}")
```

#### 6.3 遍历字典

##### 6.3.1 遍历所有的键值对

```python
user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi'
}
for key, value in user_0.items():
    print(f"{key}'value is {value}")
```

可使用 for 循环遍历字典，需要声明两个变量，分别存储键值对中的键和值。for 语句的第二部分包含字典名和方法 `items()`，这个方法返回一个键值对列表。接下来使用 for 循环依次将每个键值对赋给指定的两个变量。

重写 favorite_language 示例：

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}
# favorite_language = favorite_languages['sarah'].title()
# print(f"Sarah's favorite language is {favorite_language}.")
for name, language in favorite_languages.items():
    print(f"{name.title()}'s favorite language is {language}")
```

##### 6.3.2 遍历字典中的所有键

在不需要使用字典的值时，`keys()`方法可以只遍历字典的键。

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}

for name in favorite_languages.keys():
    print(name.title())
```

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}
friends = ['phil', 'sarah']

for name in favorite_languages.keys():
    print(f"Hi {name.title()}!")
    if name in friends:
        language = favorite_languages[name].title()
        print(f"\t {name.title()}, I see you love {language}!")
```

##### 6.3.3 按特定的顺序遍历字典中的值

要以一种特定的顺序返回元素，一种方法是在 for 循环中对返回的键进行排序。为此，可使用 `sorted()` 函数来获得按特定顺序排列的键列表的副本；

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}

for name in sorted(favorite_languages.keys()):
    print(f"{name.title()}, thank you for talking the poll.")
```

##### 6.3.4 遍历字典中的所有值

可使用 `values()` 方法返回字典值的列表。

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}
print("The following languages have been mentioned:")
for language in favorite_languages.values():
    print(language.title())
```

输出：

```
The following languages have been mentioned:
Python
C
Rust
Python
```

为剔除重复项，可使用集合 `set()`。集合中的每个元素是独一无二的：

```python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python'
}
print("The following languages have been mentioned:")
for language in set(favorite_languages.values()):
    print(language.title())
```

输出：

```
The following languages have been mentioned:
Python
Rust
C
```

可以使用一对花括号直接创建集合，并在其中使用逗号分隔元素：

```python
languages = {'python', 'rust', 'python', 'c'}
# {'python', 'rust', 'c'}
```

> 集合和字典很容易混淆，因为它们都是用一对花括号定义的。当花括号内没有键值对时，定义的很可能是集合。不同于列表和字典，集合不会以特定的顺序存储元素。

#### 6.3.5 动手练一练

```python
# 练习6.4：词汇表2　现在你知道了如何遍历字典，请整理你为练习6.3编写的代码，将其中的一系列函数调用print()替换为一个遍历字典中键和值的循环。确保该循环正确无误后，再在词汇表中添加5个Python术语。当你再次运行这个程序时，这些新术语及其含义将自动包含在输出中。
# word_list = {
#     '==': 'equality operator: returns True if the values of two operands are equal',
#     'in': 'membership operator: returns True if a value is found in a sequence (string, list, tuple, dict, set, etc.)',
#     'not in': 'negated membership operator: returns True if a value is NOT found in a sequence',
#     'and': 'logical AND operator: returns True only if both operands are truthy',
#     'or' : 'logical OR operator: returns True if at least one operand is truthy'
# }
# for op in word_list.keys():
#     print(f"The mean of '{op}' is: {word_list[op]}")

# 练习6.5：河流　创建一个字典，在其中存储三条河流及其流经的国家。例如，一个键值对可能是'nile': 'egypt'。
# • 使用循环为每条河流打印一条消息，如下所示。The Nile runs through Egypt.
# • 使用循环将该字典中每条河流的名字打印出来。
# • 使用循环将该字典包含的每个国家的名字打印出来。
# rivers = {
#     'Amazon': 'Brazil',      # 亚马孙河流经巴西
#     'Nile': 'Egypt',         # 尼罗河流经埃及
#     'Yangtze': 'China'       # 长江流经中国
# }
# for river, country in rivers.items():
#     print(f"The {river} runs through {country}")
# for river in rivers.keys():
#     print(river)
# for country in set(rivers.values()):
#     print(country)

# 练习6.6：调查　在6.3.1节编写的程序favorite_languages.py中执行以下操作。
# • 创建一个应该会接受调查的人的名单，其中有些人已在字典中，而其他人不在字典中。
# • 遍历这个名单。对于已参与调查的人，打印一条消息表示感谢；对于还未参与调查的人，打印一条邀请参加调查的消息。
# favorite_languages = {
#     'jen': 'python',
#     'sarah': 'c',
#     'edward': 'rust',
#     'phil': 'python'
# }
# current_users = favorite_languages.keys()
# users = ['sarah', 'phil', 'tom', 'alice']
# for user in users:
#     if user in current_users:
#         print(f'Thank you, {user.title()}')
#     else:
#         print(f"Hi {user.title()}, would you want to join?")
```

#### 6.4 嵌套

有时候，需要将多个字典存储在列表中或将列表作为值存储在字典中，这称为嵌套。可以在列表中嵌套字典，在字典中嵌套列表，甚至在字典中嵌套字典。

##### 6.4.1 字典列表

```python
alien_0 = {'color': 'green','points': 5}
alien_1 = {'color': 'yellow','points': 10}
alien_2 = {'color': 'red','points': 15}
aliens = [alien_0, alien_1, alien_2]

for alien in aliens:
    print(alien)
```

```python
# 创建一个用于存储外星人的列表
aliens = []

# 创建30个绿色的外星人
for alien_number in range(30):
    new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'}
    aliens.append(new_alien)

# 显示前5个外星人
for alien in aliens[:5]:
    print(alien)

print("...")

# 显示创建了多少个外星人
print(f"Total number of aliens: {len(aliens)}")
```

```python
# 创建一个用于存储外星人的列表
aliens = []

# 创建30个绿色的外星人
for alien_number in range(30):
    new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'}
    aliens.append(new_alien)

# 修改前三个外星人的颜色、速度、得分
for alien in aliens[:3]:
    if alien['color'] == 'green':
        alien['color'] = 'yellow'
        alien['speed'] = 'medium'
        alien['points'] = 10
    elif alien['color'] == 'red':
        alien['color'] = 'red'
        alien['speed'] = 'fast'
        alien['points'] = 15

# 显示前5个外星人
for alien in aliens[:5]:
    print(alien)
print("...")
```

##### 6.4.2 在字典中存储列表

```python
# 存储顾客所点披萨的信息
pizza = {
    'crust': 'thick',
    'toppings': ['mushrooms', 'extra cheese']
}

# 概述顾客点的披萨
print(f"You ordered a {pizza['crust']}-crust pizza with the following toppings: ")
for topping in pizza['toppings']:
    print(f"\t{topping}")
```

```python
favorite_languages = {
    'jen': ['python', 'rust'],
    'sarah': ['c'],
    'edward': ['rust', 'go'],
    'phil': ['python', 'haskell']
}
for name, languages in favorite_languages.items():
    print(f"{name.title()}'s favorite language are: ")
    for language in languages:
        print(f"\t{language}")
```

> 注意：列表和字典的嵌套层级不应太多。如果嵌套层级比前面的示例多得多，很可能有更简单的解决方案。

##### 6.4.3 在字典中存储字典

```python
users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton'
    },
    'mcurie': {
        'first': 'marie',
        'last': "curie",
        'location': "paris"
    }
}
for username, info in users.items():
    print(f"\nUsername: {username.title()}")
    full_name = f"{info['last']} {info['first']}"
    location = info['location']
    print(f"\tFull name: {full_name.title()}")
    print(f"\tLocation: {location.title()}")
```

##### 6.4.4 动手试一试

```python
# 练习6.7：人们　在为练习6.1编写的程序中，再创建两个表示人的字典，然后将这三个字典都存储在一个名为people的列表中。遍历这个列表，将其中每个人的所有信息都打印出来。
# 练习6.8：宠物　创建多个表示宠物的字典，每个字典都包含宠物的类型及其主人的名字。将这些字典存储在一个名为pets的列表中，再遍历该列表，并将有关每个宠物的所有信息打印出来。
# # 多个宠物字典
# pet_1 = {'type': 'dog',   'owner': 'Alice'}
# pet_2 = {'type': 'cat',   'owner': 'Bob'}
# pet_3 = {'type': 'parrot','owner': 'Carol'}
# pet_4 = {'type': 'hamster','owner': 'David'}

# # 统一放入列表
# pets = [pet_1, pet_2, pet_3, pet_4]
# for pet in pets:
#     print(f"{pet['owner']} has a {pet['type']}")

# 练习6.9：喜欢的地方　创建一个名为favorite_places的字典。在这个字典中，将三个人的名字用作键，并存储每个人喜欢的1～3个地方。为让这个练习更有趣些，让一些朋友说出他们喜欢的几个地方。遍历这个字典，并将其中每个人的名字及其喜欢的地方打印出来。
# favorite_places = {
#     'Alice': ['Kyoto', 'Santorini'],
#     'Bob':   ['New York'],
#     'Carol': ['Paris', 'Rome', 'Bali']
# }
# for name, cities in favorite_places.items():
#     print(f"{name.title()}, your favorite places are:")
#     for city in cities:
#         print(f"\t{city}")

# 练习6.10：喜欢的数2　修改为练习6.2编写的程序，让每个人都可以有多个喜欢的数字，然后将每个人的名字及其喜欢的数打印出来。
# favorite_nums = {
#     'Jack': [9, 8],
#     'Tom': [5],
#     "Alice": [8, 3],
#     'Lucy': [1],
#     'Bob': [6]
# }

# for name, numbers in favorite_nums.items():
#     print(f"{name}'s favorite numbers are:")
#     for num in numbers:
#         print(f"\t{num}")

# 练习6.11：城市　创建一个名为cities的字典，将三个城市名用作键。对于每座城市，都创建一个字典，并在其中包含该城市所属的国家、人口约数以及一个有关该城市的事实。表示每座城市的字典都应包含country、population和fact等键。将每座城市的名字以及相关信息都打印出来。
cities = {
    'Tokyo': {
        'country': 'Japan',
        'population': 37_400_000,        # Greater Tokyo Area, 2023 est.
        'fact': 'The Greater Tokyo Area is the most populous metropolitan region in the world.'
    },
    'New York': {
        'country': 'United States',
        'population': 8_300_000,         # NYC proper, 2023 est.
        'fact': 'New York City is home to the United Nations Headquarters.'
    },
    'Paris': {
        'country': 'France',
        'population': 2_100_000,         # Paris proper, 2023 est.
        'fact': 'Paris is known as the "City of Light" and was one of the first European cities to adopt street lighting.'
    }
}
for city, info in cities.items():
    print(f"{city} is the city of {info['country']}, and the population of {city} is {info['population']}, {info['fact']}")
```

### 第 7 章 用户输入和 while 循环

### 第八章 函数

#### 8.1 定义函数

###### 8.1.1 响函数传递信息

###### 8.1.2 实参和形参

#### 8.2 传递参数

###### 8.2.1 位置实参

```python
# 位置参数
def describe_pet(animal_type, pet_name):
    """打印宠物种类及名称"""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet('dog', 'cola')
describe_pet('hamster', 'harry')
```

1. 多次调用函数
2. 位置实参的顺序很重要

###### 8.2.2 关键字实参

```python
def describe_pet(animal_type, pet_name):
    """打印宠物的种类和名称"""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")
# 关键字参数
describe_pet(pet_name='cola', animal_type='dog')
```

###### 8.2.3 默认值

```python
# 默认值，具有默认值的参数只能放在参数列表的后面
def describe_pet(pet_name, animal_type = 'dog'):
    """描述宠物"""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet('willie')
describe_pet(pet_name='harry', animal_type='hamster') # 仓鼠
```

> 当使用默认值时，必须在形参列表中先列出没有默认值的形参，再列出有默认值的形参。
> 这让 Python 依然能够正确地解读位置实参。

###### 8.2.4 等效的函数调用

鉴于可混合使用位置实参、关键字实参和默认值，通常有多种等效的函数调用方式。

```python
#一条名为Willie的小狗
describe_pet('willie')
describe_pet(pet_name='willie')

#一只名为Harry的仓鼠
describe_pet('harry', 'hamster')
describe_pet(pet_name='harry', animal_type='hamster')
describe_pet(animal_type='hamster', pet_name='harry')
```

###### 8.2.5 避免实参错误

#### 8.3 返回值

在函数中，可以使用 `return` 语句将值返回到调用函数的哪行代码。

###### 8.3.1 返回简单的值

```python
def get_formatted_name(first_name, last_name):
    """返回标准格式的姓名"""
    full_name = f"{first_name} {last_name}"
    return full_name.title()
musician = get_formatted_name("jimi", 'hendrix')
print(musician)
```

###### 8.3.2 让实参变成可选的

有时候，需要让实参变成可选的，以便使用函数的人只在必要时才提供额外的信息。可以使
用默认值来让实参变成可选的。

```python
def get_formatted_name(first_name, medium_name, last_name):
    full_name = f"{first_name} {medium_name} {last_name}"
    return full_name.title()

musician = get_formatted_name('john', 'lee', 'hooker')
print(musician)
```

将上述函数中的 medium_name 变为可选参数

```python
def get_formatted_name(first_name, last_name, medium_name = ''):
    # Python会将非空字符转换成True
    if medium_name:
        full_name = f"{first_name} {medium_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()
musician = get_formatted_name('jimi', 'hendrix')
print(musician)

musician = get_formatted_name('john', 'lee', 'hooker')
print(musician)
```

###### 8.3.3 返回字典

函数可以返回任意类型的值，包括列表和字典等较为复杂的数据结构。

```python
# 定义函数，返回一个字典
def build_person(first_name, last_name):
    """返回一个字典，其中包含一个人的信息"""
    person_info = {
        'first_name': first_name,
        'last_name': last_name
    }
    return person_info
musician = build_person('jimi', 'hendrix')
print(musician)
```

增加可选参数，返回更为丰富的字典。

```python
# 定义age参数有默认值的函数，返回字段
def build_person(first_name, last_name, age = None):
    person_info = {
        'first_name': first_name.title(),
        'last_name': last_name.title()
    }
    if age:
        person_info['age'] = age
    return person_info
musician = build_person('jimi', 'hendrix', 27)
print(musician)
```

可将 None 视为占位符，在条件测试中，None 相等于 False。

###### 8.3.3 结合使用函数和 while 循环

```python
def get_formatted_name(first_name, last_name):
    """返回规范格式的姓名"""
    full_name = f"{first_name} {last_name}"
    return full_name.title()
# 这是一个无限循环！
while True:
    print("Please tell me your name:")
    first_name = input("Input your first name:")
    last_name = input("Input your last name:")
    print(f"{get_formatted_name(first_name, last_name)}")
```

解决无限循环，增加提示语，判断用户输入是否为 q ，从而决定循环是否继续

```python
def get_formatted_name(first_name, last_name):
    """返回规范格式的姓名"""
    full_name = f"{first_name} {last_name}"
    return full_name.title()
while True:
    print("Please tell me your name:")
    print("Enter 'q' at any time to quit.")
    first_name = input("Input your first name:")
    if first_name == 'q':
        break
    last_name = input("Input your last name:")
    if last_name == 'q':
        break
    print(f"{get_formatted_name(first_name, last_name)}")
```

#### 8.4 传递列表

```python
def greet_users(users):
    """向列表中的每个用户发送简单的问候"""
    for user in users:
        message = f"Hello, {user.title()}!"
        print(f"{message}")

users = ['alice', 'lucy', 'sam']

greet_users(users)
```

###### 8.4.1 在函数中修改列表

```python
# 首先创建一个列表，其中包含一些要打印的设计
unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
completed_models = []

# 模拟打印每个设计，直到没有未打印的设计为止
# 打印每个设计后，都将其移到列表 completed_designs 中
while unprinted_designs:
    current_design = unprinted_designs.pop()
    print(f"Printing model: {current_design}")
    completed_models.append(current_design)

print("\nThe following models have been printed:")
for completed_model in completed_models:
    print(completed_model)
```

将上述逻辑拆分成两个函数调用：

```python
def print_models(unprinted_designs, completed_models):
    """模拟打印每个设计，直到没有未打印的设计为止。打印每个设计后，将其移到列表 completed_models 中"""
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        print(f"Printing model: {current_design}")
        completed_models.append(current_design)
    return completed_models

def show_completed_models(completed_models):
    """显示打印好的所有模型"""
    print("\nThe following models have been printed:")
    for model in completed_models:
        print(f"{model}")

unprinted_designs = ['phone case', 'robot pendant', 'dodecahedron']
completed_models = []
print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)
```

###### 8.4.2 禁止函数修改列表

为了防止函数修改原始列表数据，可以在调用函数时，利用列表切片，传递列表的副本进去，避免修改原列表

```python
function_name(list_name[:])
print_models(unprinted_designs[:], completed_models)
```

#### 8.5 传递任意数量的实参

有时候预先不知道函数需要多少个参数，好在 Python 允许函数从调用语句中收集任意数量的实参。

```python
def make_pizza(*toppings):
    """打印顾客点的所有配料"""
    print(toppings)

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')
```

形参名\*toppings 中的星号让 Python 创建一个名为 toppings 的元组，该元组包含函数收到的所有实参。

```python
def make_pizza(*toppings):
    """概述只做pizza的配料"""
    print("\nMaking a pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')
```

###### 8.5.1 结合使用位置实参和任意数量的实参

如果要让函数接受不同类型的实参，必须在函数定义中将接纳任意数量实参的形参放在最后。Python 先匹配位置实参和关键字实参，再将余下的实参都收集在最后一个形参中。

```python
# 结合使用位置参数和任意数量的实参
def make_pizza(size, *toppings):
    print(f"\nMaking a {size} inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

###### 8.5.2 使用任意数量的关键字实参

有时候，需要接受任意数量的实参，但是预先不知道传递给函数的会是什么样的信息。在这种情况下，可将函数编写成能够接受任意数量的键值对-调用语句提供多少就接受多少。

```python
def build_profile(first, last, **user_info):
    """创建一个字典，其中包含我们直到的有关用户的一切"""
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info

user_profile = build_profile('albert', 'einstein', location = 'princeton', field = 'physics')
print(user_profile)
```

参数 \*\*user_info 中的两个星号让 Python 创建一个名为 user_info 的字典，该字典包含函数收到的其他所有名值对。在这个函数中，可以像访问其他字典那样访问 user_info 中的名值对。

#### 8.6 将函数存储在模块中

将函数存储在称为 **模块** 的独立文件中，再将模块导入到主程序。import 语句可以让你在当前运行的程序中使用模块中的代码。

###### 8.6.1 导入整个模模块

要让函数是可导入的，得先创建模块。**模块** 是扩展名为.py 的文件，包含要导入函数的代码。

创建一个 pizza.py 文件，代码如下：

```python
def make_pizza(size, *toppings):
    """概述要制作的披萨"""
    print(f"\nMaking a {size} inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")
```

在同级目录下创建一个 making_pizzas.py 的程序，代码如下：

```python
import pizza

pizza.make_pizza(16, 'pepperoni')
pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

这是一种导入方法：只需要编写一条 import 语句并在其中指定模块名，就可在程序中使用该模块中的所有函数。如果使用这种 import 语句导入名为 module_name.py 的整个模块，就可使用下面的语法来使用其中的任意一个函数：

```python
import module_name
module_name.function_name()
```

###### 8.6.2 导入特定的函数

还可以导入模块中的特定函数：

```python
from module_name import function_name
```

用逗号分隔函数名，可根据需要从模块中导入任意数量的函数：

```python
from module_name import function_0, function_1, function_2
```

上面示例改写如下：

```python
from pizza import make_pizza

make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

###### 8.6.3 使用 as 给函数指定别名

如果要导入的函数名称太长或者与程序中的既有函数名冲突，可指定简短而独一无二的别名：函数的另一个名称，类似外号。关键字 `as` 可在导入函数时给函数指定一个别名：

```python
from pizza import make_pizza as map

map(16, 'pepperoni')
map(12, 'mushrooms', 'green peppers', 'extra cheese')
```

指定别名的语法如下：

```python
from module_name import function_name as function_alias
```

###### 8.6.4 使用 as 给模块指定别名

还可以使用 as 给模块指定别名。

```python
import pizza as p

p.make_pizza(16, 'pepperoni')
p.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

给模块指定别名的语法如下：

```python
import module_name as module_alias
```

###### 8.6.5 导入模块中的所有函数

使用星号运算符 **\*** 可让 Python 导入模块中的所有函数。

```python
from pizza import *

make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

导入模块中所有函数的语法如下：

```python
from module_name import *
```

最佳的做法是，要么只导入使用到的函数，要么导入整个模块并使用点号。

#### 8.7 函数编写指南

1. 函数名只能使用小写字母加下划线，指定描述性名称。
2. 每个函数应该包含简要阐述其功能的注释。
3. 在给函数参数指定默认值时，等号两侧不要留空格；函数调用关键字实参也需要尊选该规则。
   ```python
    def function_name(parameter_0, parameter_1='default value')
    function_name(parameter_1=value_1, parameter_0=value_0)
   ```
4. 如果模块中存在多个函数，函数声明之间使用两行空白行分隔。。
5. 所有 import 语句应该都放在文件开头。唯一的例外是需要在文件开头使用注释来描述整个模块。

###### 8.7.1 动手练一练

```python
# 练习8.15：打印模型　将示例printing_models.py中的函数放在一个名为printing_functions.py的文件中。
# 在printing_models.py的开头编写一条import语句，并修改这个文件以使用导入的函数。


# 练习8.16：导入　选择一个你编写的且只包含一个函数的程序，将这个函数放在另一个文件中。
# 在主程序文件中，使用下述各种方法导入这个函数，再调用它：
# import module_name
# from module_name import function_name
# from module_name import function_name as fn
# import module_name as mn
# from module_name import *

# 练习8.17：函数编写指南　选择你在本章编写的三个程序，确保它们遵循了本节介绍的函数编写指南。
```

### 第 9 章 类

### 第 10 章 文件和异常

### 第 11 章 测试代码

## 第二部分 项目

### 项目 1 外星人入侵

### 项目 2 数据可视化

### 项目 3 web 应用程序

```

```
