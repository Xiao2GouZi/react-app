import { Dispatch } from 'redux'
import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

import * as TSType from '&/type'

import { ReduxBatch, ActionTypes } from '&/redux'
import { getSupportCountries } from './web-api'


/**
 *  切换注册登录
 */
export const checkLoginOrRegister = createAction(ActionTypes.LOGIN_CHECK_LOGIN_OR_REGISTER, (n: TSType.ELoginOrRegister) => n);

/**
 *  登录, 注册 开始加载
 */
export const actionLoginLoading = createAction(ActionTypes.LOGIN_LOGIN_LOADING, (n: boolean) => n);

export const actionLoginStatus = createAction(ActionTypes.LOGIN_LOGIN_SUCCESS, (n: boolean) => n);

/**
 *  登录
 */
export const login = () => {
    return (dispatch: Dispatch) => {
        dispatch(actionLoginLoading(true));
        setTimeout(() => {
            ReduxBatch.batchActions([
                dispatch(actionLoginLoading(false)),
                dispatch(actionLoginStatus(true)),
            ])
        }, 1000)
    }
};

/**
 *  注册
 */
export const register = () => {
    return (dispatch: Dispatch) => {
        dispatch(actionLoginLoading(true));
        setTimeout(() => {
            ReduxBatch.batchActions([
                dispatch(actionLoginLoading(false)),
                dispatch(push('/'))
            ])
        }, 1000)
    }
};

/**
 *  切换登录方式
 */
export const actionCheckLoginType = createAction(ActionTypes.LOGIN_CHECK_LOGIN_TYPE, (n: TSType.ELoginType) => n);

/**
 *  加载支持国家的数据
 */
export const downloadSupportCountries = () => {
    return (dispatch: Dispatch) =>  {
        setTimeout(() => {
            const {res} = getSupportCountries();
            dispatch(actionSupportCountries(res));
        } ,1000)
    }
};

/**
 *  获取国家数据传成功
 */
export const actionSupportCountries = createAction(ActionTypes.LOGIN_DOWN_LOAD_SUPPORT_COUNTRIES, (n: TSType.ISupportCountriesItem[]) => n);

/**
 * 切换获取验证码的方式
 */
export const actionCheckAcceptCode = createAction(ActionTypes.LOGIN_REGISTER_CHECK_ACCEPT_CODE, (n: TSType.ERegisterCheckAcceptCode) => n);

/**
 *  选择国家
 */
export const actionSelectedCountry = createAction(ActionTypes.LOGIN_REGISTER_SELECTED_COUNTRY, (n: TSType.ISupportCountriesItem) => n);

/**
 *  注册手机号改变
 */
export const actionRegisterMobileChange = createAction(ActionTypes.LOGIN_RESISTER_MOBILE_CHANGE, (n: string) => n);

/**
 * 注册验证码改变
 */
export const actionRegisterCodeChange = createAction(ActionTypes.LOGIN_REGISTER_CODE_CHANGE, (n: string) => n);

/**
 *  登录输入手机号
 */
export const actionMobileEmailChangeMobile = createAction(ActionTypes.LOGIN_MOBILE_EMAIL_MOBILE, (n: string) => n);

/**
 *  登录输入密码
 */
export const actionMobileEmailChangePassword = createAction(ActionTypes.LOGIN_MOBILE_EMAIL_PASSWORD, (n: string) => n);







