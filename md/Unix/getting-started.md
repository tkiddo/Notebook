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







