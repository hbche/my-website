---
title: 如何将一个Image节点转换成base64编码字符串
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: '编程小技巧'
tags: ['前端', '工具']
date: 2026-06-06
---

最近在学习 markwodn 语法，在编写 markdown 语法指南时，遇到了一个问题，我想写一个
md 教程，其中需要演示 image 的语法，同时需要展示 markdown 渲染后的效果，但
是[commonmark](https://commonmark.org/help/)网站中展示 image 的效果是一张 png 图
片，我想将其转换成 base64 编码字符串，以便在我的 md 中能够使用。于是萌生了一个想
法：`如何将一个Image节点转换成base64编码字符串？`

## 实现方案

### 基于 Canvas 转换

    借助 `canvas` 完成转换，代码如下：

    ```ts
    function transformBase64ByCanvas(img: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.drawImage(img, 0, 0);
        const base64 = canvas.toDataURL('image/png');
        return base64;
    }
    return '';
    }
    ```

### 基于 FileReader 转换

借助 `<input type="file" />` 和 `FileReader` 进行转换。

将图片资源下载到本地，在编写一个上传 demo，在上传控件的 `onChange` 回调中接收图
片，然后借助如下函数完成解析。

```ts
function transformBase64ByInput(img: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    // 创建一个reader用于读取img文件，为后面转换做准备
    const reader = new FileReader();
    reader.onload = function (e) {
      // 返回 base64 字符串（含 data:image/... 前缀）
      resolve(e.target?.result as string);
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(img);
  });
}
```

### 基于 nodejs 的 fs 模块进行转换

借助 nodejs 的 fs 模块，在读取文件时，完成数据转换

```js
const fs = require('fs/promises');
const path = require('path');

function transformBase64ByNode(imageName) {
  const imgPath = path.join(__dirname, imageName);
  return fs.readFile(imgPath, 'base64').then((base64) => {
    return `data:image/png;base64,${base64}`;
  });
}

transformBase64ByNode('markdown.png').then(console.log);
```

## 问题回顾

在尝试各种方案之后，发现方案 1 无法实现，方案 1 的 demo 如下；

```tsx
function ImagePick() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      const base64 = transformBase64ByCanvas(img);
      console.log(base64);
    }
  }, []);

  return (
    <div>
      <img src='https://commonmark.org/help/images/favicon.png' ref={imgRef} />
    </div>
  );
}

export default ImagePick;
```

实际拿到的 base64 是一个空字符串 `data:,`，通过查询发现是因为浏览器加载网络图片
存在跨域问题，浏览器处于安全性考虑，阻止了读取画布的像素内容。可按照如下方式修改
：

```tsx
import { useEffect } from 'react';

function transformBase64ByCanvas(img: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(img, 0, 0);
    const base64 = canvas.toDataURL('image/png');
    return base64;
  }
  return '';
}

function ImagePick() {
  useEffect(() => {
    const image = document.getElementById('myImage') as HTMLImageElement;
    image.crossOrigin = 'Anonymous';
    image.src = 'https://commonmark.org/help/images/favicon.png';
    image.onload = function () {
      const base64 = transformBase64ByCanvas(image);
      console.log(base64);
    };
  }, []);

  return (
    <div>
      <img id='myImage' />
    </div>
  );
}

export default ImagePick;
```

按照上述方法设置 img 元素的 `crossOrigin` 为 `Anonymous` 即可解决跨域问题，就能
正常解析。

## 注意事项

- 跨域图片（如 CDN 图）必须设置 `img.crossOrigin = 'anonymous'` 且服务器支持
  CORS，否则无法画进 canvas。

- 大图转换为 Base64 后体积较大，不建议嵌入大型图片。

- 可以将 `toDataURL()` 传入不同类型参数生成 `image/jpeg`、`image/webp` 等格式。
