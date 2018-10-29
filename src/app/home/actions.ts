
import { push } from 'react-router-redux';
import {INCREASE, DECREASE} from '../../redux/action-type'


import { createAction } from 'redux-actions';



export const increase =  createAction(INCREASE ,(n: number) => n);

export const decrease =  createAction(DECREASE ,(n: number) => n);


export const selected = (path: string) => {
    return (dispatch: any) => {
        dispatch(push(path))
    }
};
