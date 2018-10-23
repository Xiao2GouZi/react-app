import {ReduxActionType} from '../../type'


const initialState = {
    number: 1
};

export default function update(state = initialState, action: any) {
    switch (action.type) {
        case ReduxActionType.INCREASE:
            return { number: state.number + action.amount };
        case ReduxActionType.DECREASE:
            return { number: state.number - action.amount };
        default:
            return state
    }
}