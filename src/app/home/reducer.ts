import { Map } from 'immutable'
import { handleActions } from 'redux-actions';
import * as TSType from '&/type'

const initialState:Map<string, any> = Map({
    loading: false,
    contentType: TSType.EHomeContentType
});

const HomeReducer = handleActions<Map<string, any>>({
    'HOME_LOADING': (state, action:any) => {
        return state.set('loading', action.payload)
    },

}, initialState);

export default HomeReducer

