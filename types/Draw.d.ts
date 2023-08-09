declare class Draw {
    constructor(map: BMapGL.Map, config?: DrawConfig);
    onStart(type: string): void;
    onCancel(overlay: any): void;
    onComplete(overlay: any): void;
    onDrawing(isDrawing: boolean, overlay: any): void;
    // hover回调
    onOverlayHover(isHover: boolean, overlay: any): void;
    // overlay变化
    onOverlayChange(overlay: any, map: BMapGL.Map): void;
    isOpen(): boolean;
    close(): void;
    // 绘制过程中取消
    cancel(): void;
    drawMarker(): void;
    drawPolyline(): void;
    drawPolygon(): void;
    drawCircle(): void;
    drawRectangle(): void;
    // 清空覆盖物
    clear(): void;
}
interface DrawConfig {
    enableEdit?: boolean; // 是否开启二次编辑
    enableDrawingTool?: boolean; // 是否显示工具栏
    drawingToolOptions?: { // 工具栏配置
        anchor?: number;
        scale?: number;
        drawingModes?: string[];
        offset?: number[];
    };
    enableAutoViewport?: boolean; // 是否开启绘制完成时的自动缩放定位
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
