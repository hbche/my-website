---
title: 计算机中的字符编码
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: '计算机编码学习记录'
tags: ['编程', '编码', '计算机通识']
date: 2023-10-27
---

计算机字符编码是一种方法，用于将字符（包括字母、数字、符号和控制字符）映射到数字值，以便计算机能够处理和存储文本数据。字符编码通常将每个字符映射到唯一的数字值，以便计算机能够识别和操作文本。以下是一些常见的计算机字符编码：

1. **ASCII 编码（American Standard Code for Information Interchange）：** ASCII 是最早的字符编码标准，它使用 7 位二进制数表示 128 个字符，包括英文字母、数字、标点符号和控制字符。ASCII 编码通常使用一个字节（8 位）来表示字符，其中最高位通常不用于字符表示，而用于奇偶校验。

   <details>
       <summary>
       奇偶校验
       </summary>
       字符的奇偶校验是一种错误检测技术，用于确保传输或存储的字符数据的准确性。这种校验方法通过在字符的二进制表示中添加额外的位来检测和纠正可能的传输错误。通常有两种类型的奇偶校验：奇校验和偶校验。

   1. **奇校验（Odd Parity）：** 在奇校验中，校验位被设置为确保字符的二进制表示中有奇数个"1"位。如果字符的二进制表示中已经有奇数个"1"位，校验位则被设置为"1"，以使整个字符（包括校验位）中有奇数个"1"位。如果字符的二进制表示中有偶数个"1"位，校验位则被设置为"0"，以确保整个字符中有奇数个"1"位。

   例如，考虑字符 "1100101"，它有偶数个"1"位，因此在奇校验中，校验位将被设置为 "1"，以确保整个字符中有奇数个"1"位，变为 "11100101"。

   2. **偶校验（Even Parity）：** 在偶校验中，校验位被设置为确保字符的二进制表示中有偶数个"1"位。如果字符的二进制表示中已经有偶数个"1"位，校验位则被设置为"1"，以使整个字符（包括校验位）中有偶数个"1"位。如果字符的二进制表示中有奇数个"1"位，校验位则被设置为"0"，以确保整个字符中有偶数个"1"位。

   例如，考虑字符 "1100100"，它有偶数个"1"位，因此在偶校验中，校验位将被设置为 "1"，以确保整个字符中有偶数个"1"位，变为 "11100100"。

   奇校验和偶校验通常用于串行通信和存储系统中，以检测和纠正数据传输中的位错误。通过检查校验位，接收方可以确定数据是否在传输过程中发生了错误。如果校验失败，接收方可以请求重新传输数据或采取其他纠正措施，以确保数据的完整性。这种奇偶校验方法是一种简单而有效的错误检测技术，尤其适用于传输或存储较小的数据块。

   </details>

2. **ISO-8859 编码：** ISO-8859 是一系列字符编码标准，每个标准用于支持不同的字符集，例如 ISO-8859-1 用于支持拉丁字母字符集。这些编码标准通常使用 8 位字节来表示字符。

3. **UTF-8 编码（Unicode Transformation Format 8-bit）：** UTF-8 是一种可变长度字符编码，用于表示 Unicode 字符集中的字符。它可以表示几乎所有世界上的字符，并且在处理英文字母等常见字符时非常节省空间。UTF-8 使用 1 到 4 个字节来表示字符，具体取决于字符的 Unicode 码点。

   <details>
       <summary>Unicode 码点</summary>
   Unicode 码点是 Unicode 字符集中的每个字符所分配的唯一数字标识。每个字符都由一个整数值来表示，这个整数值就是 Unicode 码点。Unicode 字符集中的每个字符，包括字母、数字、符号、表情符号等，都有一个唯一的 Unicode 码点，用来标识和区分它们。

   Unicode 码点通常以"U+"（或"U-"）后跟一个或多个十六进制数字表示。例如，拉丁字母 "A" 的 Unicode 码点是 U+0041，希腊字母 "Ω" 的 Unicode 码点是 U+03A9，表情符号 "😀" 的 Unicode 码点是 U+1F600。

   Unicode 字符集包含了数百万个不同的字符，每个字符都有一个唯一的码点，以支持世界上几乎所有的书写系统和符号。Unicode 码点的范围从 U+0000 到 U+10FFFF，因此可以表示广泛的字符集，包括世界各种语言、数学符号、货币符号、表情符号等等。

   通过使用 Unicode 码点，计算机系统能够处理多语言文本和复杂字符集，确保文本在不同系统和应用之间的互操作性，同时减少字符编码和字符集的混淆和冲突。这使得 Unicode 成为全球标准，用于在计算机系统和应用程序中表示文本数据。

   </details>

