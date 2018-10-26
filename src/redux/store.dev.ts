
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import rootReducers from "./reducers";
import { History } from 'history';
import * as Immutable from 'immutable';
import {createLogger} from 'redux-logger'  //日志
import thunk from 'redux-thunk';   //异步
import { batchStoreEnhancer, batchMiddleware } from './redux-batch-enhancer'   //通知发送多个dispatch

const store = (history:History) => {
    const middleware = [] as Array<any>;   //中间件集合
    middleware.push(routerMiddleware(history));   //
    middleware.push(thunk);   //异步
    middleware.push(batchMiddleware);
    /**
     *  日志
     */
    const stateTransformer = (state: any) => {       //是将Immutable的转成可读
        let newState = {};
        for (let i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        }
        return newState;
    };
    const loggerMiddleware = createLogger({
        collapsed:true,
        diff: true,
        stateTransformer
    });
    middleware.push(loggerMiddleware);
    return  createStore(
        combineReducers({
            ...rootReducers,
            router: routerReducer
        }),
        compose(
            applyMiddleware(...middleware),
            batchStoreEnhancer
        )
    )
};
export default store