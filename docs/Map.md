# 图聚地图类

图聚地图类`TujuMap.Map`，使用该类创建一个地图到目标容器，返回 TujuMap.Map 实例。

## 创建地图实例

```js
const map = new TujuMap.Map(container: string, config);
const baseMap = map.baseMap; // 获得基础地图的能力，可以调用基础地图的全量API
```

其中`container`为目标容器，即地图要渲染的 dom 元素，需设置好宽高，config 为初始化所需配置，目前支持以下配置：

```js
interface MapParamas {
    mapOptions?: Record<string, any>; // 单独为基础地图传递的初始化参数
    center?: number[]; // 初始中心点
    zoom?: number; // 初始缩放层级
    showBuilding?: boolean; // 是否显示3D建筑物（仅支持WebGL方式渲染的地图）
    showIndoor?: boolean; // 是否显示室内图
    enableIconClick?: boolean; // 地图poi是否允许点击
    enableKeyboard?: boolean; // 是否启用键盘控制
    enableScrollWheelZoom?: boolean; // 是否启用滚轮缩放
    controls?: {
        cityList?: ControlConfig, // 城市选择控件
        navigation?: ControlConfig, // 3D导航空间
        zoom?: ControlConfig, // 缩放空间
    };
}
// 控件通用参数
interface ControlConfig {
    show?: boolean; // 是否加载
    offset?: [number, number]; // 相对偏移量
    anchor?: number; // 初始化的位置
}
```

> `Map.baseMap`为当前地图的实例，目前为百度地图的实例，可以通过它使用百度地图的全量 API，可以这样认为`this.baseMap = new BMapGL.Map(config)`。

### 关于坐标

为方便使用，SDK 坐标可以直接使用数组形式，例如[116, 38]，第一位为经度，第二位为纬度。

### 关于控件位置

初始化控件时，可提供一个可选参数，其中的 anchor 和 offset 属性共同控制控件在地图上的位置。 anchor 表示控件的停靠位置，即控件停靠在地图的哪个角，变量为全局变量。当地图尺寸发生变化时，控件会根据停靠位置的不同来调整自己的位置。

| anchor 值                | 位置说明                   |
| ------------------------ | -------------------------- |
| BMAP_ANCHOR_TOP_LEFT     | 表示控件定位于地图的左上角 |
| BMAP_ANCHOR_TOP_RIGHT    | 表示控件定位于地图的右上角 |
| BMAP_ANCHOR_BOTTOM_LEFT  | 表示控件定位于地图的左下角 |
| BMAP_ANCHOR_BOTTOM_RIGHT | 表示控件定位于地图的右下角 |

## 地图实例方法

### 地图缩放视角定位

#### 设置缩放层级

`Map.setZoom(zoomLevel: number)`

#### 设置中心点

`Map.setCenter(center: [lng, lat])`

#### 同时设置中心点和缩放层级

`Map.setCenterAndZoom(center: [lng, lat], zoomLevel: number)`

#### 根据给的坐标集合进行定位，目标会以最佳视角定位

`Map.setViewport(Point[])`

### 地图状态

#### 获取缩放层级

`Map.getZoom()`

#### 获取当前地图中心点坐标

`Map.getCenter()`

#### 获取当前地图可视范围

`Map.getBounds()`

#### 经纬度转墨卡托

`Map.lnglatToMercator(lng: number, lat: number)`

#### 墨卡托转经纬度

`Map.mercatorToLnglat(x: number, y: number)`

#### 屏幕像素位置转换为地图坐标

`Map.pixelToPoint(x: number, y: number)`

#### 地图坐标转换为屏幕像素位置

`Map.pointToPixel(lng: number, lat: number)`

### 事件监听

目前会对基础地图的的事件进行转发，可以监听地图事件

#### 添加监听

`Map.addEventListener(eventName, callback)` 或 `Map.on(eventName, callback)`;

#### 事件移除

`Map.removeEventListener(eventName, callback);`

#### 事件列表（[类参考](https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a0b0)）

