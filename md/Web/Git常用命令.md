#### 新建仓库
+ `git init`
初始化:新建一个git仓库，创建后会自动生成.git文件夹
#### 配置
+ `git config --list`
显示当前git设置
+ `git  git config -e [--global]`
编辑Git配置文件
+ `git config [--global] user.name "[name]"`
   ` git config [--global] user.email "[email address]"`
设置提交代码时的用户信息
#### 添加和删除文件
+ `git add [filename]`
添加文件到暂存区，`git add .`添加所有文件到暂存区
+ `git rm [filename]`
删除文件
#### 代码提交
+ `git commit -m [message]`
提交暂存区文件到仓库区
+ `git commit [file1] [file2] ... -m [message]`
提交暂存区指定文件到仓库区
#### 分支操作
+ `git branch`
列出所有本地分支
+ `git branch -r`
列出所有远程分支
+ `git branch [branchname]`
新建分支,但依然停留在当前分支
+ `git git checkout -b [branch]`
新建分支并切换至该分支
+ `git checkout [branch-name]`
切换分支，并更新工作区
+ `git checkout -`
切换到上一个分支
+ `git merge [branch]`
合并指定分支到当前分支
+ ` git branch -d [branch-name]`
删除指定分支
#### 信息查看
+ ` git status`
 显示有变更的文件
+ `git log`
显示当前分支的版本历史
+ `git commit --stat`
显示commit历史，以及每次commit发生变更的文件
+ `git diff`
显示暂存区与工作区的不同
#### 远程同步
+ `git fetch [remote] `
下载远程仓库的所有变动
+ `git remote -v`
 显示所有远程仓库
+ `git remote show [remote]`
显示某个远程仓库的信息
+ `git remote add [shortname] [url]`
增加一个新的远程仓库，并命名
+ `git pull [remote] [branch]`
取回远程仓库的变化，并与本地分支合并
+ ` git push [remote] [branch]`
上传本地指定分支到远程仓库
+ `git push [remote] --force`
强行推送当前分支到远程仓库，即使有冲突
#### 回退
+ ` git reset [file]`
 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
+ `git reset --hard`
重置暂存区与工作区，与上一次commit保持一致
