import {Dispatch} from 'redux'
import { createAction } from 'redux-actions';
import {LOGIN_CHECK_LOGIN_OR_REGISTER, LOGIN_LOGIN_LOADING, LOGIN_CHECK_LOGIN_TYPE} from '../../redux/action-type'
import {ELoginOrRegister, ELoginType} from '../../type'
import {ReduxBatch} from '../../redux'


import { push } from 'react-router-redux';


/**
 *  切换注册登录
 * */
export const checkLoginOrRegister = createAction(LOGIN_CHECK_LOGIN_OR_REGISTER, (n: ELoginOrRegister) => n);

/**
 *  登录, 注册 开始加载
 * */
export const loginLoading = createAction(LOGIN_LOGIN_LOADING, (n: boolean) => n);

/**
 *  登录
 * */
export const login = () => {
    return (dispatch: Dispatch) => {
        dispatch(loginLoading(true));
        setTimeout(() => {
            ReduxBatch.batchActions([
                dispatch(loginLoading(false)),
                dispatch(push('/'))
            ])
        }, 1000)
    }
};

/**
 *  注册
 * */
export const register = () => {
    return (dispatch: Dispatch) => {
        dispatch(loginLoading(true));
        setTimeout(() => {
            ReduxBatch.batchActions([
                dispatch(loginLoading(false)),
                dispatch(push('/'))
            ])
        }, 1000)
    }
};

/**
 *  切换登录方式
 * */
export const checkLoginType = createAction(LOGIN_CHECK_LOGIN_TYPE, (n: ELoginType) => n);






