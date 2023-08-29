# 瀚冰 知识库

在这里记录我的沧海一粟，信奉聚沙成塔、勤能补拙。

### 目录结构

```
Wiki
├─ 博客
├─ 维基
│    ├─ 基础入门
│    ├─ 程序设计语言
│    ├─ 数据结构与算法
│    ├─ 计算机组成
│    ├─ 计算机网络
│    ├─ 操作系统
│    ├─ 数据库系统
│    ├─ 计算机系统安全
│    ├─ 软件工程
│    └─ 编译原理
├─ 职业
│    ├─ 求职之路
│    ├─ 运维开发工程师
│    └─ 信息安全工程师
├─ 生活
└─ 日志
```

### 初始化

```
$ yarn
```

### 本地启动

```
$ yarn start
```

此命令将启动一个本地服务并在浏览器中打开一个窗口。你所做的任何修改将及时反馈到浏览器页面中，无需重启本地服务。
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 构建

```
$ yarn build
```

此命令将生成静态文件到 `build` 目录，你可以使用静态文件服务器来部署这些文件。
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 部署

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### 致谢

感谢第三方原创作者的无私贡献！

感觉 Docusaurus 项目官方的维护开发！
