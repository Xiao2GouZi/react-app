import * as React from "react";
import * as ReactDOM from "react-dom";


import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route} from "react-router";
import { Link } from "react-router-dom"

import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    // push
} from "react-router-redux";

import * as reducers from "./reducers"; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))




import registerServiceWorker from './registerServiceWorker';




import Home from './app/home'
import Me from './app/me'
import './index.css'





ReactDOM.render(
    <Provider store={store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <div className={'content'}>
                <div className={'link'}>
                    <Link to="/home" className={'item'}>Home</Link>
                    <Link to="/me" className={'item'}>Me</Link>
                </div>


                <Route path="/me" component={Me} />
                <Route path="/home" component={Home} />

            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);




registerServiceWorker();




















