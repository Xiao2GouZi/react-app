import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

import {ELoginOrRegister, IReduxAction, ELoginType} from '../../type'
import {LOGIN_CHECK_LOGIN_OR_REGISTER, LOGIN_LOGIN_LOADING, LOGIN_CHECK_LOGIN_TYPE} from '../../redux/action-type'


const initialState:Map<string, any> = Map({
    loginRegister: ELoginOrRegister.login,
    loginRegisterLoading: false,
    loginType: ELoginType.EmailOrMobile
});

let reducers = {};
reducers[LOGIN_CHECK_LOGIN_OR_REGISTER] = (state:Map<string, any>, action: IReduxAction) => {
    return state.set('loginRegister', action.payload);
};

reducers[LOGIN_LOGIN_LOADING] = (state:Map<string, any>, action: IReduxAction) => {
    return state.set('loginRegisterLoading', action.payload);
};

reducers[LOGIN_CHECK_LOGIN_TYPE] = (state:Map<string, any>, action: IReduxAction) => {
    return state.set('loginType', action.payload);
};


const LoginReducer = handleActions(reducers, initialState);

export default LoginReducer