4. **UTF-16 编码（Unicode Transformation Format 16-bit）：** UTF-16 也用于表示 Unicode 字符，它使用 16 位编码单元来表示大多数字符，但对于一些特殊字符，需要使用 32 位编码单元（代理对）。UTF-16 通常用于 Windows 操作系统和一些编程环境。

5. **UTF-32 编码（Unicode Transformation Format 32-bit）：** UTF-32 使用固定的 32 位编码单元来表示每个字符，因此不涉及可变长度编码。它通常用于某些特殊应用中，以简化文本处理。

这些是一些常见的字符编码标准，每个标准都有其特定的用途和适用性。在文本处理和编程中，了解和正确使用适当的字符编码非常重要，以确保文本数据的正确性和一致性。

<!--truncate-->

## ASCII 编码

ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是一种字符编码标准，最早于 1963 年由美国国家标准协会（ANSI）制定，用于在计算机和通信设备中表示文本和控制字符。ASCII 编码使用 7 位（或 8 位，包括奇偶校验位）来表示每个字符，共定义了 128 个不同的字符，包括控制字符、数字、字母和一些标点符号。

以下是 ASCII 编码的主要特点：

1. **128 个字符：** ASCII 编码定义了 128 个字符，包括控制字符（如换行、回车、制表符）、数字（0-9）、大写字母（A-Z）、小写字母（a-z）和一些标点符号（如句号、逗号、括号等）。

2. **7 位编码：** 最初的 ASCII 标准使用 7 位二进制来表示字符，因此总共有 128 个不同的字符。后来的扩展 ASCII 标准使用 8 位来表示字符，允许更多的字符和符号的定义。

3. **基于英语：** ASCII 编码最初是为英语和英语字符集而设计的，因此对于其他语言的字符支持有限。对于非英语语言和字符集，后来的编码标准如 ISO-8859 和 Unicode 提供了更广泛的支持。

4. **控制字符：** ASCII 编码包括一些控制字符，用于控制终端设备和通信。例如，回车（CR）和换行（LF）字符用于文本的格式化和排版。

5. **扩展 ASCII：** 扩展 ASCII 是基于 ASCII 的扩展版本，使用 8 位编码，允许定义更多字符和符号。不同国家和地区的扩展 ASCII 标准添加了各自的特殊字符。

ASCII 编码在计算机历史中起到了重要作用，但它主要适用于英语和一些西欧语言。随着国际化和多语言计算机应用的发展，Unicode 编码取代了 ASCII，为全球范围内的字符提供了更广泛的支持。Unicode 编码支持几乎所有世界上的字符，并使用 16 位或 32 位编码单元来表示字符，以满足多语言和多字符集的需求。

## ISO-8859 编码

ISO-8859（International Organization for Standardization - ISO 8859）是一系列字符编码标准，旨在支持不同语言和字符集的字符表示。每个 ISO-8859 标准针对特定的字符集和语言提供了一种 8 位编码方案。这意味着每个字符都由一个 8 位二进制数字表示，因此总共有 256 个不同的字符。

以下是一些常见的 ISO-8859 编码标准：

1. **ISO-8859-1（Latin-1）：** ISO-8859-1 用于支持拉丁字母字符集，包括西欧语言如英语、法语、德语、西班牙语和葡萄牙语。它是最早的 ISO-8859 标准，也是 Unicode 的前身之一。

2. **ISO-8859-2：** ISO-8859-2 用于支持中欧字符集，包括捷克、斯洛伐克、波兰、匈牙利、克罗地亚、斯洛文尼亚、罗马尼亚等语言。

3. **ISO-8859-5：** ISO-8859-5 用于支持西里尔字母字符集，包括俄语、乌克兰语、保加利亚语等。

4. **ISO-8859-7：** ISO-8859-7 用于支持希腊字符集。

5. **ISO-8859-15（Latin-9）：** ISO-8859-15 是对 ISO-8859-1 的扩展，增加了欧元符号（€）和一些其他字符，以支持更多的欧洲语言。

