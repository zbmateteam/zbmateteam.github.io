# 完美直播弹幕效果主播教程

进入正题之前，先回答2个问题：

* 您是斗鱼，熊猫，全民,哔哩哔哩,板栗主播？
* 您用OBS Studio，Xsplit直播？

如果上面的关键字，你都不熟悉，说明这个教程可能不适合您。

## 为什么要继续往下看？先看直播弹幕效果

下面是直播录像的截图。再说一遍，是*录像*。

主播，你的直播录像能看见水友当时和你说的话么？
 ![](/icon/index/2017-05-17_101439.jpg)
 
屏幕的右侧中部白色字体，是水友的弹幕聊天。效果还可以不？

其实它有很多动画效果，截图看不出来。

## 现行的实现方法？

前提说过了，你正在使用OBS，Xsplit直播。

世面上现在有一种思路，就是给OBS, Xsplit装各种功能的插件，你需要下载，安装，更不用说，很多主播根本不会安装什么插件。

下载的插件，是可能升级的。当插件升级了，主播需要再次下载，安装，维护起来实在是不便。这个过程中还可能丢失掉主播的人性化配置。

## 弹幕效果的更好实现方法

其实官方OBS，自带插件Browsersource，或者叫浏览器插件。是自带的，你不需要安装任何多余的东西。
然后你需要一个网站地址。

### 网页地址URL
[zbmate.com](zbmate.com)提供就提供了这个网页地址


#### 你需要用email注册一个账号

zbmate.com需要用你的账号，记住你的所有个性化设置

##### 登陆zbmate.com

![](/icon/index/ScreenHunter_05_May_17_11.48.jpg)

#### 填入你的直播房间号

zbmate目前支持的直播平台有,填入你的直播房间号

* 斗鱼直播
* 熊猫直播
* 全民直播

![](/icon/index/ScreenHunter_07_May_17_13.32.jpg)

#### 选择你想用的弹幕插件

这里以聊天室插件为例，

![](/icon/index/ScreenHunter_09_May_17_13.43.jpg)

点击保存后，zbmate.com会帮你在网页顶端生成一个很长的网页链接，不用管那么多

#### 点击复制链接

你和zbmate.com的工作已经结束了

### 打开推流直播工具OBS studio

在OBS来源选择自带的BrowserSource

![](/icon/index/2017-05-17_obs.jpg)

#### 添加BrowserSource

这里默认命名为BrowserSource。你可以改名，也可以不改

![](/icon/index/ScreenHunter_10_May_17_14.03.jpg)

#### 修改BrowserSource 网页地址URL

![](/icon/index/ScreenHunter_11_May_17_14.07.jpg)

将zbmate.com提供的超长链接粘贴过来，然后点击确定按钮

![](/icon/index/ScreenHunter_13_May_17_14.32.jpg)

然后效果类似这样

![](/icon/index/ScreenHunter_14_May_17_14.45.jpg)
