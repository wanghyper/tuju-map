declare namespace BMapGL {
    class CityListControl extends BMapGL.Control {
        constructor(params: {anchor: BMapGL.ControlAnchor; offset: BMapGL.Size});
    }
    class CustomOverlay extends BMapGL.Overlay {
        constructor(
            createDOM: () => HTMLElement,
            config: {
                point: Point; //覆盖物的经纬度，必填
                offsetX: number; //覆盖物水平偏移量
                offsetY: number; //覆盖物垂直偏移量
                MinZoom: number; //最小显示层级
                MaxZoom: number; //最大显示层级
                properties: object; //自绑定属性
                enableMassClear: boolean; //是否能被统一清除掉覆盖物
                enableDraggingMap: boolean; //是否可以在覆盖物位置拖拽地图
            }
        );
    }
}
type TujuPoint = number[] | BMapGL.Point;
// icon覆盖物参数
type IconOptions = Omit<BMapGL.MarkerOptions, 'icon'> &
    BMapGL.IconOptions & {
        url: string;
        size: number[];
    };
// 控件通用参数
interface ControlConfig {
    show?: boolean; // 是否加载
    offset?: number[]; // 相对偏移量
    anchor?: number;
}

interface MapParamas {
    mapOptions?: Record<string, any>; // 单独为基础地图传递的初始化参数
    center?: number[]; // 初始中心点
    zoom?: number; // 初始缩放层级
    showBuilding?: boolean; // 是否显示3D建筑物（仅支持WebGL方式渲染的地图）
    showIndoor?: boolean; // 是否显示室内图
    enableIconClick?: boolean; // 地图poi是否允许点击
    enableKeyboard?: boolean; // 是否启用键盘控制
    enableScrollWheelZoom?: boolean; // 是否启用滚轮缩放
    controls?: {
        cityList?: ControlConfig; // 城市选择控件
        navigation?: ControlConfig; // 3D导航空间
        zoom?: ControlConfig; // 缩放空间
    };
}

interface ViewportConfig {
    noAnimation?: boolean; // 是否启用动画效果移动地图，默认为false
    margins?: number[]; // 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
    zoomFactor?: number; // 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
    delay?: number; // 改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
}
interface DrawConfig {
    enableEdit?: boolean;
    enableDrawingTool?: boolean;
    drawingToolOptions?: {
        anchor: number;
        scale: number;
        drawingModes: string[];
        offset: number[];
    };
}
