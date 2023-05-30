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
