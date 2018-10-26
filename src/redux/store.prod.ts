
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import createHistory from "history/createBrowserHistory";

import { routerReducer, routerMiddleware } from "react-router-redux";

import rootReducers from "./reducers";

import thunk from 'redux-thunk';   //异步

// import {enableBatching, batchDispatchMiddleware} from 'redux-batched-actions';   //通知发送多个dispatch

import { batchStoreEnhancer, batchMiddleware } from './redux-batch-enhancer'   //通知发送多个dispatch


const middleware = [] as Array<any>;   //中间件集合

const history = createHistory();
middleware.push(routerMiddleware(history));
middleware.push(thunk);   //异步
middleware.push(batchMiddleware);

const store = createStore(
    combineReducers({
        ...rootReducers,
        router: routerReducer
    }),
    compose(
        applyMiddleware(...middleware),
        batchStoreEnhancer
    )
);


export default store