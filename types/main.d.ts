/// <reference path="API.d.ts"/>
/// <reference path="bmap.d.ts"/>
/// <reference path="layer.d.ts"/>
/// <reference path="layers.d.ts"/>
/// <reference path="Draw.d.ts"/>
/// <reference path="Route.d.ts"/>
declare module 'tuju-map' {
    function init(params: {ak?: string; authConfig?: AuthConfig; type?: 'BMapGL'; baseUrl?: string}): Promise<BMapGL>;
    const DRAWTYPES: {
        marker: BMapGL.DrawingType;
        polyline: BMapGL.DrawingType;
        rectangle: BMapGL.DrawingType;
        polygon: BMapGL.DrawingType;
        circle: BMapGL.DrawingType;
    };
    const LayerTypes: {
        POINT: number;
        LINE: number;
        POLYGON: number;
        ICON: number;
        TEXT: number;
        LABEL: number;
        CLUSTER: number;
        HEATMAP: number;
        GRID: number;
        HONEYCOMB: number;
    };
    class Map {
        baseMap: BMapGL.Map; // 基础地图对像
        constructor(container: string | HTMLElement, params: MapParamas);
        // 底图样式设置
        setMapStyleV2(style: BMapGL.MapStyleV2): void;
        // 覆盖物
        addOverlay(overlay: BMapGL.Overlay): void;
        removeOverlay(overlay: BMapGL.Overlay): void;
        addCustomHtmlLayer(cusLayer: CustomOverlays);
        removeCustomHtmlLayer(cusLayer: CustomOverlays);
        getOverlays(): BMapGL.Overlay[];
        clearOverlays(): void;
        drawMarker(point: TujuPoint, config?: BMapGL.MarkerOptions): BMapGL.Marker;
        drawIcon(point: TujuPoint, config: IconOptions): BMapGL.Marker;
        drawLabel(
            text: string,
            position: TujuPoint,
            config?: {
                offset?: number[];
                style?: Record<string, any>;
            }
        ): BMapGL.Label;
        drawCircle(
            point: TujuPoint,
            radius: number,
            config?: BMapGL.PolylineOptions & {
                fillColor: string;
            }
        ): BMapGL.Circle;
        drawPolyline(point: TujuPoint[], config?: BMapGL.PolylineOptions): BMapGL.Polyline;
        drawPolygon(point: TujuPoint[], config?: BMapGL.PolygonOptions): BMapGL.Polygon;
        drawCustomOverlay(point: TujuPoint, html: HTMLElement | string, style?: any): BMapGL.Overlay;
        drawHtml(point: TujuPoint, content: (() => HTMLElement) | HTMLElement, config?: any): BMapGL.CustomOverlay;
        // 创建多覆盖物图层
        createCustomOverlays(createDom: (config: any) => HTMLElement, options?: CustomHtmlLayerConfig): CustomOverlays;
        // 创建信息窗
        createInfoWindow(content: string | HTMLElement, config?: BMapGL.InfoWindowOptions): BMapGL.InfoWindow;
        // 打开目标信息框
        openInfoWindow(infoWindow: BMapGL.InfoWindow, position: TujuPoint): void;
        // 关闭信息框
        openInfoWindow(infoWindow: BMapGL.InfoWindow, position: TujuPoint): void;
        // 地图状态
        setZoom(zoom: number): void;
        setCenter(center: [number, number] | BMapGL.Point): void;
        setViewport(points: TujuPoint[], config?: BMapGL.ViewportOptions): void;
        setCenterAndZoom(center: TujuPoint, zoom: number): void;
        setDisplayOptions(optins: any): void;
        getZoom(): number;
        getZoomUnits(): number;
        getCenter(): BMapGL.Point;
        getBounds(): BMapGL.Bounds;
        // 事件
        on(event: string, handler: BMapGL.Callback): void;
        addEventListener(event: string, handler: BMapGL.Callback): void;
        removeEventListener(event: string, handler: BMapGL.Callback): void;
        // 室内图
        createIndoorRoute(config?: {server: string});
        getIndoorManager();
        getIndoorInfo();
        showIndoor(uid: string, index: number): void;
        setIndoorFloor(floor: number | string): void;
        // 路径规划
        /**
         * @description 创建步行规划实例
         */
        createWalkRoute(): WalkRoute;
        createDrivingRoute(): DrivingRoute;

