---
title: Linux常用安装与环境配置
date: '2020-01-02 12:51:58'
type: post
category:
  - linux
  - 构建工具
tag:
  - linux
  - 配置
meta:
  -
    name: description
    content: linux配置
  -
    name: keywords
    content: linux,配置
author: cobainby
poster: http://img1.imgtn.bdimg.com/it/u=3382680421,2553304404&fm=214&gp=0.jpg

---

## linux新建用户权限

   useradd 【用户名】//新建用户名

   passwd  【用户名】//给用户设置密码

![用户](/images/linux/linux1.png)

设置完成新用户后，需要给用户分配权限，因为我们部署系统有时候会用到root权限，所以分配给用户sudo指令

进入root用户，打开sudoers文件

![用户](/images/linux/linux2.png)

先找到如下图所示的一行：

(root ALL=(ALL)ALL)在下面添加我们刚才创建的用户

![用户](/images/linux/linux3.png)

添加完成后退出，因为在只读模式下编辑，可能退出权限不够，使用:wq!强制保存退出；

保存后跳转到创建的普通用户

```javascript
[root@CentOS-7 ～]# su s3d #切换用户到s3d
```

跳转到普通用户下时，使用sudo指令如果不想每次都输密码，那么就用vim编辑一下密码权限。这里最好使用visudo，因为可以检测我们语法是否出错

![用户](/images/linux/linux4.png)

![用户](/images/linux/linux5.png)

## linux下安装lrzsz 

lrzsz是一款在linux里可代替ftp上传和下载的程序

使用方式：

下载 **sz** [找到你要下载的文件]**；**

上传，**rz** 浏览找到你本机要上传的文件；

首先输入rpm -qa|grep lrzsz 查看是否安装了 lrzsz

![用户](/images/linux/linux6.png)

如果没有安装，使用yum -y install lrzsz 安装lrzsz

![用户](/images/linux/linux7.png)

## linux下安装vim

首先输入vim查看当前vim是否安装

![用户](/images/linux/linux8.png)

如果没安装，使用yum -y install vim*  安装vim下的所有安装

![用户](/images/linux/linux9.png)

## linux下安装nginx

在安装nginx前首先得确定环境是否安装，nginx的gzip模块需要zlib库，rewrite模块需要pcre库，ssl模块需要openssl库，

所以首先检查`zlib`、`zlib-devel`、`openssl`、`openssl-devel`、`prce`、`prce-devel`是否安装

![用户](/images/linux/linux10.png)

这里有个坑要注意：

如果缺乏devel，需要额外安装devel包，devel 包主要是供开发用，至少包括以下2个东西:头文件、链接库

如果服务器没联网，提供离线方式，rz拷贝环境所需devel包：

首先查看Linux 的系统版本号

```bash
cat /etc/redhat-release
```

![用户](/images/linux/linux11.png)

下载相应版本的镜像文件

下载地址：http://vault.centos.org/7.2.1511/isos/x86_64/

![用户](/images/linux/linux12.png)

下载下来后打开rpm包，找到自己需要的环境，rz上传到服务器上的文件夹内，我是新建了myPackages，，然后安装安装上传上去的包

```bash
rpm -ivh *.rpm --force –nodeps
```

force慎用

安装rpm包

![用户](/images/linux/linux13.png)

安装成功后可以进行nginx安装了

![用户](/images/linux/linux14.png)

安装nginx：

首先跳转到local文件夹下，使用rz指令上传下载好的nginx软件

![用户](/images/linux/linux15.png)

解压nginx软件包，记得带上sudo指令，否则权限不够

![用户](/images/linux/linux16.png)

解压后安装，

在解压后的目录输入

```bash
./configure make&&make install
```

![用户](/images/linux/linux17.png)

![用户](/images/linux/linux18.png)

至此，nginx安装完毕

![用户](/images/linux/linux19.png)

配置一下开机自启动编辑rc.local,添加nginx启动项

```bash
vim /etc/rc.d/rc.local
```

![用户](/images/linux/linux20.png)

## 安装java

进入 [Oracle 官方网站](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) 下载合适的 JDK 版本，准备安装。
注意：这里需要下载 Linux 版本。

使用rz导入安装包

解压JDK

```bash
tar -zxvf jdk-8u65-linux-x64.tar.gz
```

设置环境变量：

 修改 /etc/profile

```bash
set java environment

JAVA_HOME=/usr/java/jdk1.8.0_65      

JRE_HOME=/usr/java/jdk1.8.0_65/jre     

CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib

PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin

export JAVA_HOME JRE_HOME CLASS_PATH PATH

 

注：这里的JAVA_HOME、JRE_HOME都是按照自己的安装实际目录来配置

让修改生效：source /etc/profile

 

查看java是否安装正确
```



![用户](/images/linux/linux21.png)

## 安装redis

官网下载http://download.redis.io/releases/redis-4.0.9.tar.gz

rz导入压缩包解压

![用户](/images/linux/linux22.png)

安装

![用户](/images/linux/linux23.png)

查看redis是否安装

![用户](/images/linux/linux24.png)

## linux下安装tomcat

首先从rz上传下载的包

![用户](/images/linux/linux25.png)

然后新建目录tomcat

```bash
Mkdir /usr/local/tomcat
```

在tomcat下上传下载好的tomcat包，然后解压

```bash
cd /usr/local/tomcat

tar -zxvf apache-tomcat-8.0.50.tar.gz
```

配置tomcat环境变量：

![用户](/images/linux/linux26.png)

vim打开环境变量配置，在最下方加

```bash
#tomcat
export CATALINA_HOME=/usr/local/tomcat/apache-tomcat-8.5.43
```

保存退出

source /etc/profile使命令生效

![用户](/images/linux/linux27.png)

解压后进入tomcat安装目录bin目录下启动tomcat

![用户](/images/linux/linux29.png)

 启动后输入ip查看  服务器IP：8080

![用户](/images/linux/linux28.png)



