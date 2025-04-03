# 贡献指南

感谢您对 Freebot 项目的关注！我们欢迎任何形式的贡献，包括但不限于：

- 报告问题
- 提交功能建议
- 提交代码修改
- 改进文档

## 开发流程

1. Fork 项目仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（既不是新增功能，也不是修改bug的代码变动）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat: 添加用户认证功能
fix: 修复登录页面样式问题
docs: 更新 API 文档
```

## 代码规范

- 使用 ESLint 和 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践
- 编写清晰的注释和文档
- 保持代码简洁，遵循 DRY 原则

## 测试

- 所有新功能必须包含测试
- 运行测试：`npm test`
- 确保所有测试通过后再提交

## Pull Request 流程

1. 确保 PR 描述清晰地说明了改动的内容和原因
2. 包含相关的 issue 编号（如果有）
3. 更新相关文档
4. 确保所有 CI 检查通过

## 问题报告

创建 issue 时，请包含：

- 清晰的问题描述
- 复现步骤
- 预期行为
- 实际行为
- 截图（如果适用）
- 环境信息

## 获取帮助

如果您需要帮助，可以：

- 创建 issue
- 查看项目文档
- 联系维护者

再次感谢您的贡献！ 