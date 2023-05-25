declare module 'tuju-map' {
    function init(params: {ak?: string; authConfig?: AuthConfig; type?: 'BMapGL'; baseUrl?: string}): Promise<BMapGL>;
    declare const DRAWTYPES: {
        marker: BMapGL.DrawingType;
        polyline: BMapGL.DrawingType;
        rectangle: BMapGL.DrawingType;
        polygon: BMapGL.DrawingType;
        circle: BMapGL.DrawingType;
    };
    declare const LayerTypes: {
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
        constructor(container: string, params: MapParamas);
        // 底图样式设置
        setMapStyleV2(style: BMapGL.MapStyleV2): void;
        // 覆盖物
        addOverlay(overlay: BMapGL.Overlay): void;
        removeOverlay(overlay: BMapGL.Overlay): void;
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
    declare const API: {
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
    GeoUtils;
}
