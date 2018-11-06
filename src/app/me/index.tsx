
import * as React from 'react'
import './index.css';
import { Mention } from 'antd';




export default class Me extends React.PureComponent<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }


    render() {

        return (
            <div style={{width: '100%'}}>

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
