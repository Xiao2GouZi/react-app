
import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';
// import * as WebApi from './web-api';
// import {ReduxBatch} from '../../redux'
import {HOME_DECREASE, HOME_INCREASE, HOME_LOAD_DATA_FAIL, HOME_LOAD_DATA_SUCCESS, HOME_LOADING} from '../../redux/action-type';



export const increase =  createAction(HOME_INCREASE ,(n: number) => n);

export const decrease =  createAction(HOME_DECREASE ,(n: number) => n);

export const loadData = createAction(HOME_LOADING, (loading: boolean) => loading);

export const loadDateSuccess = createAction(HOME_LOAD_DATA_SUCCESS, (data: any) => data);

export const loadDataFail = createAction(HOME_LOAD_DATA_FAIL, (err: string) => err);

export const downloadData = () => {
    return async (dispatch: any) => {
        dispatch(loadData(true));

    }
};



export const selected = (path: string) => {
    return (dispatch: any) => {
        dispatch(push(path))
    }
};

