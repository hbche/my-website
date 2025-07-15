---
title: Python Web
description: Python Web
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['python', 'web']
sidebar_position: 0
last_update:
  date: 2025-06-20
  author: hbche
---

## 🎯 学习目标（Web 开发方向）

1. 掌握 Python Web 基础：HTTP 协议、WSGI、路由与请求处理
2. 熟悉 Flask、FastAPI、Django 任意一个主流框架
3. 能实现 RESTful API、用户认证、文件上传等常用功能
4. 理解 Web 工程部署、安全、异步处理等关键点
5. 拥有完整的项目实战经验

---

## 🧾 学习路径规划（Web 开发方向）

### 📘 第一阶段：Web 基础 & Flask 入门（第 1-2 周）

#### 🎯 目标

- 掌握 HTTP 请求/响应机制、路由、模板、表单处理
- 能用 Flask 构建简单网站或 API 服务

#### 📚 推荐资料

- 官方文档：[Flask Docs](https://flask.palletsprojects.com/)
- 《Flask Web 开发实战》作者：李辉
- 教程
  ：[Miguel Grinberg 的 Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)

#### ✅ 实战练习

- 开发博客系统（含注册、登录、文章管理）
- 实现一个 JSON API，返回用户数据

---

### 📗 第二阶段：REST API 实战 & FastAPI（第 3-4 周）

#### 🎯 目标

- 理解 RESTful API 设计规范
- 掌握 FastAPI：基于类型注解的现代高性能框架
- 熟悉依赖注入、Pydantic 数据校验、自动文档生成

#### 📚 推荐资料

- 官方文档：[FastAPI](https://fastapi.tiangolo.com/)
- 视频教程：[FastAPI Full Course](https://www.youtube.com/watch?v=0sOvCWFmrtA)
- 中文博客：[FastAPI 极简教程](https://fastapi.tiangolo.com/zh/tutorial/)

#### ✅ 实战练习

- 实现一个 Todo API：CRUD 接口 + Pydantic 校验
- FastAPI + SQLite 实现用户管理系统

---

### 📙 第三阶段：Django 全栈实战（第 5-7 周）

#### 🎯 目标

- 掌握 Django 的 MVC 模型、ORM、Admin 后台、自带认证系统
- 开发带前后台功能的中型站点
- 掌握模板引擎、Form 表单系统

#### 📚 推荐资料

- 官方文档：[Django Docs](https://docs.djangoproject.com/en/stable/)
- 《Django By Example》
- B 站教程
  ：[Django 博客系统实战项目](https://www.bilibili.com/video/BV1PJ411d7Ys)

#### ✅ 实战练习

- 博客系统 + 评论 + 后台管理
- 二手交易平台（商品发布、分类、搜索、下单）

---

### 📕 第四阶段：Web 工程实践 & 项目部署（第 8-10 周）

#### 🎯 目标

- 学习部署与运行：Gunicorn、uvicorn、Nginx、Docker
- 熟悉认证机制（JWT、OAuth2）
- 掌握异步编程（asyncio）、WebSocket

#### 📚 推荐资料

- 《Python 高级编程》异步与协程章节
- [Full Stack FastAPI Postgres Cookiecutter](https://github.com/tiangolo/full-stack-fastapi-postgresql)
- [RealWorld 示例项目](https://github.com/gothinkster/realworld)

#### ✅ 项目实战

- Chat API with FastAPI + WebSocket（聊天室）
- 使用 Gunicorn + Nginx + Docker 部署 FastAPI 项目

---

## 🛠 工具链推荐（Web 方向）

| 工具                                   | 用途                             |
| -------------------------------------- | -------------------------------- |
| Flask / FastAPI / Django               | Web 框架                         |
| SQLAlchemy / Tortoise ORM / Django ORM | 数据库操作                       |
| Pydantic                               | 数据校验和序列化                 |
| PostgreSQL / MySQL / SQLite            | 数据库                           |
| Docker / Gunicorn / Uvicorn            | 容器化与部署                     |
| Alembic                                | 数据库迁移                       |
| httpx / requests                       | HTTP 客户端                      |
| Pytest                                 | 测试工具                         |
| Swagger / ReDoc                        | API 文档自动生成（FastAPI 内置） |

---

## 📊 项目实战清单（推荐逐个完成）

| 项目名称         | 技术栈                          | 关键点                            |
| ---------------- | ------------------------------- | --------------------------------- |
| 博客系统         | Flask + SQLite                  | 登录注册、文章发布、模板          |
| 用户管理 API     | FastAPI + Pydantic + PostgreSQL | JWT 认证、分页、文档              |
| 商品商城         | Django + DRF                    | 多表关系、后台管理、支付模拟      |
| 实时聊天室       | FastAPI + WebSocket + Redis     | 异步编程、长连接                  |
| 数据接口聚合平台 | FastAPI + Celery                | 调度任务、缓存、异步              |
| Docker 化部署    | 任意项目                        | Gunicorn + Nginx + Docker Compose |

---

## 📅 进阶学习计划（示例周表）

| 周次      | 学习目标               | 项目实践                     |
| --------- | ---------------------- | ---------------------------- |
| 第 1-2 周 | Flask 基础 + 博客系统  | 路由、模板、表单             |
| 第 3-4 周 | FastAPI + API 开发规范 | Todo API、JWT 登录           |
| 第 5-7 周 | Django 全栈 + ORM      | 博客系统或电商平台           |
| 第 8-9 周 | 异步、WebSocket、部署  | Chat App                     |
| 第 10 周  | 容器化部署             | Docker 打包部署 FastAPI 项目 |

---

## 📌 小贴士

- 使用 [Postman](https://www.postman.com/) 或 [httpie](https://httpie.io/) 测试
  API
- 关注 GitHub 上开源项目学习架构，例如：

  - [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django)
  - [fastapi-realworld-example-app](https://github.com/nsidnev/fastapi-realworld-example-app)

- 如果你会 React 或 Vue，可尝试前后端分离开发（FastAPI + React/Vue）
