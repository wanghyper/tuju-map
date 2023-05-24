/// <reference types="bmapgl" />
/// <reference types="bmapgl" />
import Route from './Route';
export default class DrivingRoute extends Route {
    route: BMapGL.DrivingRoute;
    constructor(map: BMapGL.Map);
}
