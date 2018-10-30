




export interface IAsyncResult<T> {
    res: T;
    err: any;
}


export interface IResponse {
    data: any;
    status: number;
    message: string;
}


export interface IConfig {
    host: string,
    requestTimeOut: number,
    isDev: boolean,
    defaultImage: string

}


export interface IGetHotGoodsParam {
    mobile: string,
    adminId: string,
    isQueryStock: boolean,
    isQueryMemberPrice: boolean,
    itemTypes: Array<string>,
    isQueryActivityPrice?: boolean,
    isQueryLimitItem?: boolean,
    isQueryItemActivities?: boolean
}

export interface IGetHotGoodsResponse {
    pageNum: number,
    pageSize: number,
    totalCount: number,
    requestCount: number,
    dataList: Array<IGoodsList>
}


export interface IGoodsList {
    cateId?: string,
    itemType?: number,
    productName: string,
    salePrice: string,
    activityPrice?: string,
    spuId: string,
    skuId?: string,
    skuBn?: string,
    images: string,
    skuList?: Array<ISkuList>,
    skuPrices?: Array<ISkuPrices>
    specs?: Array<ISpecs>,
    stardardString: string,
    stock?: number,
    rowNum?: number,
    aisleNum?: number,
    aisleRealNum?: number,
    aisleType: string,
    itemActivity?: IItemActivities,
    d2cSaleCount?: number
    // boughtNum?: number
}


export interface ISkuList {
    cateId: string,
    itemType: number,
    productName: string,
    salePrice: string,
    activityPrice: string,
    skuId: string,
    spuId: string,
    unit: string,
    images: string,
    skuBn: string,
    specs: Array<ISkuListSpecs>
    stardardString: string,
    skuPrices: Array<ISkuPrices>
    stock?: number,
    d2cNegativeStock?: number // 是否开启超卖 ,“1”开启，其余不开启
    boughtNum?: number   //用户购买的数量
    itemActivity?: IItemActivities,
    rowNum?: number,
    aisleNum?: number,
    onSale: boolean
}


export interface IItemActivities {
    type: GoodsActivity,
    title: string,
    isLimit: true
    limitNum: 1
    priority: 1

}

export interface ISkuPrices {
    levelId: number,
    price: number
}


export interface ISpecs {
    specialPropId: string,
    specialPropName: string,
    specialValues: Array<ISpecialValues>
}

export interface ISpecialValues {
    selectedStatus: string,
    specialValId: string,
    specialValImg: string,
    specialValName: string
}

export interface ISkuListSpecs {
    specialPropId: string,
    specialPropName: string,
    specialValId: string,
    specialValName: string
}

export enum GoodsActivity {
    INTEGRAL= 'INTEGRAL',   // 积分
    COUPON= 'COUPON', //优惠券
    PRESENT= 'PRESENT', // 赠品
    SEC_KILL= 'SEC_KILL', //秒杀
    GROUPON= 'GROUPON', // 多人拼团
    MULTI_BUY_FEEDBACK= 'MULTI_BUY_FEEDBACK', // 团购返现
    TIME_LIMITED_DISCOUNT= 'TIME_LIMITED_DISCOUNT', // 限时抢购
    DAILY_DISCOUNT= 'DAILY_DISCOUNT', // 天天特价
    COLLOCATION_GROUP= 'COLLOCATION_GROUP', // 搭配宝
    FIXED_GROUP= 'FIXED_GROUP', // 固定套装
    FULL_PRIVILEGE= 'FULL_PRIVILEGE', // 商品满减送
    ORDER_CASH_BACK= 'ORDER_CASH_BACK', // 订单返现
    REGISTER_REWARD= 'REGISTER_REWARD', // 注册有礼
    RECOMMEND_REWARD= 'RECOMMEND_REWARD', // 推荐有礼
    PAY_REWARD= 'PAY_REWARD', // 支付有礼
}