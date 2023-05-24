# 绘制工具

SDK 封装了了地图常用的绘制功能，因存在UI交互，需额外引入SDK内的css样式文件
```js
import 'tuju-map/dist/style.css';
```

## TujuMap.Draw 类

### 构造函数

```ts
constructor(map: BMapGL.Map, config?: DrawConfig);

// DrawConfig内容
interface DrawConfig {
    enableEdit?: boolean; // 是否启用二次编辑
    enableDrawingTool?: boolean; // 是否显示工具栏
    drawingToolOptions?: { // 工具栏相关配置
        anchor: number; // 位置，参照地图控件位置
        scale: number; // 缩放大小
        drawingModes: number[]; // 显示哪些绘制方法 TujuMap.DRAWTYPES
        offset: number[]; // 相对原位置偏移量
    };
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
// 清空覆盖物
Draw.clear();
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
