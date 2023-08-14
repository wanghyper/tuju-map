# 平台地图类

平台地图类为图聚平台图相关逻辑封装而成的类，主要用于渲染图聚平台已经配置的地图图层，获取相关平台数据，进行相关交互逻辑处理，帮助开发者基于平台已有内容快速开发出上层应用，而不用关心平台图层本身的逻辑。
目前主要有以下两个类：

-   `TujuMap.PlatformMap`主要用于控制整体的图层加载、渲染和移除，以及事件交互等逻辑，对内部生成的所有`TujuLayer`进行统一管理。
-   `TujuMap.TujuLayer`对应图层列表里的每一个图层的具体实现，通过该实例能够对单个图层进行操作，可由 PlatformMap 实例的相关的方法直接获取使用。

## 开始使用

### 1. 权限配置

因为要获取图聚平台的数据，在执行 TujuMap.init 初始化函数的时候，需要传入额外的 authConfig 参数进行权限验证，serverUrl 来指定图聚服务的地址，具体方式如下：

```js
// 先初始化，传入额外的authConfig获取图聚平台的权限
await TujuMap.init({
    ak: '**************',
    authConfig: {
        'appAk': '****************',
        'userToken': '**************',
        'timestamp': '**************',
        'sign': '*******************',
    },
    serverUrl: 'ip地址'; // 设置图层请求的平台服务地址
});
```

### 2. 获取参数

目前图层数据都是来自于图聚平台已发布地图内容，未在平台发布地图则获取不到数据。在请求平台数据之前，需要先确认要加载的平台地图，拿到 `mapId`，并在该地图的图聚平台发布管理页面，发布需要展示的图层，拿到发布 ID `releaseId`。

```js
const mapId = 48;
const releaseId = 20230802001;
```

### 3. 创建类实例

拿到`mapId`和`releaseId`之后就可以创建平台地图实例了，调用`load`方法即可发起请求来渲染图层数据：

```js
const map = new TujuMap.Map('container', {
    enableScrollWheelZoom: true,
});
const platformMap = new TujuMap.PlatformMap(map, {mapId, releaseId});
platformMap.load();
```

地图执行`load`函数之后，会先请求已发布的图层列表，根据图层列表去请求相应的图层渲染所需的样式数据和渲染数据，最终可在地图上看到渲染的图层。

## TujuMap.PlatformMap

构造函数

```js
  class PlatfomMap {
        constructor(
            map: TujuMap.Map,
            config: {
                mapId: number;// 平台地图ID
                releaseId: number; // 已发布地图的发布ID
            }
        );
  }

```

### 实例方法

#### PlatformMap.load

```js
load(filter?: ((listItem: LayerListResponse) => boolean) | undefined): Promise<TujuLayer[]>;
```

加载平台地图数据，可以传入一个 filter 函数，来过滤图层列表，比如只加载点图层：

```js
platformMap.load(listItem => listItem.type === 1);
```

#### PlatformMap.getLayerList

获取当前的图层列表数据

```js
getLayerList(): LayerListResponse[];
interface LayerListResponse {
    count: number;
    eyeOn: number;
    gmtCreate: number;
    gmtUpdate: number;
    id: number;
    name: string;
    type: TujuLayerTypes;
}
```

#### PlatformMap.showDetailPanel

展示指定的图层要素详情面板，通过传入一个函数，该函数会接受到请求到的要素详情数据，来生成并返回一个 dom 元素，来自定义详情面板内容，该内容会被挂载到地图的容器上，需要提前处理好布局样式。也可以不返回，直接在 createDom 里处理自己的处理逻辑。

```js
showDetailPanel(data: {
    layerId: number;
    id: number;
}, createDom: (data: any) => HTMLElement | void): Promise<void>
```

示例：

```js
platformMap.showDetailPanel({
    layerId: 99;
    id: 181;
}, detail => {
    const dom = document.createElement('div');
    dom.style.cssText = `
        position: absolute;
        right: 20px;
        top: 20px;
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        z-index: 10;
        width: 350px;
        max-height: 500px;
        overflow-y: auto;
        word-break: break-all;
    `;
    dom.innerText = JSON.stringify(detail);
    return dom;
});
```

#### PlatformMap.onLayerClick

图层要素点击事件回调函数，另外也可以通过监听 Map 的 click 事件，通过 layerItem 属性拿到当前点击的图层要素。

```js
onLayerClick(e: LayerData): void;
```

