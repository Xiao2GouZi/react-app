
import { push } from 'react-router-redux';
import {HOME_DECREASE, HOME_INCREASE, HOME_LOAD_DATA_FAIL, HOME_LOAD_DATA_SUCCESS, HOME_LOADING} from '../../redux/action-type';
import * as WebApi from './web-api';
import {ReduxBatch} from '../../redux'


import { createAction } from 'redux-actions';



export const increase =  createAction(HOME_INCREASE ,(n: number) => n);

export const decrease =  createAction(HOME_DECREASE ,(n: number) => n);

export const loadData = createAction(HOME_LOADING, (loading: boolean) => loading);

export const loadDateSuccess = createAction(HOME_LOAD_DATA_SUCCESS, (data: any) => data);

export const loadDataFail = createAction(HOME_LOAD_DATA_FAIL, (err: string) => err);

export const downloadData = () => {
    return async (dispatch: any) => {
        dispatch(loadData(true));
        let response = await WebApi.getHotGoods({
            "adminId":"A877127",
            "mobile":"15861097927",
            "isQueryStock":true,
            "isQueryMemberPrice":true,
            "isQueryActivityPrice":true,
            "isQueryLimitItem":true,
            "isQueryItemActivities":true,
            "itemTypes":["1","2"]
        });
        if (response.err) {
            ReduxBatch.batchActions([
                dispatch(loadData(false)),
                dispatch(loadDataFail(response.err))
            ])
        }else {
            ReduxBatch.batchActions([
                dispatch(loadData(false)),
                dispatch(loadDateSuccess(response.res))
            ])
        }
    }
};



export const selected = (path: string) => {
    return (dispatch: any) => {
        dispatch(push(path))
    }
};

