
import * as React from 'react'
import {Affix, Button} from 'antd'

import ContentPage from './components/content-page'
import Footer from './components/footer'

export default class Login extends React.PureComponent<any, any> {

    render(){
        return(
            <div className={'login-main'}>
                <ContentPage/>
                <Footer/>
                <Affix offsetBottom={0}
                       style={{position: 'absolute', right: 12, bottom: 12}}>
                    <Button icon={'calendar'}
                            onClick={this.feedback}/>
                </Affix>

            </div>
        )
    }

    /**
     *  意见反馈
     * */
    feedback = () => {
        console.log('------- 开启意见反馈')
    }



}