| 事件          | 参数                                   | 描述                                                                                        |
| :------------ | :------------------------------------- | :------------------------------------------------------------------------------------------ |
| click         | {type, target, latlng, pixel, overlay} | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick                |
| dblclick      | {type, target, pixel, point}           | 鼠标双击地图时会触发此事件                                                                  |
| rightclick    | {type, target, latlng, pixel, overlay} | 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick |
| rightdblclick | {type, target, latlng, pixel, overlay} | 右键双击地图时触发此事件                                                                    |
| maptypechange | {type, target}                         | 地图类型发生变化时触发此事件                                                                |
| mousemove     | {type, target, latlng, pixel, overlay} | 鼠标在地图区域移动过程中触发此事件                                                          |
| mouseover     | {type, target}                         | 鼠标移入地图区域时触发此事件                                                                |
| mouseout      | {type, target}                         | 鼠标移出地图区域时触发此事件                                                                |
| movestart     | {type, target}                         | 地图移动开始时触发此事件                                                                    |
| moving        | {type, target}                         | 地图移动过程中触发此事件                                                                    |
| moveend       | {type, target}                         | 地图移动结束时触发此事件                                                                    |
| zoomstart     | {type, target}                         | 地图更改缩放级别开始时触发触发此事件                                                        |
| zoomend       | {type, target}                         | 地图更改缩放级别结束时触发触发此事件                                                        |
| addoverlay    | {type, target}                         | 当使用 Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件                             |
| addcontrol    | {type, target}                         | 当使用 Map.addControl()方法向地图中添加单个控件时会触发此事件                               |
| removecontrol | {type, target}                         | 当使用 Map.removeControl()方法移除单个控件时会触发此事件                                    |
| removeoverlay | {type, target}                         | 当使用 Map.removeOverlay()方法移除单个覆盖物时会触发此事件                                  |
| clearoverlays | {type, target}                         | 当使用 Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件                            |
| dragstart     | {type, target, pixel, point}           | 开始拖拽地图时触发                                                                          |
| dragging      | {type, target, pixel, point}           | 拖拽地图过程中触发                                                                          |
| dragend       | {type, target, pixel, point}           | 停止拖拽地图时触发                                                                          |
| resize        | {type, target, size}                   |                                                                                             |

### 地图覆盖物

#### 覆盖物绘制

通过实例化的 Map 对象可以直接进行地图绘制点线面等覆盖物，每个函数都会返回绘制后的覆盖物对象，进行后续操作

```ts
// 普通覆盖物
Map.drawMarker(point: Point, config?: BMapGL.MarkerOptions);
Map.drawIcon(point: Point, config: IconOptions)
Map.drawPolyline(point: Point[], config?: BMapGL.PolylineOptions);
Map.drawPolygon(point: Point[], config?: BMapGL.PolygonOptions);
Map.drawCircle(point: Point, radius: number, config?: BMapGL.PolylineOptions & {fillColor: string});
Map.drawLabel(text: string, position: Point, config: {offset?: number[], style?: Record<string, any>} = {});

// 自定义overlay，drawHtml使用的是BMapGL.CustomOverlay，drawCustomOverlay使用的是SDK自己实现的类
Map.drawHtml(point: Point, content: (() => HTMLElement) | HTMLElement, config?: any);
Map.drawCustomOverlay(point: Point, html: HTMLElement | string, style?: any)

// 信息窗
Map.createInfoWindow(content: string | HTMLElement, config?: BMapGL.InfoWindowOptions)
Map.openInfoWindow(infoWindow: BMapGL.InfoWindow, position: Point)
Map. closeInfoWindow()
```

#### 覆盖物方法

目前返回的均为百度地图的覆盖物实例，[类方法地址](https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a3b0)

#### 覆盖物删除

删除指定覆盖物
`Map.removeOverlay(overlay)`
清空地图覆盖物
`Map.clearOverlays()`

#### 覆盖物事件

覆盖物均可通过`addEventListener`和`removeEventlistener`添加和移除事件

#### 事件冒泡阻止

```js
const marker = map.drawMarker([116.404, 39.915]);
marker.addEventListener('click', e => {
    console.log('marker点击', e.target);
    // 阻止事件冒泡
    e.domEvent.stopPropagation();
});
map.addEventListener('click', e => {
    console.log('map点击', e.target);
});
```

### 路径规划

SDK 对百度地图路径规划进行了封装，支持多点查询

#### 步行规划

##### 创建步行规划实例

`Map.createWalkRoute();`

##### 实例方法

`route.search(p1, p2);`
`route.multiSearch([p1, p2, p3, ...]);`

```js
// 创建步行导航实例
const walkRoute1 = map.createWalkRoute();
const start = [116.310791, 40.003419];
const end = [116.386419, 40.003519];
map.drawLabel('起点', start);
map.drawLabel('终点', end);
walkRoute1.search(start, end).then(res => {
    console.log(res);
    if (res) {
        map.drawPolyline(res.path, {strokeColor: 'red'});
    }
});
const middle = [116.345791, 40.003419];
// 创建新的步行导航实例，防止与之前的实例回调冲突
const walkRoute2 = map.createWalkRoute();
map.drawLabel('途径点', middle);
walkRoute2.multiSearch([start, middle, end]).then(res => {
    console.log(res);
    if (res) {
        map.drawPolyline(res.path, {strokeColor: 'green'});
    }
});
```

#### 驾车规划

##### 创建驾车规划示例

`Map.createDrivingRoute()`

##### 实例方法

`route.search(p1, p2);`
`route.multiSearch([p1, p2, p3]);`
