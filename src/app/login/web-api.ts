import {IAsyncResult, ISupportCountriesItem} from '&/type';
import * as Data from './data'

/**
 *  获取支持的国家
 */
export const getSupportCountries = (): IAsyncResult<ISupportCountriesItem[]> => {
    return {res: Data.supportCountries as ISupportCountriesItem[], err: ''}
}