        /**
         * @description 获取绘制工具示例
         */
        createMapDraw(config?: DrawConfig): Draw;
        /**
         * @description 根据位置获取地图poi信息
         */
        getIconByClickPosition(clickPosition: BMapGL.Pixel);
        // 坐标转换
        /**
         * @description 经纬度转墨卡托
         * @returns mercator number[]
         */
        lnglatToMercator(lng: number, lat: number): number[];
        /**
         * @description 墨卡托转经纬度
         * @returns lnglat number[]
         */
        mercatorToLnglat(x: number, y: number): number[];
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
    class Viewer {
        constructor(params: {map: Map});
        add<T>(layer: T): T;
        remove<T>(layer: T);
        clear();
        getAll();
        destroy();
    }
    class PointLayer implements Layer {
        constructor(config: PointLayerConfig);
        setData(data: PointLayerData[]);
        setConfig(config: PointLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class LineLayer implements Layer {
        constructor(config: LineLayerConfig);
        setData(data: LineLayerData[]);
        setConfig(config: LineLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class PolygonLayer implements Layer {
        constructor(config: PolygonLayerConfig);
        setData(data: PolygonLayerData[]);
        setConfig(config: PolygonLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class IconLayer implements Layer {
        constructor(config: IconLayerConfig);
        setData(data: IconLayerData[]);
        setConfig(config: IconLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class TextLayer implements Layer {
        constructor(config: TextLayerConfig);
        setData(data: TextLayerData[]);
        setConfig(config: TextLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class LabelLayer implements Layer {
        constructor(config: LabelLayerConfig);
        setData(data: LabelLayerData[]);
        setConfig(config: LabelLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class ClusterLayer implements Layer {
        constructor(config: ClusterLayerConfig);
        setData(data: ClusterLayerData[]);
        setConfig(config: ClusterLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class IconClusterLayer implements Layer {
        constructor(config: IconClusterLayerConfig);
        setData(data: IconClusterLayerData[]);
        setConfig(config: IconClusterLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class HeatmapLayer implements Layer {
        constructor(config: HeatmapLayerConfig);
        setData(data: HeatmapLayerData[]);
        setConfig(config: HeatmapLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    class GridLayer implements Layer {
        constructor(config: GridLayerConfig);
        setData(data: GridLayerData[]);
        setConfig(config: GridLayerConfig);
        flyToViewport(config?: ViewportConfig);
        show(): void;
        hide(): void;
    }
    const API: {
        baseUrl: string;
        getTocken(config: AuthConfig): Promise<APIResponse>;
        getLayerListByMapId(mapId: number): Promise<APIResponse>;
        getLayerData(params: {mapId: number; layerId: number}): Promise<APIResponse>;
        getLayerStyle(params: {mapId: number; layerNames?: string[]; layerIds?: number[]}): Promise<any[]>;
        searchBox(params: {
            mapId: number;
            gridLocation: string;
            layerIds?: number[];
            layerName?: string[];
            type?: number;
            pageNo?: number;
            pageSize?: number;
            screenQo?: any;
        }): Promise<APIResponse>;
        getIndoorRoutes(
            start: {
                x: number;
                y: number;
                floor: string;
            },
            end: {
                x: number;
                y: number;
                floor: string;
            },
            server?: string
        ): Promise<APIResponse>;
    };
    const GeoUtils: {
        /**
         * 判断点是否在矩形内
         * @param {Point} point 点对象
         * @param {Bounds} bounds 矩形边界对象
         * @returns {Boolean} 点在矩形内返回true,否则返回false
         */
        isPointInRect(point: any, bounds: any): boolean;
        /**
         * 判断点是否在圆形内
         * @param {Point} point 点对象
         * @param {Circle} circle 圆形对象
         * @returns {Boolean} 点在圆形内返回true,否则返回false
         */
        isPointInCircle(point: any, circle: any): boolean;
        /**
         * 判断点是否在折线上
         * @param {Point} point 点对象
         * @param {Polyline} polyline 折线对象
         * @returns {Boolean} 点在折线上返回true,否则返回false
         */
        isPointOnPolyline(point: any, polyline: any): boolean;
        /**
         * 判断点是否多边形内
         * @param {Point} point 点对象
         * @param {Polyline} polygon 多边形对象
         * @returns {Boolean} 点在多边形内返回true,否则返回false
         */
        isPointInPolygon(point: any, polygon: any): boolean;
        /**
         * 将度转化为弧度
         * @param {degree} Number 度
         * @returns {Number} 弧度
         */
        degreeToRad(degree: any): number;
        /**
         * 将弧度转化为度
         * @param {radian} Number 弧度
         * @returns {Number} 度
         */
        radToDegree(rad: any): number;
        /**
         * 计算两点之间的距离,两点坐标必须为经纬度
         * @param {point1} Point 点对象
         * @param {point2} Point 点对象
         * @returns {Number} 两点之间距离，单位为米
         */
        getDistance(point1: any, point2: any): number;
        /**
         * 计算折线或者点数组的长度
         * @param {Polyline|Array<Point>} polyline 折线对象或者点数组
         * @returns {Number} 折线或点数组对应的长度
         */
        getPolylineDistance(polyline: any): number;
        /**
         * 计算多边形面或点数组构建图形的面积,注意：坐标类型只能是经纬度
         * @param {Polygon|Array<Point>} polygon 多边形面对象或者点数组
         * @returns {Number} 多边形面或点数组构成图形的面积
         */
        getPolygonArea(polygon: any): number;
        /**
         * 判断折线与多边形是否相交
         *  参考：https://www.cnblogs.com/tuyang1129/p/9390376.html
         * @param {Polyline|Array<Point>} lines 折线
         * @param {Polygon|Array<Point>} polygon 多边形
         * @returns {Boolean} 折线和多边形是否相交
         */
        isPolylineIntersectArea(lines: any, polygon: any): boolean;
    };
    function wktToGeojson(wkt: string): any;
    class Request {
        constructor(config?: {baseUrl?: string});
        get(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<APIResponse>;
        post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<APIResponse>;
    }
}
