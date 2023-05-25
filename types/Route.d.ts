declare class Route {}
declare class DrivingRoute extends Route {
    route: BMapGL.DrivingRoute;
    constructor(map: BMapGL.Map);
}
declare class WalkRoute extends Route {
    route: BMapGL.WalkingRoute;
    constructor(map: BMapGL.Map);
}
