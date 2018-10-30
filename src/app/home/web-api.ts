
import Config from '../../config';
import {IAsyncResult, IGetHotGoodsParam, IGetHotGoodsResponse, IGoodsList, ISpecialValues, ISpecs, ISkuList, IItemActivities, GoodsActivity} from '../../type';
import {Fetch} from '../../common'




/**
 *  热销商品
 * */
export const getHotGoods = async (param: IGetHotGoodsParam): Promise<IAsyncResult<IGetHotGoodsResponse>>  => {
    let response = await Fetch.Post({url: `${Config.host}/item/wechat/hot`, body: param})
    if (response.err) {
        return {res: {} as IGetHotGoodsResponse , err: response.err}
    }
    let data = handleGoodsList(response);
    return {res: data, err: ''}
};


const handleGoodsList = (response: any): IGetHotGoodsResponse => {
    let goodsList: Array<IGoodsList> = response.res.dataList.map((item: any) => {
        // 定义规格属性
        let specs = item.specs.map((specs_item: any) => {
            let specialValues = specs_item.specialValues.map((values_item: any) => {
                return {
                    selectedStatus: 'normal',
                    specialValId: values_item.specialValId,
                    specialValImg: values_item.specialValImg,
                    specialValName: values_item.specialValName
                } as ISpecialValues
            });
            return {
                specialPropId: specs_item.specialPropId,
                specialPropName: specs_item.specialPropName,
                specialValues: specialValues
            } as ISpecs
        });
        return {
            itemType: item.itemType,
            productName: item.title,
            salePrice: item.price,
            spuId: item.spuId,
            images: item.images[0] || Config.defaultImage,
            skuList: handleSkuList(item.skuList),
            specs: specs,
            stardardString: '',
            stock: item.stock.stock,
            itemActivity: handleItemActivity(item.itemActivities)
        }
    });
    //过滤没有商品的spu
    goodsList = goodsList.filter(item => item.skuList && item.skuList.length > 0)
    let data = {
        pageNum: response.res.pageNum,
        pageSize: response.res.pageSize,
        totalCount: response.res.totalCount,
        requestCount: response.res.dataList.length,
        dataList: goodsList
    };
    return data
};

const handleSkuList = (_skuList: any): Array<ISkuList> => {
    //过滤没有库存的
    _skuList = _skuList.filter((_item: any) => _item.stock.stock !== 0 || _item.d2cNegativeStock === 1)
    let skuList: Array<ISkuList> = _skuList.map((_item: any) => {
        let json = _item.cats;
        let cateId = json[0] && json[0].childs[0].id || null;
        return {
            cateId,
            itemType: _item.itemType,
            productName: _item.productName,
            salePrice: _item.salePrice,
            activityPrice: _item.activityPrice,
            skuId: _item.skuId,
            spuId: _item.spuId,
            unit: _item.unit,
            images: _item.images[0] || Config.defaultImage,
            specs: _item.specs,
            skuBn: _item.skuBn,
            stardardString: handleSpecs(_item),
            skuPrices: _item.skuPrices,
            stock: _item.stock.stock,
            d2cNegativeStock: _item.d2cNegativeStock,
            boughtNum: _item.boughtNum,
            itemActivity: handleItemActivity(_item.itemActivities),
            rowNum: _item.rowNum,
            aisleNum: _item.aisleNum,
            d2cSaleCount: _item.d2cSaleCount,
            onSale: _item.onSale,
        }
    });
    return skuList
};

const handleItemActivity = (itemActivities: any): IItemActivities => {
    if (!itemActivities) {
        return {} as IItemActivities
    }
    let itemActivity = {} as  IItemActivities ;
    if (itemActivities.length > 0) {
        itemActivity = itemActivities[0];
        switch (itemActivity.type) {
            case GoodsActivity.FULL_PRIVILEGE:
                itemActivity.title ='满减';
                break;
            case  GoodsActivity.DAILY_DISCOUNT:
                itemActivity.title ='特价';
                break;
            case GoodsActivity.TIME_LIMITED_DISCOUNT:
                itemActivity.title ='抢购';
                break;
            default:
                itemActivity.title ='';
                break
        }
    }
    return itemActivity
};

const handleSpecs = (item: any): string => {
    let stardardString = '';
    item.specs.map((specItem: ISpecialValues) => {
        stardardString = stardardString.length == 0 ? `${specItem.specialValName}` : `${stardardString}、${specItem.specialValName}`
    });
    return stardardString
};