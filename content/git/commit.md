# git

## commit 规范

```text
<type><(scope)>:空格<subject>
// 空一行
<body>
// 空一行
<footer>
```

###revert

```text
revert: 被还原的commit的header

This reverts commit <hash>.
```

###主版本

```text
feat: 新功能

BREAKING CHANGE:

描述
```

### type

```text
docs: 文档（documentation）
style: 格式（不影响代码运行的变动）
perf: 性能
refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
test: 增加测试
fix: 修补bug,该 commit 将出现在 Change log 之中
feat: 新功能（feature）,该 commit 将出现在 Change log 之中
build: 修改构建或依赖
ci: ci配置或脚本
revert: 被还原的commit的header
```

### subject

```text
commit 的简短描述，不超过50个字符。
以动词开头，使用第一人称现在时，比如change，而不是changed或changes
第一个字母小写
结尾不加句号（.）
```

### body

commit 的详细描述，可以分成多行。

### footer

只用于两种情况。

```text
1.不兼容变动:如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
BREAKING CHANGE:
两个空行
详细描述主版本
2.关联或关闭 Issue:如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
Closes #123, #245, #992
```
