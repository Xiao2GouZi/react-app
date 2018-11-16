
// import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';
// import {Dispatch} from 'redux'

import { HOME_LOAD_DATA_FAIL, HOME_LOAD_DATA_SUCCESS, HOME_LOADING } from '&/redux/action-type';


export const actionDownloadData = createAction(HOME_LOADING, (n: boolean) => n);

export const actionLoadDateSuccess = createAction(HOME_LOAD_DATA_SUCCESS, (data: any) => data);

export const actionLoadDataFail = createAction(HOME_LOAD_DATA_FAIL, (err: string) => err);


