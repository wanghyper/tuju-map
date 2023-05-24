# MapvGL 图层封装

TujuMap 对 MapgGL 可视化库做了封装，沿用之前的配置参数，对于数据输入结构做了简化，整体配置不变。附[MapvGL 文档](https://lbsyun.baidu.com/solutions/mapvdata)

## 图层管理器 TujuMap.Viewer

使用图层渲染前需要先创建一个 Viewer 示例，用于添加和管理 layer 示例，map 为必传项，对应 TujuMap.Map 实例。

```js
const viewer = new TujuMap.Viewer({map});
```

### Viewer 实例方法

-   添加可视化图层
    `viewer.add(Layer)`
-   删除对应的可视化图层
    `viewer.remove(Layer)`
-   删除所有可视化图层
    `viewer.clear()`
-   返回所有可视化图层
    `viewer.getAll()`
-   销毁实例
    `viewer.destroy()`

示例：创建一个点图层

```js
const view = new TujuMap.Viewer({map});
const pointLayer = view.add(
    new TujuMap.PointLayer({
        size: 10,
        color: 'red',
        onClick(item) {
            console.log(item);
        },
    })
);
```

## Layer 抽象类

抽象的 Layer 类，每个具体的图层都是该类的实现。

### Layer 的公共方法

-   设置图层数据
    `layer.setData(data: LayerData[])`
-   设置图层配置项
    `layer.setConfig(config: LayerConfig)`
-   视角定位到图层
    ```js
    layer.flyToViewport(config?: ViewportConfig)
    interface ViewportConfig {
        noAnimation?: boolean; // 是否启用动画效果移动地图，默认为 false
        margins?: number[]; // 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
        zoomFactor?: number; // 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如 map.setViewport 计算出地图的级别为 10，如果 zoomFactor 为-1，则最终的地图级别为 9
        delay?: number; // 改变地图视野的延迟执行时间，单位毫秒，默认为 200ms。此延时仅针对动画效果有效
    }
    ```

## LayerConfig 公共配置

```js
interface LayerConfig {
    enablePicked?: boolean; // 是否可以拾取
    autoSelect?: boolean; // 根据鼠标位置来自动设置选中项
    selectedColor?: string; // 选中项颜色
    onClick?: (item: any) => void; // 点击事件
    onMousemove?: (item: any) => void; // 鼠标滑动事件
}
```

图层可以设置公共的样式，也可以针对每个数据，在 LayerData 的 style 属性上去设置，具体每个图层支持哪些样式，请参照具体图层数据的 style 结构。

## LayerData 公共数据结构

```js
interface LayerData {
    style?: any; // 对应该数据的样式
    coordinates: any[]; // 坐标数据
    extra?: any; // 用于挂载额外的信息，会在点击等事件触发时带上
}
```

## 各图层配置和数据结构

为优化使用体验，对各图层的配置和数据结构做了统一处理，整体继承 LayerConfig 和 LayerData 基础结构。每个数据中可以单独设置部分style属性，从而让该处的数据有单独的样式。

### TujuMap.PointLayer 点图层

配置结构：

```js
interface PointLayerConfig extends LayerConfig {
    borderWidth?: number; // 边框大小
    borderColor?: string; // 边框颜色
    size?: number; // 点大小
    color?: string; // 点颜色
    shape?: 'rectangle' | 'circle'; // 点形状 方形、圆形
}
```

数据结构：

```js
interface PointLayerData extends LayerData {
    coordinates: LngLat[];
    style?: {
        color?: string,
        size?: number,
    };
}
```

### TujuMap.IconLayer 图片图层

配置结构：

```js
interface IconLayerConfig extends LayerConfig {
    width: number; // 图片宽度
    height: number; // 图片高度
    icon: string; // 图片链接
    offset?: [number, number]; // 偏移量
    opacity?: number; // 透明度
    collides?: boolean; // 是否开启碰撞检测
}
```

数据结构：

```js
interface IconLayerData extends LayerData {
    coordinates: LngLat[];
    style?: {
        icon?: string,
        width?: number,
        height?: number,
    };
}
```

### TujuMap.TextLayer 文字图层

配置结构：

```js
interface TextLayerConfig extends LayerConfig {
    fontSize?: number; // 文字大小
    offset?: [number, number]; // 偏移量
    color?: string; // 文字颜色
    fontFamily?: string; // 文字字体
    flat?: boolean; // 是否贴地
    angle?: number; // 旋转角度
    collides?: boolean; // 是否开启碰撞检测
}
```

数据结构：

```js
interface TextLayerData extends LayerData {
    coordinates: LngLat[];
    style?: {
        color?: string,
        text: string,
        angle?: number,
        fontSize?: number,
    };
}
```
### TujuMap.LabelLayer 标签文字图层

配置结构：

```js
interface LabelLayerConfig extends LayerConfig {
    textColor?: string; // 标签文字颜色
    borderColor?: string; // 标签边框颜色
    backgroundColor?: string;// 标签背景颜色
    pickedTextColor?: string;// 拾取时文字颜色
    pickedBorderColor?: string;// 拾取时边框颜色
    pickedBackgroundColor?: string;// 拾取时背景颜色
    fontFamily?: string;// 文字字体
    fontSize?: number;// 文字大仙
    lineHeight?: number;// 文字行高
    textAlign?: string;// 文字对齐方式，left right center
    collides?: boolean;// 是否开启碰撞检测
    offset?: number[];// 偏移量[x, y]
    padding?: number[];// 内边距
    borderRadius?: number;// 边框圆角
}
```

数据结构：

```js
interface LabelLayerData extends LayerData {
    coordinates: LngLat;
    style?: {
        text?: string;
        textColor?: string;
        borderColor?: string;
        backgroundColor?: string;
    };
}
```
### TujuMap.LineLayer 线图层

配置结构：

```js
interface LineLayerConfig extends LayerConfig {
    width?: number; // 线宽度
    color?: string; // 线颜色
}
```

数据结构：

```js
interface LineLayerData extends LayerData {
    coordinates: LngLat[][];
    style?: {
        color?: string,
        width?: number,
    };
}
```

### TujuMap.PolygonLayer 面图层

配置结构：

```js
interface PolygonLayerConfig extends LayerConfig {
    blend?: 'default' | 'deeper' | 'normal' | 'lighter'; // 混合模式
    fillColor?: string; // 填充颜色
    lineColor?: string; // 边框颜色
    lineWidth?: number; // 边框宽度
}
```

数据结构：

```js
interface PolygonLayerData extends LayerData {
    coordinates: LngLat[][][];
    style?: {
        fillColor?: string,
        lineColor?: string,
        lineWidth?: number,
    };
}
```
### TujuMap.ClusterLayer 点聚合图层

配置结构：

```js
interface ClusterLayerConfig extends LayerConfig {
    defaultSize?: number; // 非聚合点的默认大小
    defaultColor?: string; // 非聚合点的默认颜色
    minSize?: number; // 聚合点显示的最小直径
    maxSize?: number; // 聚合点显示的最大直径
    clusterRadius: number; // 聚合范围半径
    gradient?: Record<number, string>; // 聚合点颜色梯度
    maxZoom?: number; // 聚合的最大级别，当地图放大级别高于此值将不再聚合
    minZoom?: number; // 聚合的最小级别，当地图放大级别低于此值将不再聚合
    // 是否显示文字
    showText?: true;
    // 开始聚合的最少点数，点数多于此值才会被聚合
    minPoints?: number;
    // 设置文字样式
    textOptions?: {
        fontSize?: number;
        color?: string;
        // 格式化数字显示
        format?: (count: any) => string | number;
    };
}
```

数据结构：

```js
interface ClusterLayerData extends LayerData {
    coordinates: LngLat;
}
```

### TujuMap.HeatmapLayer 热力图层

配置结构：

```js
interface HeatmapLayerConfig extends LayerConfig {
    size: number; // 单个点绘制大小
    unit?: string; // 单位，m:米，px: 像素
    height?: number; // 最大高度，默认为0
    max: number; // 最大阈值
    min: number; // 最小阈值
    minOpacity?: number; // 最小阈值透明度
    maxOpacity?: number; // 最大阈值透明度
    blend?: string; // 颜色混合方式 default lighter normal deeper
    gradient?: Record<number, string>; // 颜色梯度， 0.25: 'rgba(89, 233, 179, 1)',0.55: 'rgba(182, 243, 147, 1)',0.85: 'rgba(254, 255, 140, 1)',0.9: 'rgba(217, 29, 28, 1)',
}
```

数据结构：

```js
interface HeatmapLayerData extends LayerData {
    coordinates: LngLat;
    count: number; // 该点的值
}
```
### TujuMap.GridLayer 网格图层

配置结构：

```js
interface GridLayerConfig extends LayerConfig {
    style?: string; // 网格形式，默认'grid'会对点进行网格聚合，'normal'直接按所在点画一个网格
    gridSize: number; // 网格的边长，单位米
    gridGap?: number; // 网格间隙，单位米
    color?: string | ((item: {count: number; color: string | undefined}) => string); // 网格颜色，支持函数，item为每个点的部分属性对象
    height?: number | ((item: {count: number; coordinates: number[]}) => number); // 网格高度，支持函数，item为每个点的部分属性对象
    textOptions?: {
        show: boolean; // 是否显示文字
    } & TextLayerConfig; // 可使用文字图层配置
}
```

数据结构：

```js
interface GridLayerData extends LayerData {
    coordinates: LngLat;
    count: number; // 该点的值
}
```