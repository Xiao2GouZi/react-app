
import * as React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {Button} from 'antd'



import * as LoginAction from '../action'
import {ILoginContentPageActions, ILoginContentPageProps, ELoginOrRegister, ELoginType} from '../../../type'
import '../index.less'







//二维码
// https://www.zhihu.com/api/v3/account/api/login/qrcode/b8WPmSVzSSuA4sUq/image




class ContentPage extends React.PureComponent<ILoginContentPageProps & ILoginContentPageActions, any> {

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
                               <path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                                     fillRule={'evenodd'}/>
                           </g>
                       </svg>
                        <p>登录知乎，发现更大的世界</p>
                    </div>


                    <div className={'card-content'}>




                        <div className={'login-content'}>



                            <Button block
                                    size={'large'}
                                    type="primary"
                                    loading={loginRegisterLoading}
                                    onClick={this.login}>{loginRegister === ELoginOrRegister.login ? '登录' : '注册'}</Button>

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
                                                    href={'https://open.weixin.qq.com/connect/qrconnect?appid=wx268fcfe924dcb171&redirect_uri=https%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fwechat&response_type=code&scope=snsapi_login&state=36623838623933652d346438392d343236302d396539622d356139663034316430663834#wechat'}/>
                                            <Button icon={'qq'}
                                                    target={'_blank'}
                                                    className={'third-login'}
                                                    href={'https://api.weibo.com/oauth2/authorize?scope=email&state=36623838623933652d346438392d343236302d396539622d356139663034316430663834&redirect_uri=http%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fsina&response_type=code&client_id=3063806388'}/>
                                            <Button icon={'weibo'}
                                                    target={'_blank'}
                                                    className={'third-login'}
                                                    href={'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&scope=get_user_info%2Cget_info%2Cadd_t%2Cadd_pic_t%2Cget_other_info%2Cget_fanslist%2Cget_idollist%2Cadd_idol%2Cadd_share&state=36623838623933652d346438392d343236302d396539622d356139663034316430663834&redirect_uri=https%3A%2F%2Fwww.zhihu.com%2Foauth%2Fcallback%2Fqqconn&response_type=code&client_id=100490701'}/>
                                        </div> :
                                        <Button className={'item'}
                                                onClick={() => this.checkLoginType(ELoginType.SocialContact)}>社交账号登陆</Button>
                                }
                            </div>



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

    // weiChatLogin = () => {
    //
    // }







    /**
     *  切换登录,注册
     * */
    checkLogin = () => {
        let {loginRegister} = this.props;
        this.props.checkLoginOrRegister(loginRegister === ELoginOrRegister.login ? ELoginOrRegister.register : ELoginOrRegister.login)
    };









}


export default  connect(
    (state: any): ILoginContentPageProps => {
        let reducer = state.LoginReducer.toJS();
        return {
            loginRegister: reducer.loginRegister,
            loginRegisterLoading: reducer.loginRegisterLoading,
            loginType: reducer.loginType
        }
    },
    (dispatch: any): ILoginContentPageActions => bindActionCreators(LoginAction, dispatch)
)(ContentPage)


