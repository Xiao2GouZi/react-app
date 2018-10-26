import * as React from "react";
import * as ReactDOM from "react-dom";


import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route} from "react-router";
import { Link } from "react-router-dom"
import {ConnectedRouter} from 'react-router-redux';
const history = createHistory();
import Store from './redux/store'
import registerServiceWorker from './registerServiceWorker';

import Home from './app/home'
import Me from './app/me'
import Test from './app/test'
import './index.css'





ReactDOM.render(
    <Provider store={Store(history)}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <div className={'content'}>
                <div className={'link'}>
                    <Link to="/home" className={'item'}>Home</Link>
                    <Link to="/me" className={'item'}>Me</Link>
                    <Link to="/test" className={'item'}>Test</Link>
                </div>
                <Route path="/me" component={Me} />
                <Route path="/home" component={Home} />
                <Route path="/test" component={Test} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);




registerServiceWorker();




















