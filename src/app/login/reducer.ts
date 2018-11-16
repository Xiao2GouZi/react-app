import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

import * as TSType from '&/type'
import * as ActionTypes from '&/redux/action-type'

const initialState:Map<string, any> = Map({
    loginRegister: TSType.ELoginOrRegister.login,
    loginRegisterLoading: false,
    loginStatus: false,
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
    registerMobile: '',
    loginMobile: '',
    loginPassword: ''
});

const reducers = {};
reducers[ActionTypes.LOGIN_CHECK_LOGIN_OR_REGISTER] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginRegister', action.payload);
};

reducers[ActionTypes.LOGIN_LOGIN_LOADING] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginRegisterLoading', action.payload);
};

reducers[ActionTypes.LOGIN_LOGIN_SUCCESS] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginStatus', action.payload);
};

reducers[ActionTypes.LOGIN_CHECK_LOGIN_TYPE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.withMutations(mutator => {
        mutator.set('loginType', action.payload);
        mutator.set('loginMobile', '');
        mutator.set('loginPassword', '');
        mutator.set('registerCode', '');
        mutator.set('registerMobile', '')
    })
};

reducers[ActionTypes.LOGIN_DOWN_LOAD_SUPPORT_COUNTRIES] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('supportCountries', action.payload);
};

reducers[ActionTypes.LOGIN_REGISTER_CHECK_ACCEPT_CODE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.withMutations(mutator => {
        mutator.set('acceptCodeType', action.payload);
        mutator.set('registerCode', '')
    })
};

reducers[ActionTypes.LOGIN_REGISTER_SELECTED_COUNTRY] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('normalCountry', action.payload);
};

reducers[ActionTypes.LOGIN_REGISTER_CODE_CHANGE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('registerCode', action.payload);
};

reducers[ActionTypes.LOGIN_RESISTER_MOBILE_CHANGE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('registerMobile', action.payload);
};

reducers[ActionTypes.LOGIN_MOBILE_EMAIL_MOBILE] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginMobile', action.payload);
};

reducers[ActionTypes.LOGIN_MOBILE_EMAIL_PASSWORD] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginPassword', action.payload);
};


export default handleActions(reducers, initialState)
