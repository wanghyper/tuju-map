/**
 * @fileoverview GeoUtils类提供若干几何算法，用来帮助用户判断点与矩形、
 * 圆形、多边形线、多边形面的关系,并提供计算折线长度和多边形的面积的公式。
 * 主入口类是<a href="symbols/BMapGLLib.GeoUtils.html">GeoUtils</a>，
 * 基于Baidu Map API GL 1.0。
 *
 * @author Baidu Map Api Group
 * @version 1.0
 */
/**
 * @exports GeoUtils as BMapGLLib.GeoUtils
 */
declare const GeoUtils: {
    (): void;
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
