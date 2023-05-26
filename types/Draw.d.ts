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
declare const DRAWTYPES: {
    marker: BMapGL.DrawingType;
    polyline: BMapGL.DrawingType;
    rectangle: BMapGL.DrawingType;
    polygon: BMapGL.DrawingType;
    circle: BMapGL.DrawingType;
};