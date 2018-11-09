import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

import * as ActionType from '../../redux/action-type'
import * as TSType from '../../type'



const initialState:Map<string, any> = Map({
    loginRegister: TSType.ELoginOrRegister.login,
    loginRegisterLoading: false,
    loginType: TSType.ELoginType.EmailOrMobile,
    supportCountries: [],
    normalCountry: {
        "is_hot": true,
        "code": "+86",
        "name": "中国",
        "abbr": "CN"
    },
    acceptCodeType: TSType.ERegisterCheckAcceptCode.Message,
    registerCode: '',
    registerMobile: ''
});

let reducers = {};
reducers[ActionType.LOGIN_CHECK_LOGIN_OR_REGISTER] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginRegister', action.payload);
};

reducers[ActionType.LOGIN_LOGIN_LOADING] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginRegisterLoading', action.payload);
};

reducers[ActionType.LOGIN_CHECK_LOGIN_TYPE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginType', action.payload);
};

reducers[ActionType.LOGIN_DOWN_LOAD_SUPPORT_COUNTRIES] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('supportCountries', action.payload);
};

reducers[ActionType.LOGIN_REGISTER_CHECK_ACCEPT_CODE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.withMutations((state) => {
        state.set('acceptCodeType', action.payload);
        state.set('registerCode', '')
    })
};

reducers[ActionType.LOGIN_REGISTER_SELECTED_COUNTRY] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('normalCountry', action.payload);
};

reducers[ActionType.LOGIN_REGISTER_CODE_CHANGE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('registerCode', action.payload);
};

reducers[ActionType.LOGIN_RESISTER_MOBILE_CHANGE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('registerMobile', action.payload);
};




const LoginReducer = handleActions(reducers, initialState);

export default LoginReducer
