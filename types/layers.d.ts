declare module 'mapvgl';
// 图层配置
type LngLat = number[];
interface LayerConfig {
    enablePicked?: boolean; // 是否可以拾取
    autoSelect?: boolean; // 根据鼠标位置来自动设置选中项
    selectedColor?: string; // 选中项颜色
    onClick?: (item: any) => void; // 点击事件
    onMousemove?: (item: any) => void; // 鼠标滑动事件
}
interface PointLayerConfig extends LayerConfig {
    borderWidth?: number; // 边框大小
    borderColor?: string; // 边框颜色
    size?: number; // 点大小
    color?: string; // 点颜色
    shape?: 'rectangle' | 'circle'; // 点形状 方形、圆形
    // collides?: boolean;
}
interface LabelLayerConfig extends LayerConfig {
    textColor?: string; // 标签文字颜色
    borderColor?: string; // 标签边框颜色
    backgroundColor?: string; // 标签背景颜色
    pickedTextColor?: string; // 拾取时文字颜色
    pickedBorderColor?: string; // 拾取时边框颜色
    pickedBackgroundColor?: string; // 拾取时背景颜色
    fontFamily?: string; // 文字字体
    fontSize?: number; // 文字大仙
    lineHeight?: number; // 文字行高
    textAlign?: string; // 文字对齐方式，left right center
    collides?: boolean; // 是否开启碰撞检测
    offset?: number[]; // 偏移量[x, y]
    padding?: number[]; // 内边距
    borderRadius?: number; // 边框圆角
}
interface LineLayerConfig extends LayerConfig {
    width?: number; // 线宽度
    color?: string; // 线颜色
    // lineJoin?: 'miter' | 'bevel' | 'round'; // 线相交样式
}
interface ClusterLayerConfig extends LayerConfig {
    defaultSize?: number; // 非聚合点的默认大小
    defaultColor?: string; // 非聚合点的默认颜色
    minSize?: number; // 聚合点显示的最小直径
    maxSize?: number; // 聚合点显示的最大直径
    clusterRadius: number; // 聚合范围半径
    gradient?: Record<number, string>; // 聚合点颜色梯度
    maxZoom?: number; // 聚合的最大级别，当地图放大级别高于此值将不再聚合
    minZoom?: number; // 聚合的最小级别，当地图放大级别低于此值将不再聚合
    extent?: number; // 聚合后的密集程度，越大越密集
    // 是否显示文字
    showText?: true;
    // 开始聚合的最少点数，点数多于此值才会被聚合
    minPoints?: number;
    // 设置文字样式，可使用TextLayer所有配置
    textOptions?: TextLayerConfig & {
        // 格式化数字显示
        format?: (count: any) => string | number;
    };
    beforeRender?: (item: any) => boolean; // 如果需要自定义聚合前渲染，可以配置此项，传入值为当前聚合层级的数据。显式地返回false可以阻止默认的渲染，否则默认还会被渲染
}
interface IconClusterLayerConfig extends LayerConfig {
    clusterRadius: number; // 聚合范围半径
    maxZoom?: number; // 聚合的最大级别，当地图放大级别高于此值将不再聚合
    minZoom?: number; // 聚合的最小级别，当地图放大级别低于此值将不再聚合
    extent?: number; // 聚合后的密集程度，越大越密集
    // 是否显示文字
    showText?: boolean;
    // 开始聚合的最少点数，点数多于此值才会被聚合
    minPoints?: number;
    // 设置文字样式，可使用TextLayer所有配置
    textOptions?: TextLayerConfig & {
        // 格式化数字显示
        format?: (count: any) => string | number;
    };
    iconOptions?: IconLayerConfig; // 可使用IconLayer的配置
    iconExtent: Record<number, string>; // 图片梯度配置
}
interface PolygonLayerConfig extends LayerConfig {
    blend?: 'default' | 'deeper' | 'normal' | 'lighter'; // 混合模式
    fillColor?: string; // 填充颜色
    lineColor?: string; // 边框颜色
    lineWidth?: number; // 边框宽度
}
interface IconLayerConfig extends LayerConfig {
    width: number; // 图片宽度
    height: number; // 图片高度
    icon: string; // 图片链接
    offset?: [number, number]; // 偏移量
    opacity?: number; // 透明度
    collides?: boolean; // 是否开启碰撞检测
}
interface TextLayerConfig extends LayerConfig {
    fontSize?: number; // 文字大小
    offset?: [number, number]; // 偏移量
    color?: string; // 文字颜色
    fontFamily?: string; // 文字字体
    flat?: boolean; // 是否贴地
    angle?: number; // 旋转角度
    collides?: boolean; // 是否开启碰撞检测
}
interface HeatmapLayerConfig extends LayerConfig {
    size: number; // 单个点绘制大小
    unit?: string; // 单位，m:米，px: 像素
    height?: number; // 最大高度，默认为0
    max: number; // 最大阈值
    min: number; // 最小阈值
    minOpacity?: number; // 最小阈值透明度
    maxOpacity?: number; // 最大阈值透明度
    blend?: string; // 颜色混合方式 default lighter normal deeper
    gradient?: Record<number, string>; // 颜色梯度， 0.25: 'rgba(89, 233, 179, 1)',0.55: 'rgba(182, 243, 147, 1)',0.85: 'rgba(254, 255, 140, 1)',0.9: 'rgba(217, 29, 28, 1)',
}
interface GridLayerConfig extends LayerConfig {
    style?: string; // 网格形式，默认'grid'会对点进行网格聚合，'normal'直接按所在点画一个网格
    gridSize: number; // 网格的边长，单位米
    gridGap?: number; // 网格间隙，单位米
    color?: string | ((item: {count: number; color: string | undefined}) => string); // 网格颜色，支持函数，item为每个点的部分属性对象
    height?: number | ((item: {count: number; coordinates: number[]}) => number); // 网格高度，支持函数，item为每个点的部分属性对象
    textOptions?: {
        show: boolean; // 是否显示文字
    } & TextLayerConfig; // 可使用文字图层配置
}

