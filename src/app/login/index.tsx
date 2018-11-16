
import * as React from 'react'
import {Affix, Button} from 'antd'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

import ContentPage from './components/content-page'
import Footer from './components/footer'
import {bindActionCreators, Dispatch} from "redux";
import * as LoginAction from "&/app/login/action";

interface ILogin {
    loginStatus: boolean
}

class Login extends React.PureComponent<ILogin, any> {

    public render(){
        const {loginStatus} = this.props;
        if (loginStatus) {
            return <Redirect to={'/home'}/>
        }else {
            return(
                <div className={'login-main'}>
                    <ContentPage/>
                    <Footer/>
                    <Affix offsetBottom={0}
                           style={{position: 'absolute', right: 12, bottom: 12}}>
                        <Button icon={'calendar'}
                                onClick={this.feedback}/>
                    </Affix>

                </div>
            )
        }
    }

    /**
     *  意见反馈
     */
    private feedback = () => {
        console.log('------- 开启意见反馈')
    }
}

export default connect(
    (state: any): ILogin => state.LoginReducer.toJS(),
    (dispatch: Dispatch) => bindActionCreators(LoginAction, dispatch)
)(Login)




