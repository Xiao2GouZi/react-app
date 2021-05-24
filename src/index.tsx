import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createBrowserHistory} from "history";
import { Route, Switch} from "react-router";
import {ConnectedRouter} from 'react-router-redux';

const history = createBrowserHistory();
import registerServiceWorker from './registerServiceWorker';
import {Store} from '&/redux'
import '&/styles/index.less'

import Home from './app/home'
import Login from './app/login'

let _store = Store(history)

console.log(' ------ > ', _store)

ReactDOM.render(
    <Provider store={Store(history)}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();




















