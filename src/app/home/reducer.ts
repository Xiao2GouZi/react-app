import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

const initialState:Map<string, any> = Map({
    number: 1
});

const HomeReducer = handleActions<Map<string, any>>({
    INCREASE: (state, action: any) => {
        return state.set('number', state.get('number') + action.payload);
    },
    DECREASE: (state, action: any) => {
        return state.set('number', state.get('number') - action.payload);
    }
}, initialState);

export default HomeReducer

