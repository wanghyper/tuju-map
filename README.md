# TujuMap

图聚前端能力 SDK

## 简介

TujuMap 整合了[百度地图 JSAPI](https://lbsyun.baidu.com/index.php?title=jspopularGL)与[MapvGL](https://mapv.baidu.com/gl/docs/index.html)的能力，对一些功能做了简化封装，方便开发者快速开发。同时提供了图聚平台的一些能力，配合图聚平台，帮助开发者进行二次开发。

## 如何安装

npm 安装

```sh
    npm install tuju-map
```

SDK 提供三种类型脚本的引入方式

1. import 引入

```js
import TujuMap from 'tuju-map';
```

2. require 方式引入

```js
const TujuMap = require('tuju-map');
```

3. 浏览器标签引入

```html
<script src="node_modules/tuju-map/dist/TujuMap.iife.js"></script>
```

## 如何使用

引入 TujuMap 变量后，便可以进行初始化操作，只有进行初始化操作后，才能创建地图。

### init 初始化

开始使用需要进行初始化，加载相关的脚本资源，该方法为异步函数，返回 Promise 对象

```js
TujuMap.init(params: {type?: 'BMapGL', ak: string, authConfig?: any})
```

其中 type 为要加载的基础地图类型，目前只有百度地图，此参数可缺省；ak 为地图脚本加载所需，百度地图需[申请](https://lbsyun.baidu.com/faq/search?id=299&title=677)，authConfig 为图聚接口校验使用，具体请看 API 部分，如不使用，忽略即可。

 更多文档内容请看[文档](https://wanghyper.github.io/tuju-map/)