这些 ISO-8859 编码标准允许在 8 位字节内表示特定语言或字符集的字符，但它们有限制，不足以涵盖全球所有语言和字符。随着 Unicode 的发展，它已经成为更强大和通用的字符编码标准，用于支持全球范围内的字符集，因此在现代应用程序中，Unicode 编码更为普遍。不过，一些旧的系统和遗留数据仍然可能使用 ISO-8859 编码。

## Unicode 编码

Unicode（统一码、万国码、国际码、UNICODE）是一种字符编码标准，用于表示几乎所有世界上存在的书写系统的字符，包括各种语言、符号、标点符号等。Unicode 的目标是实现字符的标准化表示，以便在不同计算机系统、编程语言和文档中交换和处理文本数据。

以下是关于 Unicode 编码的一些重要信息：

1. **统一编码范围：** Unicode 字符集包括了范围广泛的字符，从基本拉丁字母（例如英语字母）到各种语言的字符、数学符号、表情符号、技术符号和特殊符号。Unicode 目前支持超过 1.1 百万个字符。

2. **编码方式：** Unicode 字符可以使用不同的编码方式进行存储，其中最常见的是 UTF-8、UTF-16 和 UTF-32。这些编码方式使用不同大小的编码单元（字节或字）来表示字符。

3. **UTF-8 编码：** UTF-8 使用可变长度编码单元，其中一个字符可以由 1 到 4 个字节组成，具体取决于字符的 Unicode 码点。UTF-8 编码在存储和传输文本数据时非常节省空间，特别适用于英文字母等常见字符。

4. **UTF-16 编码：** UTF-16 使用 16 位编码单元来表示大多数字符，但对于一些特殊字符，需要使用 32 位编码单元（代理对）。UTF-16 编码广泛用于 Windows 操作系统和一些编程环境中。

5. **UTF-32 编码：** UTF-32 使用固定的 32 位编码单元来表示每个字符，因此不涉及可变长度编码。UTF-32 通常占用更多的存储空间，但在某些情况下，它可以简化文本处理。

Unicode 编码的标准化使跨语言、跨平台、跨文化的文本处理更加可靠和一致。不同的编程语言和操作系统通常提供对 Unicode 的支持，以便开发人员能够处理多语言文本数据。

### UTF-8 编码

UTF-8（Unicode Transformation Format 8-bit）是一种多字节字符编码方式，用于表示 Unicode 字符集中的字符。UTF-8 编码具有以下特点：

1. **可变长度编码：** UTF-8 使用可变长度的编码单元，其中一个字符可以由 1 到 4 个字节组成，具体取决于字符的 Unicode 码点。通常，ASCII 字符（U+0000 到 U+007F）使用 1 个字节表示，而大多数常见的字符使用 2 或 3 个字节，而罕见字符和表情符号使用 4 个字节。

2. **兼容 ASCII：** UTF-8 编码是 ASCII 的超集，这意味着 ASCII 编码的字符在 UTF-8 中保持不变。这使得现有的 ASCII 文本可以无需修改而使用 UTF-8 表示。

3. **宽容性：** UTF-8 编码在存储或传输文本数据时非常节省空间，尤其是在处理主要由 ASCII 字符组成的文本时。此外，UTF-8 对于错误或不完整的数据也具有一定的容忍度，可以检测和纠正一些错误。

4. **全球字符支持：** UTF-8 编码支持 Unicode 字符集中的几乎所有字符，包括世界上各种语言的字母、数学符号、货币符号、表情符号和特殊符号。

5. **字节顺序无关：** 与某些其他 Unicode 编码不同，UTF-8 编码的字节顺序无关。这意味着无论计算机体系结构是大端字节序还是小端字节序，UTF-8 编码的字符都可以正确解释。

UTF-8 编码已经成为一种广泛使用的字符编码标准，特别适用于互联网、计算机操作系统和应用程序中的文本数据。它为处理多语言文本数据提供了便捷和灵活的方式，允许不同语言的字符混合在同一文本中，并在全球范围内实现互操作性。

### UTF-16 编码

UTF-16（Unicode Transformation Format 16-bit）是一种字符编码方案，用于表示 Unicode 字符集中的字符。UTF-16 使用 16 位（2 字节）编码单元来表示大多数字符，但对于某些特殊字符，它也可以使用 32 位编码单元。

UTF-16 编码的主要特点包括：

1. **可变长度编码单元：** UTF-16 使用 16 位编码单元，但对于 Unicode 字符集中的一些字符（如表情符号和一些特殊符号），需要使用两个 16 位编码单元（合计 32 位）来表示。这被称为代理对（surrogate pair）。

