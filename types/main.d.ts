declare module TujuMap {
    class Map {
        constructor(container: string, params: MapParamas);
        // 底图样式设置
        setMapStyleV2(style: BMapGL.MapStyleV2) {}
        // 覆盖物
        addOverlay(overlay: BMapGL.Overlay) {}
        removeOverlay(overlay: BMapGL.Overlay) {}
        getOverlays() {}
        clearOverlays() {}
        drawMarker(point: Point, config?: BMapGL.MarkerOptions) {}
        drawIcon(point: Point, config: IconOptions) {}
        drawLabel(text: string, position: Point, config: {offset?: number[]; style?: Record<string, any>} = {}) {}
        drawCircle(point: Point, radius: number, config?: BMapGL.PolylineOptions & {fillColor: string}) {}
        drawPolyline(point: Point[], config?: BMapGL.PolylineOptions) {}
        drawPolygon(point: Point[], config?: BMapGL.PolygonOptions) {}
        drawCustomOverlay(point: Point, html: HTMLElement | string, style?: any) {}
        drawHtml(point: Point, content: (() => HTMLElement) | HTMLElement, config?: any) {}
        // 创建信息窗
        createInfoWindow(content: string | HTMLElement, config?: BMapGL.InfoWindowOptions) {}
        // 打开目标信息框
        openInfoWindow(infoWindow: BMapGL.InfoWindow, position: Point) {}
        // 关闭信息框
        closeInfoWindow() {}
        // 地图状态
        setZoom(zoom: number) {}
        setCenter(center: [number, number] | BMapGL.Point) {}
        setViewport(points: Point[], config?: BMapGL.ViewportOptions) {}
        setCenterAndZoom(center: Point, zoom: number) {}
        setDisplayOptions(optins: any) {}
        getZoom() {}
        getZoomUnits() {}
        getCenter() {}
        getBounds() {}
        // 事件
        on(event: string, handler: BMapGL.Callback);
        addEventListener(event: string, handler: BMapGL.Callback);
        removeEventListener(event: string, handler: BMapGL.Callback);
        // 室内图
        getIndoorManager();
        getIndoorInfo();
        showIndoor(uid: string, index: number);
        setIndoorFloor(floor: number | string);
        // 路径规划
        /**
         * @description 创建步行规划实例
         */
        createWalkRoute();
        createDrivingRoute();

        /**
         * @description 获取绘制工具示例
         */
        createMapDraw(config?: DrawConfig);
        /**
         * @description 根据位置获取地图poi信息
         */
        getIconByClickPosition(clickPosition: BMapGL.Pixel);
        // 坐标转换
        /**
         * @description 经纬度转墨卡托
         * @returns mercator number[]
         */
        lnglatToMercator(lng: number, lat: number);
        /**
         * @description 墨卡托转经纬度
         * @returns lnglat number[]
         */
        mercatorToLnglat(x: number, y: number): {lng: number; lat: number};
        /**
         * @description 屏幕像素位置转换为地图坐标
         * @returns BMapGL.Point
         */
        pixelToPoint(x: number, y: number): BMapGL.Point;
        /**
         * @description 地图坐标转换为屏幕像素位置
         * @returns BMapGL.Pixel
         */
        pointToPixel(lng: number, lat: number): BMapGL.Pixel;
    }
}
