import * as React from 'react'
import {connect} from 'react-redux'
import { IRegisterPros , ERegisterCheckAcceptCode, IRegisterPropsActions, ELoginType} from "../../../type";
import {bindActionCreators, Dispatch} from "redux";
import * as LoginAction from "../action";
import {Select, Input, Divider, Button} from 'antd'
import '../index.less'

let Option = Select.Option;



class MobileLogin extends React.PureComponent<IRegisterPros & IRegisterPropsActions, any>  {

    render() {
        let {supportCountries, normalCountry, acceptCodeType, registerMobile, registerCode, loginType} = this.props;
        return (
            <div className={'register'}>
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
                           value={registerMobile}
                           onChange={this.mobileChange}/>
                </div>
                <Divider/>
                <div className={'input-code'}>
                    <Input placeholder={acceptCodeType === ERegisterCheckAcceptCode.Voice ? '输入6位语音验证码' : '输入6位短信验证码'}
                           style={{ width: '50%' }}
                           className={'input-mobile'}
                           onChange={this.codeChange}
                           value={registerCode}/>
                    <Button className={'verification-code button-item '}>{acceptCodeType === ERegisterCheckAcceptCode.Voice ? '获取语音验证码' : '获取短信验证码'}</Button>
                </div>
                <Divider/>

                <div className={'check-voice-message'}>
                    {loginType === ELoginType.MobileCode ?
                        <Button className={'button-item'}
                                onClick={this.checkLoginType}>密码登录（手机号或邮箱）</Button>
                         : null
                    }
                    <span onClick={this.checkVoiceOrMessageCode}>{acceptCodeType === ERegisterCheckAcceptCode.Voice ? '接受语音验证码' : '接受短信验证码'}</span>
                </div>
            </div>
        )
    }


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
        this.props.actionRegisterMobileChange(e.target.value)
    };

    /**
     *  验证码
     * */
    codeChange = (e: any) => {
        this.props.actionRegisterCodeChange(e.target.value)
    };


    /**
     *  切换语音验证码和短信验证码
     * */
    checkVoiceOrMessageCode = () => {
        let {actionCheckAcceptCode, acceptCodeType} = this.props;
        let newVar = acceptCodeType === ERegisterCheckAcceptCode.Voice ? ERegisterCheckAcceptCode.Message : ERegisterCheckAcceptCode.Voice;
        actionCheckAcceptCode(newVar)
    };

    /**
     *
     * */
    checkLoginType = () => {
        this.props.checkLoginType(ELoginType.EmailOrMobile)
    }





}





export default connect(
    (state: any): IRegisterPros => {
        let reducer = state.LoginReducer.toJS();
        return {
            supportCountries: reducer.supportCountries,
            normalCountry: reducer.normalCountry,
            acceptCodeType: reducer.acceptCodeType,
            registerCode: reducer.registerCode,
            registerMobile: reducer.registerMobile,
            loginType: reducer.loginType
        }
    },
    (dispatch: Dispatch): IRegisterPropsActions => bindActionCreators(LoginAction, dispatch)
)(MobileLogin);