示例：

```js
const platformMap = new TujuMap.PlatformMap(map, {mapId, releaseId});
platformMap.load().then(() => {
    console.log('platformMap loaded');
});
platformMap.onLayerClick = e => {
    console.log('layerClick', e);
};
map.addEventListener('click', e => {
    console.log('mapCick', e.layerItem);
});
```

#### PlatformMap.closeDetailPanel

关闭通过`showDetailPanel`生成的详情面板。

```js
closeDetailPanel(): void
```

#### PlatformMap.getLayerById

根据图层 ID 获取对应的图聚图层。

```js
getLayerById(layerId: number): TujuLayer | undefined;
```

#### PlatformMap.getLayers

获取当前所有的图聚图层实例。

```js
getLayers(): TujuLayer[];
```

#### PlatformMap.addLayer

添加一个图聚图层。

```js
addLayer(layer: TujuLayer): void;
```

#### PlatformMap.addLayers

以数组形式添加多个图聚图层。

```js
addLayers(layers: TujuLayer[]): void;
```

#### PlatformMap.removeLayer

清除掉指定图聚图层。

```js
removeLayer(layer: TujuLayer): void;
```

#### PlatformMap.clearLayers

清除掉所有图聚图层，会清掉已有图层数据。

```js
clearLayers(): void;
```

#### PlatformMap.boxSearch

对指定的图层进行区域搜索，gridLocation 为多边形的坐标串，具体形式为`'112 48, 113 48, 113 49, 112 49, 112 48'`。

```js
boxSearch(params: {
    gridLocation: string;
    layerIds?: number[];
    pageSize?: number;
    pageNo?: number;
}): Promise<any>;
```

## TujuMap.TujuLayer

TujuLayer 为内部使用的类，在 PlatformMap 在加载图层后可以通过`getLayerById`或者`getLayers`获得，通过此类来对图层进行相关操作。

### 内部属性

```js
class TujuLayer {
    layerId!: number; // 图聚图层id
    mapId: number; // 图层的mapid
    isShow: boolean; // 是否显示
    map: PlatfomMap; // PlatformMap对象
    data: LayerData[]; // 图聚图数据
    layerType: TujuLayerTypes; // 默认为点图层
    styleType: StyleTypes; // 展示的样式类型
    style: any; //  图层样式数据
    layerName: string; // 图层名称
}
enum TujuLayerTypes {
    POINT = 1,
    LINE = 2,
    POLYGON = 3,
}
// 样式类型（目前支持 默认样式：0；分类样式：1；分段样式：2；热力图：3；网格图：4；蜂巢图：5；聚合样式：6）
enum StyleTypes {
    default = 0,
    classify = 1,
    segment = 2,
    heat = 3,
    grid = 4,
    honeycomb = 5,
    cluster = 7,
    migrate = 6,
}
```

### 静态属性

一些图层常用的常量属性挂载到了 TujuLayer 上，可直接通过例如 TujuLayer.LayerTypes.POINT 进行使用。

```js
class TujuLayer {
    // 图聚图层类型，目前只有点线面三个大类
    static LayerTypes = {
        POINT = 1,
        LINE = 2,
        POLYGON = 3,
    };
    // 样式类型点图层可渲染为所有样式类型，线和面只支持渲染为默认和分类分段
    static StyleTypes = {
        default = 0, // 默认样式
        classify = 1,  // 分类样式
        segment = 2, // 分段样式
        heat = 3, // 热力样式
        grid = 4, // 网格样式
        honeycomb = 5, // 蜂窝样式
        cluster = 7, // 聚合样式
    };
    // 字段类型，文字 数字 日期 枚举
    static FieldTypes = {
        TEXT = 1,
        NUMBER = 2,
        DATE = 3,
        ENUM = 4,
    };
}
```

### 实例方法

#### TujuLayer.loadData

加载图层数据，会分别请求样式和地图数据，最终在地图上渲染该图层，地图初始化加载的时候会调用此方法，再次调用该方法可以刷新该图层数据。

```js
loadData(styleType?: StyleTypes): Promise<void>
```

函数支持传入一个当前图层类型支持的样式类型（否则会报错提示），来指定图层需要渲染的样式类型，样式数据会默认去请求上次在平台配置过的数据，如果没有配置则使用本地默认配置。
比如想要将点图层渲染为网格图层，示例如下：

