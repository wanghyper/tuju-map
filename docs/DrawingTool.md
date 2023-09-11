# 绘制工具

SDK 封装了了地图常用的绘制功能，因存在 UI 交互，需额外引入 SDK 内的 css 样式文件

```js
import 'tuju-map/dist/style.css';
```

## TujuMap.Draw 类

### 构造函数

```ts
constructor(map: BMapGL.Map, config?: DrawConfig);

// DrawConfig内容
interface DrawConfig {
    enableEdit?: boolean; // 是否开启二次编辑
    enableDrawingTool?: boolean; // 是否显示工具栏
    enableEdgeMove?: boolean; // 是否开启绘制时鼠标到地图边缘，自动平移地图
    drawingToolOptions?: { // 工具栏配置
        anchor?: number;
        scale?: number;
        drawingModes?: string[];
        offset?: number[];
    };
    enableAutoViewport: boolean; // 是否开启绘制完成时的自动缩放定位
    enableCalculate?: boolean; // 绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形)
    enableSorption?: boolean; // 是否开启边界吸附功能
    sorptionDistance?: number; // 边界吸附距离
    enableGpc?: boolean; // 是否开启延边裁剪功能
    enableLimit?: boolean; // 是否开启超限提示
    limitOptions?: {
        area: number; // 面积超限值
        distance: number;
    };
    // 设置绘制的展示样式，设置后会直接替换默认样式
    circleOptions?: BMapGL.CircleOptions; // 圆的样式
    polylineOptions?: BMapGL.PolylineOptions; // 线的样式
    polygonOptions?: BMapGL.PolygonOptions; // 多边形的样式
    rectangleOptions?: BMapGL.PolygonOptions; // 矩形的样式
    labelOptions?: Record<string, string>; // 提示框label的样式，接受css属性对象
}
// 绘制方法
TujuMap.DRAWTYPES.marker
TujuMap.DRAWTYPES.polyline
TujuMap.DRAWTYPES.rectangle
TujuMap.DRAWTYPES.circle
TujuMap.DRAWTYPES.polygon
```

也可以通过地图实例来直接创建一个 Draw 实例

```js
map.createMapDraw(DrawConfig);
```

### 实例方法

```js
Draw.drawMarker();
Draw.drawPolyline();
Draw.drawPolygon();
Draw.drawCircle();
Draw.drawRectangle();
// 更新配置参数
Draw.updateConfig(newCofig: DrawConfig)
// 是否开启绘制
Draw.isOpen();
// 清空覆盖物
Draw.clear();
// 绘制过程中取消
Draw.cancel();
// 退出绘制
Draw.close();
```

### 监听绘制事件

可以通过实例设置监听函数来监听绘制变化

```ts
// 绘制开始
Draw.onStart(type: string)
// 绘制结束
Draw.onCancel(overlay: any)
// 绘制完成
Draw.onComplete(overlay: any)
// 正在绘制回调
Draw.onDrawing(isDrawing: boolean, overlay: any)
// hover 回调
Draw.onOverlayHover(isHover: boolean, overlay: any)
// 已绘制的overlay变化
Draw.onOverlayChange(overlay: any, map: BMapGL.Map)
```

### 通过事件返回的 overlay 实例结构

```js
interface overlay {
    calculate: string; // 面积
    center: number[]; // 中心点，圆形和矩形才有值
    clearSelf: () => {}; // 清除自身的方法
    drawingMode: string; // 绘制的类型
    overlay: BMapGL.Overlay; // 实际的覆盖物实例
}
```

### 示例

```js
const map = new TujuMap.Map('container', {
    center: [116.404, 39.915],
    zoom: 13,
    controls: {
        navigation: {
            show: true,
            offset: [20, 80],
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        },
        zoom: {
            show: true,
            offset: [33, 20],
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        },
    },
    enableScrollWheelZoom: true,
});
// 创建绘制工具实例
const drawingTool = map.createMapDraw({
    enableDrawingTool: true,
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        scale: 0.7,
        drawingModes: [
            TujuMap.DRAWTYPES.marker,
            TujuMap.DRAWTYPES.polyline,
            TujuMap.DRAWTYPES.rectangle,
            TujuMap.DRAWTYPES.circle,
            TujuMap.DRAWTYPES.polygon,
        ],
        offset: [20, 30],
    },
});
drawingTool.onOverlayChange = overlay => {
    console.log(overlay);
};
```
