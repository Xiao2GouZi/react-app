
import * as React from 'react'
import {Divider, Button} from 'antd'
import {connect} from 'react-redux'

import {loginQrCode, zhihuApp} from '../data'
import * as LoginAction from "../action";
import {bindActionCreators, Dispatch} from "redux";
import {IQrCodePropsAction, ELoginType} from "../../../type";


class QrCode extends React.PureComponent<IQrCodePropsAction, any> {

    render(){
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
     * */
    changeLoginType = () =>{
        this.props.checkLoginType(ELoginType.EmailOrMobile)
    }

}

export default connect(
    () => {return},
    (dispatch: Dispatch): IQrCodePropsAction => bindActionCreators(LoginAction, dispatch)
)(QrCode);