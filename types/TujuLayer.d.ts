interface TujuLayerOption {
    layerId: number;
    mapId: number;
    title?: string;
    layerType: TujuLayerTypes; // 图层大的类型，只有点线面三种
    showType?: StyleTypes; //  图层显示类型，默认为平台配置的类型
    isShow?: boolean;
    style?: LayerConfig;
    renderOrder?: number; // 图层渲染顺序，越大越在前边
    onClick?: (item: LayerData) => void;
    onMousemove?: (item: LayerData) => void;
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
    styleType: number;
    opacity: number;
    outlineColour: string;
    outlineOpacity: number;
    outlineWidth: number;
    shape: number;
    shapeColour: string;
    size: number;
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
