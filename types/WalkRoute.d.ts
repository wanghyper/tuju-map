/// <reference types="bmapgl" />
/// <reference types="bmapgl" />
import Route from '../base/BMap/Routes/Route';
export default class WalkRoute extends Route {
    route: BMapGL.WalkingRoute;
    constructor(map: BMapGL.Map);
}
