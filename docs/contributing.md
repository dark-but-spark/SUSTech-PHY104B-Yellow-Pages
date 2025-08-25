# 如何贡献

欢迎参与本项目的建设！

## 贡献方式

- 提交 Pull Request
- 提出 Issue
- 优化文档内容

## 本地开发指引

1. **克隆仓库**
   ```bash
   git clone https://github.com/dark-but-spark/SUSTech-PHY104B-Yellow-Pages.git
   cd SUSTech-PHY104B-Yellow-Pages
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **本地启动文档站点**
   ```bash
   npm run docs:dev
   ```
   访问终端输出的本地地址即可预览文档。

4. **构建生产环境静态文件**
   ```bash
   npm run docs:build
   ```

5. **预览构建结果**
   ```bash
   npm run docs:preview
   ```

## 目录结构说明

- `docs/`：文档内容与配置
- `package.json`：项目依赖与脚本
每个实验项目都包含以下文件：
- `*.pdf`：实验讲义
- `README.md`：每个实验项目的汇总文档
- `calculator.ipynb`：实验的计算器（Jupyter Notebook）
- `data.txt`：实验所需数据文件

## 贡献建议

- 遵循已有文档结构，按需补充内容，文档结构尽量不要有中文字符
- 提交前请确保本地预览无误
- 有问题欢迎通过 Issue 反馈

## 贡献流程

1. Fork 本仓库
2. 从dev分支创建新分支（假设分支名为 `feature-branch`）
   ``` bash
   git checkout dev
   git checkout -b feature-branch
   ```
3. 在新的分支中进行修改，增加你所写的实验报告所在仓库文件夹的网址 记得注上你的成绩（当然你也可以分享你写的漂亮的blog文章）
4. 同步本仓库和你fork的仓库(你在修改时 我们也在改 请及时更新)
   ``` bash
   git remote add upstream https://github.com/dark-but-spark/SUSTech-PHY104B-Yellow-Pages.git
   git fetch upstream
   git merge upstream/dev
   ```
5. 将dev分支合并到feature-branch（--no-commit是为了避免merge消息过多，为了防止合并失败，可以在提交前检查）
   ``` bash
   git checkout feature-branch
   git merge dev --no-commit
   ```
6. 解决冲突，测试运行是否有问题
7. 将feature-branch正式合并到dev分支中
   ``` bash
   git checkout dev
   git merge feature-branch 
   # 这里也可以使用 --no-commit 合并后再commit自己的信息
   ```
8. 将修改推送到你fork的仓库
   ``` bash
   git push origin dev
   ```
9. 提交Pull Request
10. 等待审核 恭喜你为项目贡献了代码！