declare namespace BMapGL {
    class CityListControl extends BMapGL.Control {
        constructor(params: {anchor: BMapGL.ControlAnchor; offset: BMapGL.Size});
    }
    class CustomOverlay extends BMapGL.Overlay {
        constructor(createDom: (config?: any) => HTMLElement, config: any);
        show();
        hide();
    }
    class CustomHtmlLayer extends BMapGL.Overlay {
        constructor(createDom: (config?: any) => HTMLElement, config?: any);
        show();
        hide();
    }
    class ViewAnimation {
        constructor(
            keyFrames: ViewAnimationKeyFrames[],
            opts: {
                duration: number; // 设置每次迭代动画持续时间
                delay: number; // 设置动画延迟开始时间
                interation: number; // 设置动画迭代次数
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
    showIndoorControls?: boolean; // 是否显示室内图控件
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
interface CustomOverlayConfig {
    containerStyle?: Record<string, string>; // 最外层容器的样式，可通过此处设置偏移量等
    enableDraggingMap?: boolean; //是否可以在覆盖物位置拖拽地图
    enableMassClear?: boolean; // 是否能被统一清除掉覆盖物
}
interface CustomOverlaysConfig {
    containerStyle?: Record<string, string>; // 最外层容器的样式，可通过此处设置偏移量等
    enableDraggingMap?: boolean; //是否可以在覆盖物位置拖拽地图
}
type CustomOverlaysData = Array<{coordinates: TujuPoint; properties?: any}>;
declare class CustomOverlay {
    constructor(point: TujuPoint, content: HTMLElement | string, config?: CustomOverlayConfig);
    addEventListener(type: string, listener: (e: any) => void): void; // 添加事件监听器
    removeEventListener(type: string, listener: (e: any) => void): void; // 移除事件监听器
}
declare class CustomOverlays {
    overlay: BMapGL.CustomHtmlLayer;
    constructor(map: BMapGL.Map, createDom: (config: any) => HTMLElement, options?: CustomOverlaysConfig);
    setData(data: CustomOverlaysData); // 设置覆盖物数据，会自动刷新每个覆盖物的内容
    show(); //  显示覆盖物
    hide(); //  隐藏覆盖物
    removeOverlay(cusItem: CustomOverlay); //  移除覆盖物
    removeAllOverlays(); // 删除该图层上所有的覆盖物（不释放图层实例）
    getCustomOverlays(); // Array<CustomOverlay> 获取当前图层所有的自定义覆盖物
    addEventListener(type: string, listener: (e: any) => void);
    removeEventListener(type: string, listener: (e: any) => void);
}
declare class TrackAnimation {
    start(); // 开始动画
    cancel(); // 终止动画
    setPath(path: TujuPoint[]); // 通过设置path重新生成线覆盖物
    setPolyline(polyline: BMapGL.Polyline); // 设置动画轨迹折线覆盖物，也可直接使用setPath方法
    getPolyline(): BMapGL.Polyline; // 获取动画轨迹折线覆盖物
    setDelay(delay: Number); // 动画开始延迟，单位ms
    getDelay(); // 获取动画开始延迟，单位ms
    setDuration(duration: Number); // 设置动画持续时间。建议根据轨迹长度调整，地图在轨迹播放过程中动态渲染，动画持续时间太短影响地图渲染效果。
    getDuration(); // 获取动画持续时间
    enableOverallView(); // 开启动画结束后总览视图缩放（调整地图到能看到整个轨迹的视野），默认开启
    disableOverallView(); // 关闭动画结束后总览视图缩放（调整地图到能看到整个轨迹的视野），默认关闭
    setTilt(tilt: Number); // 设置动画中的地图倾斜角度，默认55度
    getTilt(); // 获取动画中的地图倾斜角度
    setZoom(zoom: Number); // 设置动画中的缩放级别，默认会根据轨迹情况调整到一个合适的级别
    getZoom(); // 设置动画中的缩放级别
}
interface TrackAnimationOptions {
    duration?: number; // 动画持续时常，单位ms,默认10000
    overallView?: boolean; // 动画完成后是否自动调整视野到总览
    tilt?: number; // 轨迹播放的角度，默认为55
    heading?: number; //地图旋转方向,默认0
    delay?: number; // 动画开始的延迟，默认0，单位ms
    enableViewAnimation?: boolean; // 是否开启视角跟随动画，默认为true
}
interface ViewAnimationKeyFrames {
    center: BMapGL.Point; // 定义第一个关键帧帧地图中心点
    zoom: number; // 定义第一个关键帧地图等级
    tilt: number; // 定义第一个关键帧地图倾斜角度
    heading: number; // 定义第一个关键帧地图旋转方向
    percentage: number; // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
}
interface LocalSearchConfig {
    location: BMapGL.Map | string; // 地图实例或地理位置字符串
}
