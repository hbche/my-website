---
title: 全栈开发学习路线图
description: 全栈开发指南
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['读书笔记', 'nodejs']
date: 2025-06-03
---

# 全栈开发学习路线图（10+年开发经验整理）

## 🧱 阶段一：后端语言与框架

- **选择主流后端语言：**

  - Node.js（Express / NestJS）
  - Java（Spring Boot）
  - Python（FastAPI / Django / Flask）
  - Go（Gin / Gorm）

- **学习方向：**

  - 基础语法、模块系统、异步编程、依赖管理
  - 框架选型对比与最佳实践
  - 实战 CRUD 项目练习（如 RESTful API）

- **全栈组合推荐：**

  - MERN（MongoDB + Express + React + Node）
  - Next.js + NestJS
  - Spring Boot + Vue
  - Django + React

---

## 🧩 阶段二：数据库与 API 设计

- **关系型数据库（SQL）**

  - MySQL / PostgreSQL：掌握表设计、索引、事务、连接查询

- **非关系型数据库（NoSQL）**

  - MongoDB：JSON 文档型数据库，灵活免 schema
  - Redis：缓存、Session 存储

- **API 设计：**

  - RESTful 原则：资源路径、HTTP 方法（GET/POST/PUT/DELETE）
  - OpenAPI / Swagger 文档生成
  - 使用 Postman 测试

- **GraphQL（可选）：**

  - 灵活数据获取，解决 REST 过度/不足获取问题
  - 推荐 Apollo Server/Client 初学

---

## 🔐 阶段三：用户认证与授权

- **认证（Authentication）**

  - JWT：Token 签发、验证、刷新机制
  - Session vs Token 模式对比

- **授权（Authorization）**

  - OAuth2 / OpenID Connect：社交登录、授权码流程
  - RBAC：角色权限管理

- **安全加固：**

  - HTTPS、CORS、XSS/CSRF/Security Headers
  - 数据加密、SQL 注入防护、API 访问控制

---

## 🚀 阶段四：部署与 DevOps

- **Linux 基础**

  - 常用命令：`ls`、`vim`、`grep`、`chmod`、`scp` 等
  - SSH、UFW、环境变量配置

- **Docker 容器化**

  - 概念：镜像 / 容器 / Volume / 网络
  - 编写 Dockerfile 和 docker-compose.yml

- **CI/CD 自动化**

  - GitHub Actions / GitLab CI / Jenkins：构建 + 测试 + 部署
  - 自动化部署流程配置（示例：代码推送后部署到服务器）

- **Nginx 反向代理**

  - 静态资源服务、负载均衡、SSL 配置

- **云服务平台（了解）**

  - AWS / GCP / Azure：EC2、S3、Lambda、RDS
  - Docker 部署 / Kubernetes（K8s）入门

---

## 🏗️ 阶段五：项目结构与架构模式

- **前后端分离架构**

  - 前端使用 React/Vue，后端提供 API 接口
  - 独立部署、跨域通信配置

- **微服务架构（进阶）**

  - 每个服务独立职责、可独立扩展
  - 服务间通信：HTTP / RPC / Message Queue（RabbitMQ/Kafka）

- **Monorepo vs 多仓库**

  - Monorepo：统一管理（Turborepo / Nx）
  - 多仓库：各服务独立管理

- **其他模式**

  - Micro Frontends、BFF（Backend For Frontend）

---

## 🧪 阶段六：实战项目建议

| 项目          | 技术栈示例                                    | 练习重点                         |
| ------------- | --------------------------------------------- | -------------------------------- |
| 博客系统      | React + Express/NestJS + MongoDB/PostgreSQL   | 用户登录、CRUD、权限、评论功能   |
| 电商平台      | Next.js + NestJS + MySQL + Redis              | 商品管理、购物车、支付、后台系统 |
| SaaS 管理后台 | React + Ant Design + Spring Boot + PostgreSQL | 多租户、权限系统、表格图表展示   |
| AI 聊天机器人 | Next.js + FastAPI + OpenAI API                | API 调用、异步处理、上下文存储   |

---

## 🕒 阶段七：学习时间规划（建议）

| 阶段       | 时长     | 内容                                      |
| ---------- | -------- | ----------------------------------------- |
| 后端入门   | 2–3 个月 | Node.js/Java/Python，数据库，完成小项目   |
| API + 授权 | 2 个月   | RESTful 规范，JWT，OAuth2，权限控制       |
| 部署与运维 | 1–2 个月 | Linux、Docker、CI/CD、Nginx、部署至云平台 |
| 架构设计   | 1 个月   | 微服务、前后端分离、仓库模式              |
| 综合实战   | 2–3 个月 | 1\~2 个完整项目，部署上线，撰写技术总结   |

---

## 📚 补充学习建议

- **推荐资源**

  - [Node.js 官方文档](https://nodejs.org/)
  - [Spring Boot 官网](https://spring.io/projects/spring-boot)
  - [FastAPI 官方文档](https://fastapi.tiangolo.com/)
  - [Docker 文档](https://docs.docker.com/)
  - [JWT 指南](https://jwt.io/introduction)

- **练习平台**

  - LeetCode / HackerRank：数据结构与算法
  - Postman：API 调试
  - GitHub：开源项目参考
