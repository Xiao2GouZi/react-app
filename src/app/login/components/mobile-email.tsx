
import * as React from 'react'
import {Divider, Input, Icon, Button} from 'antd'
import {hrefForgetPassWord} from '../data'
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from "redux";
import * as LoginAction from "../action";
import {IMobileEmailProsActions, IMobileEmailProps, ELoginType} from "../../../type";


class MobileEmail extends React.PureComponent<IMobileEmailProps & IMobileEmailProsActions , any> {

    render(){
        let {loginMobile, loginPassword} = this.props
        return(
            <div className={'mobile-email'}>
                <Input placeholder={'手机号或邮箱'}
                       className={'input-mobile'}
                       value={loginMobile}
                       onChange={this.changeMobile}/>
                <Divider/>
                <div className={'password'}>
                    <Input placeholder={'密码'}
                           className={'input-mobile'}
                           style={{width: 'auto'}}
                           value={loginPassword}
                           onChange={this.changePassword}/>
                    <Icon type={'eye'}/>
                </div>
                <Divider/>
                <div className={'password'}>
                    <Button className={'button-item mobile-code'}
                            onClick={this.checkoutMobileCode}>手机验证码登录</Button>
                    <Button href={hrefForgetPassWord}
                            target={'_blank'}
                            className={'button-item'}>忘记密码</Button>
                </div>
            </div>
        )
    }

    /**
     *  切换到验证码登录
     * */
    checkoutMobileCode = () => {
        this.props.checkLoginType(ELoginType.MobileCode)
    };

    /**
     *  手机号码改变
     * */
    changeMobile = (e: any) => {
        this.props.actionMobileEmailChangeMobile(e.target.value)
    };

    /**
     *  输入密码
     * */
    changePassword = (e: any) => {
        this.props.actionMobileEmailChangePassword(e.target.value)
    }



}


export default connect(
    (state: any): IMobileEmailProps => {
        let reducer = state.LoginReducer.toJS();
        return {
            loginMobile: reducer.loginMobile,
            loginPassword: reducer.loginPassword
        }
    },
    (dispatch: Dispatch): IMobileEmailProsActions => bindActionCreators(LoginAction, dispatch)
)(MobileEmail);



// export default MobileEmail