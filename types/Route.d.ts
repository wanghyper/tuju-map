declare class Route {
    search(
        start: TujuPoint,
        end: TujuPoint
    ): Promise<{path: BMapGL.Point[]; distance: number; duration: number} | null>;
    multiSearch(conditions: TujuPoint[]): Promise<
        | {
              path: any[];
              distance: number;
              duration: number;
          }
        | undefined
    >;
}
declare class DrivingRoute extends Route {
    route: BMapGL.DrivingRoute;
    constructor(map: BMapGL.Map);
}
declare class WalkRoute extends Route {
    route: BMapGL.WalkingRoute;
    constructor(map: BMapGL.Map);
}
