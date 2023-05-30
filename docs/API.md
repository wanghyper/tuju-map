# 图聚平台接口类

`TujuMap.API`为图聚平台接口静态类，不可实例化，直接使用其方法。内部请求使用的是 TujuMap.Request 类，封装了一些请求校验的逻辑，可以使用此类来发送自定义请求。

```js
// 底层使用Axios
class Request {
        constructor(config?: {baseUrl?: string});
        get(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<APIResponse>;
        post(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<APIResponse>
    }
```

## baseUrl

可以通过设置 TujuMap.API.baseUrl 指定请求的服务器地址

## 返回结构

请求返回的公共数据结构

```js
interface APIResponse {
    code: number; // 状态code码，正常为0
    data: any; // 数据内容
    msg: string; // 接口消息
    success: boolean; // 是否请求成功
}
```

## 获取平台 tocken

方法：`API.getTocken(authConfig: AuthConfig)`

说明：该方法在 TujuMap.init 初始化时，传入 authConfig 会自动去请求，无需用户手动去调用。如果初始化时未传入 authConfig 参数，后续若请求平台接口，需手动调用此方法，获取的 tocken 会缓存到浏览器，后续请求会直接获取，无需手动传入。

`authConfig`配置参数可从服务端获取，具体参照服务端接口文档。

```js
interface AuthConfig {
    appAk: string;
    userToken: string;
    timestamp: string;
    sign: string;
}
```

## 获取图聚图层列表

方法：`API.getLayerListByMapId(mapId: number) `

说明：获取图聚平台已经发布的图层列表，传入参数为对应的地图 mapId。

## 获取指定图层的数据

方法：`API.getLayerData(params: {mapId: number, layerId: number})`

说明：根据地图的 mapId 和图层 layerId 获取对应图层数据，用于地图渲染。

## 获取指定图层的样式, 数组形式

方法：`API.getLayerStyle(params: {mapId: number, layerNames?: string[], layerIds?: number[]})`

说明：根据传入的 mapId 以及 layerId 或者 layerName 获取对应的样式，注意为数组形式，可同时获取多个图层，layerNames 和 layerIds 只需一个.

## 空间圈选查询

方法：

```js
API.searchBox(params: {
    mapId: number; // 地图id
    gridLocation: string; // 数据格式同116 48,116 47 经纬度空格分隔，两个点之间逗号分隔
    layerIds?: number[]; // 需要参与查询的图层id数组，不传搜索全部
    layerName?: string[]; // 需要参与查询的图层name数组，跟layerIds传一个就好
})
```

说明：提供空间查询能力，可通过传入边界范围，来查询图层在该范围内的点线面数据，对应 gridLocation，格式要求为经纬度空格分隔，两个点之间逗号分隔。
