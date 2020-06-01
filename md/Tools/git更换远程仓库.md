#### git更换远程仓库

1.修改命令

````
git remote origin set-url [url]
````

2.先删后加

````
git remote rm origin
git remote add origin [url]
````

3.直接修改config文件中url值