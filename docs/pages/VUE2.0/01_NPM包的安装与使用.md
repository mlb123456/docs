---
title: npm包的安装与使用
date: 2022-9-14
categories:
 - frontEnd
tags:
 - vue
---  

## 1.1 npm概述  

npm的全称是Node Pakeage Manager, 即node包管理工具。
node的主要模块使用JavaScript编写的，因此npm也就是JavaScript的包管理工具。
通过npm可以安装、共享、分发代码，管理项目依赖关系。目前node.js安装包中已经包含了npm.

## 1.2 npm安装  

+ 安装node.js

npm是同node.js一起安装的包管理工具，要安装npm也就需要安装node.js,
node.js官网：<https://nodejs.org/en/>
下载完成后如不需要更改目录（建议更改一个安装位置，不要装在系统盘）根据提示【Next】按钮即可完成安装；

+ 检验npm是否安装成功以及查看版本  

 打开cmd窗口输入：node -v 可查看node版本，输入npm -v 可查看npm版本号，看到相应的版本号也就表示安装成功；

## 1.3 配置node环境(npm全局安装路径)  

主要配置的环境是npm安装的全局模块所在的路径，以及缓存路径。之所以要配置，是因为后续在全局安装模块时，比如在执行
npm install @vue/cli [-g] ([-g]表示可选参数，g代表全局安装的意思) 安装语句时，默认会装到C盘，占用C盘空间。
详解：<https://www.cnblogs.com/esaybook/p/15926863.html>；

## 1.4 通过npm初始化项目  

安装完npm后，可以利用它初始化一个项目，步骤如下：进入项目所在的文件夹，先择地址栏删除地址，输入cmd按enter打开命令窗口，输入npm命令即可初始化项目；
通过npm初始化项目有自己设置相关参数和使用默认参数两种模式。

+ 自己设置相关参数  
  
输入初始化命令：npm init
主要包括：名称设置、项目版本号、项目描述、项目入口文件、测试命令、上传到GitHub的仓库地址、关键字（便于搜索本项目）、作者、默认许可证。如果需要设置某个选项，则在所需设置选项后输入相应值，然后enter 即可完成当前设置进入下一项的设置。最后输入 y 即可完成项目的创建。

+ 采用默认参数

进入项目根目录打开cmd窗口输入：npm init -y 按enter即可，此时就会采用默认值创建项目。
此时项目中会有一个package.json配置文件，就是前面自己设置的参数信息，
其中参数script在初始化时没有设置，他表示项目运行的脚本信息，是一个对象，里面默认有一个对象test,表示测试开发环境，后面的值表示运行的脚本，开发者我们一般会设置dev或serve去启动项目。

<font color="green" size="3">说明:</font>  

    实际开发中生成的package.json配置文件不会这么简单，还会有dependencies、devDependencies的值，（表示生产环境、开发环境的依赖），表示相关依赖。有了package.json配置文件，要还原项目的依赖，只需在项目根目录输入npm install命令，就会根据package.json的依赖自动安装和维护当前项目所需要的所有依赖项。

## 1.5 安装模块（js库）

初始化项目以后，一般需要安装各种模块（js库），包括本地安装和全局安装。

+ 本地安装模块（js库）  

本地安装就是把js库安装到当前执行安装命令所在的目录下，也就是说，本地安装的js库只有本项目中使用。如：npm install module name[@版本号]。 安装jq: npm install jQuery
安装完成后发现多了 node_modules问价夹和package-lock.json文件。package-lock.json就是在执行npm install命令生成的一个文件。
package-lock.json文件记录了项目名称，具体版本号及其依赖等。
node_modules 文件夹用于存放下载的js库
重新打开package.json文件, 会出现jq的版本号，表示项目依赖于jq, 且为生产模式。

<font color="green" size="3">说明:</font>  

    package.json文件一般不用手动创建，在项目问价夹有node_modules 文件夹，里面有相应的js库，在下载别人的源文件一般看不到node_modules文件，因为这个文件太大，一般别人会先删除后上传，那么下载来的源码就需要根据package.json文件去安装相应的模块（js库），使用npm install即可。

+ 全局安装模块（js库）

如果多个项目需要引用同一个js库，就可以通过全局安装，也就是安装在一个公告的位置（全局安装位置）。
1.通过命令查看全局安装位置：npm root -g
2.npm全局安装js库：npm install module name -g
  例如：全局安装vue npm install vue -g
3.查看全局安装的js库：npm list -g 或 npm ls -g

## 1.6 生产环境和开发环境依赖模块的安装

+ 生产环境依赖模块的安装

如果项目中用到的js库（vue,axios,element ui）在项目最后打包上线后需要用到，就要使用生产环境依赖的安装，语法如下：npm install module name [--save|-S];
--save可以缩写为--s,-S为--save的简写  加上-S或--s后会自动把模块和版本号添加到package.json中的dependencies对象中，简称dep,就是指生产环境依赖。

+ 开发环境依赖模块的安装  

如果项目中用到的js库（只是在开发过程中需要用到语法格式检测的ESLint模块）在项目中最后打包上线的时候不需要用到，就是用开发环境依赖的安装：npm install module name [--save-dev|-D] 
增加了-D参数，安装后会把模块和版本号添加到package.json中的devDependencies对象中，简称dev,就是指开发环境依赖。

## 1.7 CNPM命令安装  

npm命令安装模块是从国外服务器上下载，速度比较慢
所以用cnpm代替：npm install -g cnpm --registry=https://registry.npm.taobao.org ;

## 1.8批量下载模块  

一般从网上下载源码时，没有node_modules文件夹，但会有package.json文件，这时就要根据package.json文件全装所有依赖，这样很麻烦
只需要进入package.json文件所在的目录（项目根目录），打开cmd窗口输入 npm install或cnpm install即可。

## 1.9 其他常用npm命令  

1. 查看本地已安装模块

npm list|ls  
执行此命令如果出现 "UNMET DEPENDENCY" 错误，就要更新为最新依赖，解决方案执行下面：
npm -rf node_modules/   删除已安装的模块
npm cache clean     清楚npm内部缓存
npm install     重新安装
npm list module_name   查看本地安装的指定模块依赖;
2. 查看模块的最新版本  

npm view module_name version  
3. 查看模块的所有版本

npm view module_name versions  
4. 卸载本地模块

npm uninstall module_name  
5. 卸载全局模块

npm uninstall -g module_name
