import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route, Switch } from "react-router";
// import { Link } from "react-router-dom"
import {ConnectedRouter} from 'react-router-redux';


const history = createHistory();
import registerServiceWorker from './registerServiceWorker';
import {Store} from '@/redux'
import '@/styles/index.less'


import Home from './app/home'
// import Me from './app/me'
// import Test from './app/test'
import Login from './app/login'


ReactDOM.render(
    <Provider store={Store(history)}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={Login} />
                <Route path="/home" component={Home} />

                {/*<Redirect from={'/'} to={'/home'}/>*/}

            </Switch>

            {/*<div className={'content'}>*/}
                {/*/!*<div className={'link'}>*!/*/}
                    {/*/!*<Link to="/" className={'item'}>Login</Link>*!/*/}
                    {/*/!*<Link to="/home" className={'item'}>Home</Link>*!/*/}
                {/*/!*</div>*!/*/}
                {/*<Route path="/" component={Login} />*/}
                {/*<Route path="/home" component={Home} />*/}
            {/*</div>*/}
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();




















