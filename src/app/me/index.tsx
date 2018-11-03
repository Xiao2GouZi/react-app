
import * as React from 'react'
import './index.css';
import { Mention, Radio } from 'antd';




export default class Me extends React.PureComponent<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }


    render() {
        const { toContentState } = Mention;
        let { searchValue } = this.state

        return (
            <div style={{width: '100%'}}>
                    <Mention style={{ width: '100%' }}
                             onChange={this.onChange}
                             defaultValue={toContentState('@afc163')}
                             suggestions={['163.com', 'qq.com', 'hhh', 'RaoHai', '中文', 'にほんご']}
                             onSelect={this.onSelect}
                             notFoundContent={'找不到'}
                             prefix={searchValue}/>

            </div>
        );
    }

    onChange = (contentState: any) => {
        const { toString } = Mention;
        console.log(toString(contentState))
    };

    onSelect = (e: string) => {
        console.log('--- selected', e)
    }

}
