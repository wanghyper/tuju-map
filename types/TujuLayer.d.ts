declare class TujuLayer {
    static LayerTypes: TujuLayerTypes; // 图聚图层类型
    static StyleTypes: StyleTypes; // 图聚图层样式类型
    static FieldTypes: FieldTypes; // 字段类型
    options: TujuLayerOption; // 图聚图层配置
    layerId!: number; // 图聚图层id
    mapId!: number; // 图层的mapid
    isShow: boolean; // 是否显示
    map!: PlatfomMap; // PlatformMap对象
    data: LayerData[]; // 图聚图数据
    layerType: TujuLayerTypes; // 图层类型
    styleType: StyleTypes; // 图层样式类型
    layerManager!: LayerManager; // 图聚图层管理类
    style: any; //  图层样式数据
    layerName: string; // 图层名称
    constructor(options: TujuLayerOption);
    loadData(styleType?: StyleTypes): Promise<void>;
    getStyle(): any;
    setStyle(style: {[key: string]: any}): Promise<void>;
    getLegend(): any | undefined;
    // 显示图层
    show(): void;
    // 隐藏图层
    hide(): void;
    // 视角定位到图层
    flyToViewport(): void;
    // 清空图层
    clear(): void;
}

interface TujuLayerOption {
    layerId: number; // 图层id
    mapId: number; // 地图id
    layerName: string; // 图层名称
    layerType: TujuLayerTypes; // 图层大的类型，只有点线面三种
    styleType?: StyleTypes; //  图层初始化时显示的类型，默认为平台配置的类型
    renderOrder: number; // 图层渲染顺序，越大越在前边
    onClick?: (item: LayerData, mapEvent: any) => void;
    onMousemove?: (item: LayerData, mapEvent: any) => void;
}
interface TujuLayerStyle {
    color: string;
    fieldName: string;
    group: Array<{count: number; name: string}>;
    labelConfig: Record<string, any>;
    styleConfigList: Array<{
        classifyCount: number;
        classifyName: string;
        id: number;
        shape: number;
        shapeColour: string;
        size: number;
    }>;
    opacity: number;
    outlineColour: string;
    outlineOpacity: number;
    outlineWidth: number;
    shape: number;
    shapeColour: string;
    size: number;
    styleType: StyleTypes;
}
declare enum LayerTypes {
    POINT = 1,
    LINE = 2,
    POLYGON = 3,
    ICON = 4,
    TEXT = 5,
    LABEL = 6,
    CLUSTER = 7,
    HEATMAP = 8,
    GRID = 9,
    HONEYCOMB = 10,
}
declare enum TujuLayerTypes {
    POINT = 1,
    LINE = 2,
    POLYGON = 3,
}
// 样式类型（默认样式：0；分类样式：1；分段样式：2；热力图：3；网格图：4；蜂巢图：5；聚合样式：6）
declare enum StyleTypes {
    default = 0,
    classify = 1,
    segment = 2,
    heat = 3,
    grid = 4,
    honeycomb = 5,
    cluster = 7,
    migrate = 6,
}
// （文本：1；数值：2；日期：3；枚举：4）
declare enum FieldTypes {
    TEXT = 1,
    NUMBER = 2,
    DATE = 3,
    ENUM = 4,
}
declare const IS_DEVELOPMENT: boolean;
interface LayerListResponse {
    count: number;
    eyeOn: number;
    gmtCreate: number;
    gmtUpdate: number;
    id: number;
    name: string;
    type: TujuLayerTypes;
}
