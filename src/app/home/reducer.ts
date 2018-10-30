import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

const initialState:Map<string, any> = Map({
    number: 1,
    loading: false,
    goodsData: [],
    loadDataErr: ''
});


const HomeReducer = handleActions<Map<string, any>>({
    'HOME_INCREASE': (state, action: any) => {
        return state.set('number', state.get('number') + action.payload);
    },
    'HOME_DECREASE': (state, action: any) => {
        return state.set('number', state.get('number') - action.payload);
    },
    'HOME_LOADING': (state, action:any) => {
        return state.set('loading', action.payload)
    },
    'HOME_LOAD_DATA_SUCCESS': (state, action: any)=> {
        return state.set('goodsData', action.payload)
    },
    'HOME_LOAD_DATA_FAIL': (state, action: any) => {
        return state.set('loadDataErr', action.payload)
    }
}, initialState);

export default HomeReducer

