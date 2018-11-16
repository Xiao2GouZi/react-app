
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducers from './reducers';
import { History } from 'history';
import * as Immutable from 'immutable';
import {createLogger} from 'redux-logger'  // 日志
import thunk from 'redux-thunk';   // 异步
import { batchStoreEnhancer, batchMiddleware } from './middleware/redux-batch-enhancer'   // 通知发送多个dispatch
import { composeWithDevTools } from 'redux-devtools-extension';   // 可视化日志
import { dataUndefinedMiddleware } from './middleware/undefined-string'

const store = (history: History) => {
    const middleware = [] as any[];   // 中间件集合
    middleware.push(routerMiddleware(history));   //
    middleware.push(thunk);   // 异步
    middleware.push(batchMiddleware);
    middleware.push(dataUndefinedMiddleware);
    /**
     *  日志
     */
    const stateTransformer = (state: any) => {       // 是将Immutable的转成可读
        const newState = {};
        for (const i of Object.keys(state)) {
            newState[i] = Immutable.Iterable.isIterable(state[i]) ? state[i].toJS() : state[i]
        }
        return newState;
    };
    const loggerMiddleware = createLogger({
        collapsed: true,
        diff: true,
        stateTransformer
    });
    middleware.push(loggerMiddleware);
    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });
    return createStore(
        combineReducers({
            ...rootReducers,
            router: routerReducer
        }),
        composeEnhancers(
            applyMiddleware(...middleware),
            batchStoreEnhancer,
        )
    );
};
export default store;