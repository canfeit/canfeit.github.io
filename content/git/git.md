## 分支管理

- 一键更新所有分支`git fetch`
- 基于当前分支创建本地分支 `git branch 分支名`
- 切换分支 `git checkout 分支名`
- 创建并切换本地分支`git checkout -b 分支名`
- 提交本地分支到远程仓库`git push origin 分支名`
- checkout 远程的分支并切换`git checkout -b 分支名 origin/分支名`
- 本地分支与远程分支关联`git branch –set-upstream 本地新建分支名 origin/远程分支名`
- 查看所有分支列表`git branch -a`
- 删除本地分支 `git branch -d 分支名`
- 删除远程分支 `git push origin :分支名`
- 合并到 master 分支
  ```bash
  git pull dev
  git checkout master
  git merge dev #合并dev分支到当前分支
  ```

## Merge&PR

```bash
# 去GitHub fork
# clone fork过来仓库
git clone https://github.com/canfeit/pms.git
# 编辑修改
# 提交本地修改到github
git add .&&git commit -m "Merge remote-tracking branch 'upstream/master'"&&git push
# 添加源仓库
git remote add upstream https://github.com/DXC/pms.git
# 修改源仓库地址
git remote set-url upstream https://github.com/DXCChina/pms.git
# 删除源仓库
# git remote rm upstream
# 查看远程仓库地址
git remote -v
# 从 upstream 源仓库获取更新
git fetch upstream
# 查看所有分支列表
git branch -a
# 合并源仓库更新到当前分支
git merge upstream/master
# 向源仓库推送更新:在 github.com 发起 pull request
```

## 撤销&清理

- 丢弃所有未暂存修改 `git checkout .`
- 丢弃所有已暂存修改 `git reset --hard`
- 清理未被 git 管理的文件 `git clean -xdf`
- 撤销上一次提交 `git reset --soft HEAD~`
- 丢弃上一次提交及后来的所有修改 `git reset --hard HEAD~`

## 标签管理

- 创建 Tag

  ```bash
  git tag -a v1 -m 'version 1'
  git push origin --tags
  ```

- 删除标签

  ```bash
  git tag -d $(git tag)
  git push origin --delete tag v1
  ```

## 子仓库

```bash
# 添加子模块
git submodule add git@github.com:canfeit/appium-uiautomator2-server.git static/uiautomator2
git submodule add git@github.com:canfeit/minicap.git static/minicap
git submodule add git@github.com:canfeit/minitouch.git static/minitouch
# clone 仓库，包含子模块
git clone --recursive git@github.com:canfeit/testwa.git
# 等同于
git clone git@github.com:canfeit/testwa.git
git submodule update --init --recursive
# 更新子模块
git submodule update --remote --recursive --merge
git push --recurse-submodules=on-demand
```
