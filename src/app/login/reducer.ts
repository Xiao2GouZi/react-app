import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

import {ELoginOrRegister, IReduxAction} from '../../type'
import {LOGIN_CHECK_LOGIN_OR_REGISTER} from '../../redux/action-type'


const initialState:Map<string, any> = Map({
    login_register: ELoginOrRegister.login,
});

let reducers = {};
reducers[LOGIN_CHECK_LOGIN_OR_REGISTER] = (state:Map<string, any>, action: IReduxAction) => {
    return state.set('login_register', action.payload);
};



const LoginReducer = handleActions(reducers, initialState);

export default LoginReducer
