
import {ReduxActionType} from '../../type'


export const increase = (n: number) => {
    return {
        type: ReduxActionType.INCREASE,
        amount: n
    }
};

export const decrease = (n: number) => {
    return {
        type: ReduxActionType.DECREASE,
        amount: n
    }
}