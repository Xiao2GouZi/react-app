
import * as React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from "redux";
import {Select, Divider, Input, Icon, Button} from 'antd'

import * as LoginAction from "../action";
import {ELoginType, IOverseasMobileProps, IOverseasMobilePropsAction} from "../../../type";
import {hrefForgetPassWord} from "../data";

let Option = Select.Option;

class OverseasMobile extends React.PureComponent<IOverseasMobileProps & IOverseasMobilePropsAction, any> {

    render(){
        let {normalCountry, supportCountries, loginPassword, loginMobile} = this.props;
        return(
            <div className={'overseas-mobile'}>
                <div className={'mobile'}>
                    <Select defaultValue={`${normalCountry.name} ${normalCountry.code}`}
                            onSelect={this.selectedCountry}
                            className={'country-item'}>
                        {
                            supportCountries.map((item, index) => {
                                return (
                                    <Option key={`${index}`}>{`${item.name} ${item.code}`}</Option>
                                )
                            })
                        }
                    </Select>
                    <Divider type="vertical" />
                    <Input placeholder={'请输入手机号'}
                           style={{ width: '50%' }}
                           className={'input-mobile'}
                           value={loginMobile}
                           onChange={this.mobileChange}/>
                </div>
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
     *  选择国家
     * */
    selectedCountry = (key: string) => {
        let {actionSelectedCountry, supportCountries} = this.props;
        actionSelectedCountry(supportCountries[Number(key)])
    };

    /**
     *  电话号码
     * */
    mobileChange = (e: any) => {
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
    (state: any): IOverseasMobileProps => {
        let reducer = state.LoginReducer.toJS();
        return {
            supportCountries: reducer.supportCountries,
            normalCountry: reducer.normalCountry,
            loginMobile: reducer.loginMobile,
            loginPassword: reducer.loginPassword,
        }
    },
    (dispatch: Dispatch): IOverseasMobilePropsAction => bindActionCreators(LoginAction, dispatch)
)(OverseasMobile);

