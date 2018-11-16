
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { Button } from 'antd'

import * as LoginAction from '../action'
import * as TSType from '&/type'
import * as LoginData  from '../data'

import Register from './register'
import MobileEmail from './mobile-email'
import OverseasMobile from './overseas-mobile'
import QrCode from './qr-code'


class ContentPage extends React.PureComponent<TSType.ILoginContentPageProps & TSType.ILoginContentPageActions, any> {

    public componentDidMount() {
        this.props.downloadSupportCountries();
    }

    public render(){
        const {loginRegister, loginRegisterLoading, loginType} = this.props;
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
                               <path d={LoginData.zhiHuLogin}
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
                                loginType === TSType.ELoginType.QrCode ? null :
                                    <Button block
                                            size={'large'}
                                            type="primary"
                                            loading={loginRegisterLoading}
                                            onClick={this.login}
                                            className={'login'}>{loginRegister === TSType.ELoginOrRegister.login ? '登录' : '注册'}</Button>
                            }
                            {
                                loginRegister === TSType.ELoginOrRegister.register ?
                                    <div className={'login-footer'}>
                                        <span>注册即代表同意</span>
                                        <Button className={'item'}
                                                href={LoginData.hrefSignUp}>{'《知乎协议》'}</Button>
                                        <Button className={'item'}
                                                href={LoginData.hrefPrivacy}>{'《隐私政策》'}</Button>
                                        <a href={LoginData.hrefProtocol}>注册机构号</a>
                                    </div>
                                    : loginType === TSType.ELoginType.QrCode ? null
                                    : this.loginType()
                            }
                        </div>
                        <div className={'login-switch'}
                             onClick={this.checkLogin}>
                            {loginRegister === TSType.ELoginOrRegister.login ? '已有' : '没有'}帐号？
                            <span>{loginRegister === TSType.ELoginOrRegister.login ? '登录' : '注册'}</span>
                        </div>
                    </div>
                </div>
                <Button className="download-app">下载知乎 App</Button>
            </div>
        )
    }

    /**
     *  各种 登录 方式
     */
    private loginContent = () => {
        const {loginRegister, loginType} = this.props;
        if (loginRegister === TSType.ELoginOrRegister.register )  {
            return <Register/>
        }else {
            if (loginType === TSType.ELoginType.EmailOrMobile) {
                return <MobileEmail/>
            } else if (loginType === TSType.ELoginType.QrCode) {
                return <QrCode/>
            } else if (loginType === TSType.ELoginType.OverseasMobile) {
                return <OverseasMobile/>
            } else if (loginType === TSType.ELoginType.MobileCode) {
                return <Register/>
            }
            return <MobileEmail/>
        }
    };

    /**
     *
     */
    private loginType = () => {
        const {loginType} = this.props;
        return (
            <div className={'login-footer'}>
                <Button className={'item'}
                        onClick={() => this.checkLoginType(TSType.ELoginType.QrCode)}>二维码登录</Button>
                <span className={'dot'}>.</span>
                <Button className={'item'}
                        onClick={() => this.checkLoginType(TSType.ELoginType.OverseasMobile)}>{
                    loginType === TSType.ELoginType.EmailOrMobile ||
                    loginType === TSType.ELoginType.SocialContact ||
                    loginType === TSType.ELoginType.QrCode? '海外手机登录' : '邮箱账号登陆'
                }</Button>
                <span className={'dot'}>.</span>
                {
                    loginType === TSType.ELoginType.SocialContact ?
                        <div>
                            <Button icon={'wechat'}
                                    target={'_blank'}
                                    className={'third-login'}
                                    href={LoginData.hrefWeChatLogin}/>
                            <Button icon={'weibo'}
                                    target={'_blank'}
                                    className={'third-login'}
                                    href={LoginData.hrefWeiboLogin}/>
                            <Button icon={'qq'}
                                    target={'_blank'}
                                    className={'third-login'}
                                    href={LoginData.hrefQQLogin}/>
                        </div> :
                        <Button className={'item'}
                                onClick={() => this.checkLoginType(TSType.ELoginType.SocialContact)}>社交账号登陆</Button>
                }
            </div>
        )
    };


    /**
     *  登录/注册
     */
    private login = () => {
        const {loginRegister, login, register} = this.props;
        loginRegister === TSType.ELoginOrRegister.login ? login() : register()
    };

    /**
     *  切换登录方式
     */
    private checkLoginType = (type: TSType.ELoginType) => {
        const {actionCheckLoginType, loginType} = this.props;
        if (type === TSType.ELoginType.OverseasMobile) {
            type = loginType === type ? TSType.ELoginType.EmailOrMobile : TSType.ELoginType.OverseasMobile
        }
        actionCheckLoginType(type)
    };

    /**
     *  切换登录,注册
     */
    private checkLogin = () => {
        const {loginRegister} = this.props;
        this.props.checkLoginOrRegister(loginRegister === TSType.ELoginOrRegister.login ? TSType.ELoginOrRegister.register : TSType.ELoginOrRegister.login)
    };
}

export default connect(
    (state: any): TSType.ILoginContentPageProps => {
        return state.LoginReducer.toJS();
    },
    (dispatch: Dispatch) => bindActionCreators(LoginAction, dispatch)
)(ContentPage)


