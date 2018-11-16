
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';   // 异步
import { batchStoreEnhancer, batchMiddleware } from './middleware/redux-batch-enhancer';  // 通知发送多个dispatch
import { History } from 'history';
import { dataUndefinedMiddleware } from './middleware/undefined-string';

const store = (history: History) => {
    const middleware = [] as any[];   // 中间件集合
    middleware.push(routerMiddleware(history));
    middleware.push(thunk);   // 异步
    middleware.push(batchMiddleware);
    middleware.push(dataUndefinedMiddleware);
    return createStore(
        combineReducers({
            ...rootReducers,
            router: routerReducer
        }),
        compose(
            applyMiddleware(...middleware),
            batchStoreEnhancer
        )
    );
};


export default store;