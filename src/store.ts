
import { createStore, combineReducers, applyMiddleware } from "redux";

import createHistory from "history/createBrowserHistory";

import { routerReducer, routerMiddleware } from "react-router-redux";

import rootReducers from "./reducers";

const history = createHistory();

import thunk from 'redux-thunk';   //异步


import * as Immutable from 'immutable';
import {createLogger} from 'redux-logger'  //日志


const middleware = [] as Array<any>;   //中间件集合
middleware.push(routerMiddleware(history));

if (process.env.NODE_ENV === `development`) {
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
}

middleware.push(thunk);   //异步




const store = createStore(
    combineReducers({
        ...rootReducers,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
);


export default store