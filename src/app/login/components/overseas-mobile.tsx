
import * as React from 'react'
import { connect} from 'react-redux'
import { bindActionCreators, Dispatch } from "redux";
import { Select, Divider, Input, Icon, Button } from 'antd'

import * as LoginAction from "../action";
import * as TSType from "&/type";
import { hrefForgetPassWord } from "../data";

const Option = Select.Option;

class OverseasMobile extends React.PureComponent<TSType.IOverseasMobileProps & TSType.IOverseasMobilePropsAction, any> {

    public render(){
        const {normalCountry, supportCountries, loginPassword, loginMobile} = this.props;
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
     */
   private checkoutMobileCode = () => {
        this.props.actionCheckLoginType(TSType.ELoginType.MobileCode)
    };


    /**
     *  选择国家
     */
    private selectedCountry = (key: string) => {
        const {actionSelectedCountry, supportCountries} = this.props;
        actionSelectedCountry(supportCountries[Number(key)])
    };

    /**
     *  电话号码
     */
    private mobileChange = (e: any) => {
        this.props.actionMobileEmailChangeMobile(e.target.value)
    };

    /**
     *  输入密码
     */
    private changePassword = (e: any) => {
        this.props.actionMobileEmailChangePassword(e.target.value)
    }
}

export default connect(
    (state: any): TSType.IOverseasMobileProps => {
        return state.LoginReducer.toJS();
    },
    (dispatch: Dispatch): TSType.IOverseasMobilePropsAction => bindActionCreators(LoginAction, dispatch)
)(OverseasMobile);

