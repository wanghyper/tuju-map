declare class LocalSearch {
    localSearch: BMapGL.LocalSearch;
    pageCapacity: number;
    constructor(map: BMapGL.Map, pageCapacity: number);
    search(keyword: string): Promise<ResultItem[]>;
    searchInBounds(optios: SearchInBoundsOptions): Promise<ResultItem[]>;
    searchNearby(options: SearchNearbyOptions): Promise<ResultItem[]>;
    setPageCapacity(number): void
}
interface ResultItem {
    title: string	//结果的名称标题
    point: BMapGL.Point	//该结果所在的地理位置
    url: string	//在百度地图中展示该结果点的详情信息链接
    address: string	//地址（根据数据部分提供）。注：当结果点类型为公交站或地铁站时，地址信息为经过该站点的所有车次
    city: string	//所在城市
    phoneNumber: string	//电话，根据数据部分提供
    postcode: string	//邮政编码，根据数据部分提供
    type: any	//类型，根据数据部分提供
    isAccurate?: Boolean	//是否精确匹配。只适用LocalSearch的search方法检索的结果
    province: string	//所在省份
    tags?: Array<string>	//POI的标签，如商务大厦、餐馆等。
    detailUrl?: string	//在百度地图详情页面展示该结果点的链接。
}
interface SearchInBoundsOptions {
    keyword: string;
    bounds: BMapGL.Bounds;
}
interface SearchNearbyOptions {
    keyword: string;
    center: BMapGL.Point;
    radius: number;
}
