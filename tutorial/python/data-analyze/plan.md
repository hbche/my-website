---
title: Python 数据分析
description: Python Data Analyze
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['python', 'data']
sidebar_position: 0
last_update:
  date: 2025-06-20
  author: hbche
---

## 🎯 学习目标（数据方向）

1. 掌握 Python 数据分析三大件：**Pandas、Numpy、Matplotlib**
2. 熟悉数据清洗、数据可视化、探索性分析（EDA）
3. 掌握 Jupyter Notebook、Colab 的高效数据探索环境
4. 初步掌握数据建模：回归、分类、聚类、模型评估
5. 能够独立完成一个数据分析或数据建模项目

---

## 🧾 学习路径规划（数据分析方向）

### 📘 第一阶段：数据分析基础（第 1-3 周）

#### 🎯 目标

- 熟练使用 `Pandas`、`NumPy` 进行数据清洗、数据处理
- 理解数据结构（Series、DataFrame）
- 掌握 Jupyter Notebook 的使用

#### 📚 推荐资料

- 《Python for Data Analysis, 2nd Edition》by Wes McKinney（Pandas 作者）
- 中文版：《利用 Python 进行数据分析（第 2 版）》
- [Pandas 官方教程](https://pandas.pydata.org/docs/)
- [Numpy 官方教程](https://numpy.org/learn/)

#### ✅ 练习建议

- 处理 CSV / Excel / JSON 文件
- 对某个真实数据集做：缺失值处理、筛选排序、统计分析、groupby 分组等
- 使用 Kaggle 公开数据集：如 Titanic、生还率分析

---

### 📗 第二阶段：数据可视化 + EDA（第 4-5 周）

#### 🎯 目标

- 掌握数据可视化工具：Matplotlib、Seaborn、Plotly
- 能够使用可视化发现数据规律
- 完成一次完整的 EDA（探索性数据分析）

#### 📚 推荐资料

- [Matplotlib 入门](https://matplotlib.org/stable/tutorials/index.html)
- [Seaborn 官方文档](https://seaborn.pydata.org/)
- [Kaggle：EDA 示例项目](https://www.kaggle.com/code)

#### ✅ 项目练习

- 对泰坦尼克号、Netflix 评分数据等做可视化报告
- 学会使用 `sns.heatmap`、`pairplot`、`boxplot`、`scatter`、`barplot`

---

### 📙 第三阶段：数据建模与机器学习入门（第 6-8 周）

#### 🎯 目标

- 学习常见模型：线性回归、KNN、SVM、决策树、逻辑回归
- 掌握 `scikit-learn` 基础用法
- 熟悉训练 / 验证 /测试的划分及评估指标

#### 📚 推荐资料

- 《Python 机器学习》Sebastian Raschka（或中文译本）
- [scikit-learn 官方文档](https://scikit-learn.org/stable/user_guide.html)
- [Kaggle 微课程：Intro to Machine Learning](https://www.kaggle.com/learn/intro-to-machine-learning)

#### ✅ 项目练习

- 泰坦尼克预测建模（Kaggle 经典入门项目）
- 鸢尾花分类、波士顿房价预测

---

### 📕 第四阶段：综合项目实战（第 9-12 周）

#### 🎯 目标

- 独立完成从数据读取 → 清洗 → 分析 → 建模 → 可视化的完整项目
- 熟练使用 Jupyter 写分析报告
- 尝试使用 `Streamlit` 或 `Dash` 做数据分析 Web 可视化展示

#### 📚 推荐资料

- [Kaggle 实战项目合集](https://www.kaggle.com/datasets)
- [Streamlit 官网](https://streamlit.io/)
- 《Python 数据分析与挖掘实战》

#### ✅ 项目建议

- 北京 PM2.5 数据分析（时间序列 + 可视化）
- 股票历史数据分析（yfinance）
- 二手房价格建模与预测（链家开源数据）

---

## 🛠 推荐工具链

| 工具                          | 用途                     |
| ----------------------------- | ------------------------ |
| Jupyter Notebook / JupyterLab | 数据探索与报告           |
| VS Code + Python 插件         | 通用开发环境             |
| Pandas / Numpy / Scikit-learn | 数据分析与建模核心       |
| Matplotlib / Seaborn / Plotly | 数据可视化               |
| Streamlit / Dash              | 快速构建可交互的数据展示 |
| Kaggle                        | 找数据、练模型、参考代码 |

---

## 📊 可复用学习模板建议

- 📁 项目结构

  ```
  project/
  ├── data/                # 数据文件
  ├── notebooks/           # Jupyter分析文件
  ├── src/                 # 脚本处理代码
  ├── outputs/             # 输出图表、结果
  └── report.md / .ipynb   # 项目报告
  ```

- 📑 报告内容结构

  ```
  1. 数据简介与问题目标
  2. 数据清洗与预处理
  3. 探索性数据分析（EDA）
  4. 建模与模型评估
  5. 总结与下一步计划
  ```
