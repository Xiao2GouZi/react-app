
import * as React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux';
import {Button} from 'antd'

import * as LoginAction from '../action'
import {ILoginContentPageActions, ILoginContentPageProps, ELoginOrRegister, ELoginType} from '../../../type'
import '../index.less'

import {zhiHuLogin, hrefWeChatLogin, hrefQQLogin, hrefWeiboLogin, hrefPrivacy, hrefSignUp, hrefProtocol} from '../data'

import Register from './register'
import MobileEmail from './mobile-email'
import OverseasMobile from './overseas-mobile'
import QrCode from './qr-code'



class ContentPage extends React.PureComponent<ILoginContentPageProps & ILoginContentPageActions, any> {

    componentDidMount() {
        this.props.downloadSupportCountries();
    }

    render(){
        let {loginRegister, loginRegisterLoading, loginType} = this.props;
        return(
            <div className={'content-page'}>
                <div className={'card'}>
                    <div className={'card-header'}>
                       <svg className={'logo'}
                            viewBox={'0 0 200 91'}
                            width={'140px'}
                            height={'65.625px'}
                            aria-hidden="true">
                           <title/>
                           <g>
                               <path d={zhiHuLogin}
                                     fillRule={'evenodd'}/>
                           </g>
                       </svg>
                        <p>登录知乎，发现更大的世界</p>
                    </div>
                    <div className={'card-content'}>
                        <div className={'login-content'}>
                            {
                                this.loginContent()
                            }
                            {
                                loginType === ELoginType.QrCode ? null :
                                    <Button block
                                            size={'large'}
                                            type="primary"
                                            loading={loginRegisterLoading}
                                            onClick={this.login}
                                            className={'login'}>{loginRegister === ELoginOrRegister.login ? '登录' : '注册'}</Button>
                            }


                            {
                                loginRegister === ELoginOrRegister.register ?
                                    <div className={'login-footer'}>
                                        <span>注册即代表同意</span>
                                        <Button className={'item'}
                                                href={hrefSignUp}>{'《知乎协议》'}</Button>
                                        <Button className={'item'}
                                                href={hrefPrivacy}>{'《隐私政策》'}</Button>
                                        <a href={hrefProtocol}>注册机构号</a>
                                    </div>
                                    : loginType === ELoginType.QrCode ? null
                                    : this.loginType()
                            }
                        </div>
                        <div className={'login-switch'}
                             onClick={this.checkLogin}>
                            {loginRegister === ELoginOrRegister.login ? '已有' : '没有'}帐号？
                            <span>{loginRegister === ELoginOrRegister.login ? '登录' : '注册'}</span>
                        </div>
                    </div>
                </div>
                <Button className="download-app">下载知乎 App</Button>
            </div>
        )
    }

    /**
     *  各种 登录 方式
     * */
    loginContent = () => {
        let {loginRegister, loginType} = this.props;
        if (loginRegister === ELoginOrRegister.register )  {
            return <Register/>
        }else {
            if (loginType === ELoginType.EmailOrMobile) {
                return <MobileEmail/>
            } else if (loginType === ELoginType.QrCode) {
                return <QrCode/>
            } else if (loginType === ELoginType.OverseasMobile) {
                return <OverseasMobile/>
            } else if (loginType === ELoginType.MobileCode) {
                return <Register/>
            }
            return <MobileEmail/>
        }
    };

    /**
     *
     * */
    loginType = () => {
        let {loginType} = this.props;
        return (
            <div className={'login-footer'}>
                <Button className={'item'}
                        onClick={() => this.checkLoginType(ELoginType.QrCode)}>二维码登录</Button>
                <span className={'dot'}>.</span>
                <Button className={'item'}
                        onClick={() => this.checkLoginType(ELoginType.OverseasMobile)}>{
                    loginType === ELoginType.EmailOrMobile ||
                    loginType === ELoginType.SocialContact ||
                    loginType === ELoginType.QrCode? '海外手机登录' : '邮箱账号登陆'
                }</Button>
                <span className={'dot'}>.</span>
                {
                    loginType === ELoginType.SocialContact ?
                        <div>
                            <Button icon={'wechat'}
                                    target={'_blank'}
                                    className={'third-login'}
                                    href={hrefWeChatLogin}/>
                            <Button icon={'weibo'}
                                    target={'_blank'}
                                    className={'third-login'}
                                    href={hrefWeiboLogin}/>
                            <Button icon={'qq'}
                                    target={'_blank'}
                                    className={'third-login'}
                                    href={hrefQQLogin}/>
                        </div> :
                        <Button className={'item'}
                                onClick={() => this.checkLoginType(ELoginType.SocialContact)}>社交账号登陆</Button>
                }
            </div>
        )
    };


    /**
     *  登录/注册
     * */
    login = () => {
        let {loginRegister, login, register} = this.props;
        loginRegister === ELoginOrRegister.login ? login() : register()
    };

    /**
     *  切换登录方式
     * */
    checkLoginType = (type: ELoginType) => {
        let {checkLoginType, loginType} = this.props;
        if (type === ELoginType.OverseasMobile) {
            type = loginType === type ? ELoginType.EmailOrMobile : ELoginType.OverseasMobile
        }
        checkLoginType(type)
    };

    /**
     *  切换登录,注册
     * */
    checkLogin = () => {
        let {loginRegister} = this.props;
        this.props.checkLoginOrRegister(loginRegister === ELoginOrRegister.login ? ELoginOrRegister.register : ELoginOrRegister.login)
    };









}


export default connect(
    (state: any): ILoginContentPageProps => {
        let reducer = state.LoginReducer.toJS();
        return {
            loginRegister: reducer.loginRegister,
            loginRegisterLoading: reducer.loginRegisterLoading,
            loginType: reducer.loginType,
        }
    },
    (dispatch: Dispatch) => bindActionCreators(LoginAction, dispatch)
)(ContentPage)


