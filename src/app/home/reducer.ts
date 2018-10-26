import {ReduxActionType} from '../../type'
import {Map} from 'immutable'

import {
    LOCATION_CHANGE
} from 'react-router-redux';

const initialState = Map({
    number: 1
});

export default function update(state = initialState, action: any) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state;
        case ReduxActionType.INCREASE:
            return state.set('number', state.get('number') + action.amount);
        case ReduxActionType.DECREASE:
            return state.set('number', state.get('number') - action.amount);
        default:
            return state
    }
}