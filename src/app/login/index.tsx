
import * as React from 'react'
import './index.less'

import ContentPage from './components/content-page'
import Footer from './components/footer'




export default class Login extends React.PureComponent<any, any> {


    render(){
        return(
            <div className={'login-main'}>
                <ContentPage/>
                <Footer/>
            </div>
        )
    }



}