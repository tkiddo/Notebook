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

#### 列出目录和文件

Unix中的所有数据都组织成文件。所有文件都组织在目录中。这些目录被组织成称为文件系统的树状结构。

您可以使用ls命令列出目录中所有可用的文件或目录。以下是将ls命令与-l选项一起使用的示例。

````
$ ls -l
total 19621
drwxrwxr-x  2 amrood amrood      4096 Dec 25 09:59 uml
-rw-rw-r--  1 amrood amrood      5341 Dec 25 08:38 uml.jpg
drwxr-xr-x  2 amrood amrood      4096 Feb 15  2006 univ
drwxr-xr-x  2 root   root        4096 Dec  9  2007 urlspedia
-rw-r--r--  1 root   root      276480 Dec  9  2007 urlspedia.tar
drwxr-xr-x  8 root   root        4096 Nov 25  2007 usr
-rwxr-xr-x  1 root   root        3192 Nov 25  2007 webthumb.php
-rw-rw-r--  1 amrood amrood     20480 Nov 25  2007 webthumb.tar
-rw-rw-r--  1 amrood amrood      5654 Aug  9  2007 yourfile.mid
-rw-rw-r--  1 amrood amrood    166255 Aug  9  2007 yourfile.swf
````
在这里，以d .....开头的条目代表目录。例如，uml，univ和urlspedia是目录，其余条目是文件。

#### 你是谁

登录系统后，您可能会想知道：我是谁？ 找出“你是谁”的最简单方法是输入whoami命令-

````
$ whoami
 amrood
````

在您的系统上尝试。此命令列出与当前登录名关联的帐户名。您也可以尝试由我命令谁获取有关您自己的信息。

#### 谁登录了？

有时您可能想知道谁同时登录了计算机。 根据您希望了解其他用户的多少，可以使用三个命令来获取此信息：用户，用户和w。

````
$ users
 amrood bablu qadir

$ who
amrood ttyp0 Oct 8 14:10 (limbo)
bablu  ttyp2 Oct 4 09:08 (calliope)
qadir  ttyp4 Oct 8 12:09 (dent)
````

在系统上尝试使用w命令检查输出。这列出了与登录系统的用户相关联的信息。

#### 注销

完成会话后，您需要注销系统。这是为了确保没有其他人访问您的文件。

只需在命令提示符下键入logout命令，系统就会清理所有内容并断开连接。

#### 系统关机

通过命令行正确关闭Unix系统的最一致的方法是使用以下命令之一-

+ halt:立即关闭系统

+ init 0: 在关闭之前，使用预定义的脚本关闭系统电源以同步和清理系统

+ init 6:通过完全关闭然后重新启动系统来重新启动系统

+ poweroff:通过关闭电源关闭系统

+ reboot:重新启动系统

+ shutdown:关闭系统

通常，您必须是超级用户或root（Unix系统上最特权的帐户）才能关闭系统。但是，在某些独立的或个人拥有的Unix机器上，管理用户（有时是普通用户）可以这样做。




