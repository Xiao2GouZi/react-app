
import {ReduxActionType} from '../../type'


export const increase = (n: number) => {
    return {
        type: ReduxActionType.INCREASE,
        amount: n
    }
};

export const decrease =  (n: number) => {
    console.log('开始了', n);
    return {
        type: ReduxActionType.DECREASE,
        amount: n
    }

    // return async (dispatch: any) => {
    //     try {
    //
    //         for (let i = 100; i-- ; i > 0) {
    //             console.log('-----------', i)
    //         }
    //
    //         console.log('------- n ', n);
    //         dispatch({
    //             type: ReduxActionType.DECREASE,
    //             amount: n
    //         }) ;
    //         return 1235
    //     } catch {
    //         dispatch({
    //             type: ReduxActionType.DECREASE,
    //             amount: n
    //         }) ;
    //         return 3333
    //     }
    // }
}