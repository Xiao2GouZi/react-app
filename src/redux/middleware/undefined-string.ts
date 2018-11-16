import { MiddlewareAPI } from 'redux'
import * as TSTypes from '&/type'
import { Uitil } from '&/common'


/**
 *  过滤数据中所有的null, undefined
 */
export const dataUndefinedMiddleware = (middlewareApi: MiddlewareAPI) => {
    return (next: any) => {
        return (action: TSTypes.IReduxAction) => {
            action.payload = Uitil.dataNoEmpty(action.payload);
            return next(action);
        }
    }
};