// 图层数据
interface LayerData {
    style?: any; // 对应该数据的样式
    coordinates: any[]; // 坐标数据
    extra?: any; // 用于挂载额外的信息，会在点击等事件触发时带上
    [x: string]: any;
}

interface PointLayerData extends LayerData {
    coordinates: LngLat;
    style?: {
        color?: string;
        size?: number;
    };
}
interface LineLayerData extends LayerData {
    coordinates: LngLat[];
    style?: {
        color?: string;
        width?: number;
    };
}
interface PolygonLayerData extends LayerData {
    coordinates: LngLat[][];
    style?: {
        fillColor?: string;
        lineColor?: string;
        lineWidth?: number;
    };
}
interface IconLayerData extends LayerData {
    coordinates: LngLat;
    style?: {
        icon?: string;
        width?: number;
        height?: number;
    };
}
interface TextLayerData extends LayerData {
    coordinates: LngLat;
    style?: {
        color?: string;
        text: string;
        angle?: number;
        fontSize?: number;
    };
}
interface LabelLayerData extends LayerData {
    coordinates: LngLat;
    style?: {
        text?: string;
        textColor?: string;
        borderColor?: string;
        backgroundColor?: string;
    };
}
interface ClusterLayerData extends LayerData {
    coordinates: LngLat;
    style: {
        icon?: string; // 未聚合时的图片
        width?: number; // 未聚合时的图片宽度
        height?: number; // 未聚合时的图片高度
        size?: string; // 未聚合时的点大小
    };
}
interface IconClusterLayerData extends LayerData {
    coordinates: LngLat;
    style?: {
        icon?: string; // 未聚合时的图片
        width?: number; // 未聚合时的图片宽度
        height?: number; // 未聚合时的图片高度
    };
}
interface HeatmapLayerData extends LayerData {
    coordinates: LngLat;
    count: number; // 该点的值
}
interface GridLayerData extends LayerData {
    coordinates: LngLat;
    count: number; // 该点的值
}
