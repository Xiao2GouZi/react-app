
import * as React from 'react'
import {Divider, Input, Icon, Button} from 'antd'
import {hrefForgetPassWord} from '../data'


class MobileEmail extends React.PureComponent<any, any> {

    render(){
        return(
            <div className={'mobile-email'}>

                <Input placeholder={'手机号或邮箱'}
                       className={'input-mobile'}/>

                <Divider/>

                <div className={'password'}>

                    <Input placeholder={'密码'}
                           className={'input-mobile'} style={{width: 'auto'}}/>
                    <Icon type={'eye'}/>

                </div>

                <Divider/>

                <div className={'password'}>
                    <Button className={'button-item mobile-code'} >手机验证码登录</Button>

                    <Button href={hrefForgetPassWord}
                            target={'_blank'}
                            className={'button-item'}>忘记密码</Button>

                </div>


            </div>
        )
    }




}



export default MobileEmail