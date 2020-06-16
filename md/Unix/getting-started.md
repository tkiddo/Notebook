## 入门

#### Unix是什么？

Unix操作系统是一套连接在计算机和用户的程序。

分配系统资源并协调计算机内部所有细节的计算机程序称为操作系统或者内核。

用户通过一种称之为Shell的程序来与内核进行通信。Shell是一个命令行解释器，它将用户输入的指令转换成一种内核能够理解的语言。

+ Unix最初由AT&T工程师Ken Thompson, Dennis Ritchie, Douglas McIlroy, 和 Joe Ossanna 于1969年在贝尔实验室开发。

+ 市场上有许多Unix的变种版本。例如Solaris Unix, AIX, HP Unix 和 BSD 。Linux也是其中之一，并且可以免费获得。

+ Unix计算机可以同时被多个人使用，因此Unix也被称为多用户系统。

+ 一个用户可以同时运行多个程序，因此Unix是一个多任务环境。

#### Unix体系结构

这是Unix系统的基本框图
![Unix体系结构](https://github.com/justforfunmy/Notebook/blob/master/md/Unix/images/unix_architecture.jpg)

统一所有版本的Unix操作系统的是以下四个基本概念。

+ 内核 -- 内核是操作系统的心脏。它于硬件对大部分诸如内存管理，任务调度和文件管理的任务进行交互。

+ Shell -- Shell是用于处理你的请求的实用程序。当你在终端输入命令，Shell解释这个命令并调用所需的程序。Shell对所有命令使用标准语法。C Shell, Bourne Shell 和 Korn Shell是最著名的Shell，可用于大部分Unix操作系统变种。

+ 命令和工具 -- 您可以在日常生活中使用各种命令和实用工具。例如cp,mv,cat,grep等。有超过250种标准命令和数种通过第三方软件获得的命令。所有命令都带有各种选项。

+ 文件和目录 -- Unix种所有数据都组织成文件。所有的文件然后组织成目录。这些目录进一步组织成一种树形的结构，称为文件系统。

#### 系统启动

当你首次连接Unix系统时，你通常会看到如下提示：

````
login:
````

#### 登录

+ 准备好您的用户名和密码。如果没有，请联系你的系统管理员。

+ 在登录提示符下键入你的用户名，然后按下Enter键。用户名区分大小写，因此你必须确保是与系统管理员的提示一致。

+ 在密码提示符下键入你的密码，然后按下Enter键。密码区分大小写。

+ 如果你提供了正确的用户名和密码，那你将允许进入系统。阅读屏幕上显示的信息和消息，如下所示：

````
login : amrood
amrood's password:
Last login: Sun Jun 14 09:32:32 2009 from 62.61.164.73
$
````

你将看到命令提示符，在其中输入你的命令。例如，你需要键入cal命令来查看日历，就像下面一样：

````
$ cal
     June 2009
Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30
````

#### 更改密码

所有Unix系统都需要密码，以确保你的文件和数据属于你自己，并且系统本身不受黑客和入侵者的危害。按照下列步骤来更改你的密码：

1. 首先，在命令提示符种输入你的密码，如下所示

2. 输入你当前正在使用的原密码

3. 输入新密码。始终保证你的密码足够复杂，以至于没人可以猜到。但是你得记住它。

4. 你必须再次输入新密码来验证密码。

````
$ passwd
Changing password for amrood
(current) Unix password:******
New UNIX password:*******
Retype new UNIX password:*******
passwd: all authentication tokens updated  successfully
````

注意--我们在你输入原密码和新密码时用了星号（*）来展示位置但在系统中不是这样的。当你输入时，不会看到任何字符。






