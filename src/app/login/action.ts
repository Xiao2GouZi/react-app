
import { createAction } from 'redux-actions';
import {LOGIN_CHECK_LOGIN_OR_REGISTER} from '../../redux/action-type'
import {ELoginOrRegister} from '../../type'

import { push } from 'react-router-redux';


/**
 *  切换注册登录
 * */
export const checkLoginOrRegister = createAction(LOGIN_CHECK_LOGIN_OR_REGISTER, (n: ELoginOrRegister) => n);


/**
 *  登录
 * */
export const login = () => {
    return (dispatch: any) => {
        dispatch(push('/'))
    }
};

/**
 *  注册
 * */
export const register = () => {
    return (dispatch: any) => {

        console.log('-----', dispatch);

        dispatch(push('/'))
    }
};








