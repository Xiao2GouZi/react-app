import * as React from 'react'
// import { render } from 'react-dom'


import { Route } from "react-router";

import Home from './home';
import Me from './me'


export default class App extends React.PureComponent {


    render(){
        return(
            <div>
                <Route>
                    <h1>App</h1>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/inbox">Inbox</a></li>
                    </ul>

                    <Route exact path="/home" component={Home} />
                    <Route path="/me" component={Me} />
                </Route>



            </div>
        )
    }







}