```js
import TujuMap from 'tuju-map';
const {StyleTypes} = TujuMap.TujuLayer;
// .....
tujuLayer.loadData(StyleTypes.grid);
```

#### TujuLayer.getStyle

获取当前图层的样式数据，不同样式类型数据结构不一样，部分内容可通过 setStyle 方法去重新设置，实现样式的渲染更新。

```js
getStyle(): any;
```

#### TujuLayer.setStyle

设置当前图层的样式，通过此方法可以更新图层样式，比如改变颜色、大小、透明度等样式，热力图、网格蜂窝图等特殊图层可以设置样式来改变渲染结果。

```js
setStyle(style: {[key: string]: any}): Promise<void>;
```

-   示例 1： 改变图层颜色

```js
tujuLayer.setStyle({
    shapeColour: '#fff',
});
```

-   示例 2： 改变热力图半径

```js
tujuLayer.setStyle({
    renderingRadius: 40,
});
```

-   示例 3： 改变网格图为点个数统计

```js
tujuLayer.setStyle({
    gridDiameter: 30, // 网格尺寸
    gridDiameterUnits: 2, // 网格单位，1表示公里，2表示像素
    gridStatistics: 2, // 统计类型 1 字段（必须为数值类型） 2 点个数
    labelStatus: 1, // 是否显示统计结果 1 正常 0 禁用
});
```

-   示例 4： 改变网格图为按字段之和进行统计渲染

```js
tujuLayer.setStyle({
    gridDiameter: 30, // 网格单位
    gridDiameterUnits: 2, // 网格单位，1表示公里，2表示像素
    gridStatistics: 1, // 统计类型 1 字段（必须为数值类型） 2 点个数
    // 统计方法
    // 统计类型为点个数时1：计数，统计类型为字段时 2：求和 3：平均值 4：众数 5：最大值 6：最小值
    statisticalMethods: 2,
    labelFieldId: 731, // 字段id
    labelFieldName: '数值', // 字段名称
    labelStatus: 1, // 是否显示统计结果 1 正常 0 禁用
});
```

#### TujuLayer.getLegend

获取图例信息，不同图层样式类型返回结构不一样，目前只有热力图、分类分段、网格蜂窝图返回有数据。

```js
getLegend(): any | undefined;
```

-   热力图返回结构

```js
{
    title: '热力图', // 图例名
    weight: string, // 权重名称
    layerId: number, // 图层ID
    layerName: number, // 图层名称
    // 颜色梯度默认配置，根据此配置生成渐变色带，根据实际数值的占比取相应颜色
    gradient: {
        0.25: 'rgba(89, 233, 179, 1)',
        0.55: 'rgba(182, 243, 147, 1)',
        0.85: 'rgba(254, 255, 140, 1)',
        0.9: 'rgba(217, 29, 28, 1)',
    },
    max: number, // 最大值
    min: number, // 最小值
}
```

-   网格蜂窝返回结构（网格和蜂窝的内部实现逻辑一致，放到一块）

```js
{
    title: '网格图' | '蜂窝图',
    layerId: number,
    layerName: number,
    /**
     * list数组内容意义
     * [left, right, color] -> 区间（left, right]对应颜色color
     * 最左侧和最右侧可能会没有值
    */
    list: [number| '', number | '', string][],
}
```

-   分类返回结构

```js
{
    title: '分类样式',
    list: Array<{
        classifyCount: number; // 该类别的个数
        classifyName: '点13'; // 该分类名
        shapeColour: number; // 该分类显示的颜色
        size: 10; // 大小
    }>,
    layerId: number, // 图层id
    layerName: string, // 图层名称
    fieldName: string, // 分类依据的字段名
}
```

-   分段返回结构

```js
{
    title: '分段样式',
    /**
     * list数组内容意义
     * [left, right, color] -> 区间（left, right]对应颜色color
     * 最左侧和最右侧可能会没有值
    */
    list: [number| '', number | '', string][],
    layerId: number, // 图层id
    layerName: string, // 图层名称
    fieldName: string, // 分段依据的字段名
}
```

#### TujuLayer.show

显示该图层

```js
show(): void;
```

#### TujuLayer.hide

隐藏该图层

```js
hide(): void;
```

#### TujuLayer.flyToViewport

将视角定位到图层，会将该图层下的所有点以最佳层级定位到可视范围内

```js
 flyToViewport(): void;
```

#### TujuLayer.clear

清空该图层，会清除掉整个图层的数据

```js
clear(): void;
```
