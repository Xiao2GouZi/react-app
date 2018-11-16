
import * as React from 'react';
import { Divider, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";

import { loginQrCode, zhihuApp } from '../data';
import * as LoginAction from "../action";
import * as TSType from "&/type";

class QrCode extends React.PureComponent<TSType.IQrCodePropsAction, any> {

    public render(){
        return(
            <div className={'qr-code-login'}>
                <img src={loginQrCode}
                     height="150"
                     width="150"
                     className={'code-image'}/>
                <p>打开
                    <a href={zhihuApp}
                       target="_blank">知乎APP</a>
                </p>
                <p>在「我的」页面右上角打开扫一扫</p>
                <Divider/>
                <Button className={'button-item'}
                        onClick={this.changeLoginType}>使用密码登陆</Button>
            </div>
        )
    }

    /**
     *  切换登录模式
     */
    private changeLoginType = () =>{
        this.props.actionCheckLoginType(TSType.ELoginType.EmailOrMobile)
    }

}

export default connect(
    () => {return},
    (dispatch: Dispatch): TSType.IQrCodePropsAction => bindActionCreators(LoginAction, dispatch)
)(QrCode);