2. **大端和小端字节序：** UTF-16 编码可以以不同的字节序（字节排列顺序）表示。UTF-16BE（Big Endian）使用大端字节序，而 UTF-16LE（Little Endian）使用小端字节序。这意味着同一 UTF-16 文本可以以不同的字节序存储。

3. **零扩展：** UTF-16 编码对于大多数常见的字符来说比 UTF-8 编码更浪费空间，因为它总是使用两个字节来表示字符，即使这些字符可以用一个字节表示。这导致了零扩展（leading zeros），其中许多字符的高位字节都是零。

UTF-16 广泛用于 Windows 操作系统和一些编程环境中，特别是在处理文本数据时。不过，需要注意的是，随着 Unicode 字符集的不断扩展，UTF-16 编码也可能需要使用代理对来表示某些字符，这会增加存储空间。另外，需要小心处理字节序，以确保正确解释 UTF-16 编码的数据，特别是在跨平台或多字节序环境中。

### UTF-32 编码

UTF-32（Unicode Transformation Format 32-bit）是一种字符编码方式，用于表示 Unicode 字符集中的字符。与 UTF-8 和 UTF-16 不同，UTF-32 编码使用固定长度的 32 位编码单元来表示每个字符，无论字符的 Unicode 码点如何。

以下是 UTF-32 编码的一些特点：

1. **固定长度编码单元：** UTF-32 使用固定的 32 位（4 字节）编码单元来表示每个字符。这意味着每个字符都占用相同的存储空间，不像 UTF-8 和 UTF-16 那样使用可变长度编码单元。

2. **直接映射：** UTF-32 编码的每个编码单元直接映射到 Unicode 字符集中的一个字符。这意味着 UTF-32 中的每个 32 位编码单元都对应一个 Unicode 码点，从 U+000000 到 U+10FFFF 范围内。

3. **没有字节顺序问题：** 与 UTF-16 不同，UTF-32 编码不存在字节顺序问题。不需要考虑字节序（大端字节序或小端字节序）的影响，因为所有字符都是以相同的编码单元大小（32 位）存储的。

4. **占用空间较多：** 由于每个字符都占用 32 位，UTF-32 编码在存储空间上相对较大，特别是对于文本中包含大量 ASCII 字符的情况，会造成浪费。

UTF-32 编码主要用于某些特殊应用，如某些编程环境中，以简化文本处理和字符串操作。它的主要优点是在处理不同字符和字符集时更加简单和一致，但缺点是占用较多的存储空间，特别是对于英文字母等常见字符。大多数通用应用程序和操作系统更常使用 UTF-8 或 UTF-16，因为它们能够更高效地表示文本数据。

## Base64 编码

Base64 编码是一种用于将二进制数据（如图片、音频文件、二进制文本等）转换为文本数据的编码方法，以便在文本协议中传输或存储二进制数据。Base64 编码将二进制数据转换为包含 64 种不同字符的文本字符串，由字母、数字和一些特殊字符组成。这种编码方法主要有以下特点：

1. **64 个字符集：** Base64 编码使用 64 个不同的字符来表示数据。这些字符通常包括大写字母（A-Z）、小写字母（a-z）、数字（0-9）以及两个特殊字符（通常是"+"和"/"）。不同的实现可能在特殊字符上有所不同。

2. **固定长度输出：** Base64 编码的输出是固定长度的，每 3 个字节的二进制数据被编码为 4 个字符，不足 3 个字节的情况也会生成相应的填充字符。

3. **无损编码：** Base64 编码是一种无损编码，这意味着可以将编码后的数据再次解码为原始的二进制数据，不会丢失信息。

4. **用途广泛：** Base64 编码广泛用于电子邮件、HTTP、XML、数据 URL、JSON 等文本协议和数据格式中，以便在这些格式中传输二进制数据。例如，在电子邮件中，图片附件通常会被 Base64 编码以便嵌入到邮件中。

5. **非加密：** Base64 编码并不加密数据，只是将数据从二进制形式转换为文本形式。编码后的数据仍然可以被读取，但以一种不容易识别的方式表示。

示例：将 ASCII 字符"Hello"进行 Base64 编码，结果为"SGVsbG8="。

Base64 编码是一种简单有效的方式，用于在文本协议中传输二进制数据，但请注意它并不适合用于加密或隐藏数据，因为编码后的数据可以轻松解码为原始二进制数据。
