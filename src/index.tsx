import * as React from "react";
import * as ReactDOM from "react-dom";


import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route} from "react-router";
import { Link } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux";
const history = createHistory();
import Store from './store'


import registerServiceWorker from './registerServiceWorker';



import Home from './app/home'
import Me from './app/me'
import './index.css'





ReactDOM.render(
    <Provider store={Store}>
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




















