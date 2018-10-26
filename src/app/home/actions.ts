
import {ReduxActionType} from '../../type'
import { push } from 'react-router-redux'


export const increase = (n: number) => {
    return {
        type: ReduxActionType.INCREASE,
        amount: n
    }
};

export const decrease =  (n: number) => {
    return {
        type: ReduxActionType.DECREASE,
        amount: n
    }
};

export const selected = (path: string) => {
    return (dispatch: any) => {
        dispatch(push(path))
    }
}