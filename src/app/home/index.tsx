
import * as React from 'react'
import './index.css'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import  * as HomeAction from './actions'



class Home extends React.PureComponent<any, any>{

    componentDidMount() {

    }


    render() {
        let {number, increase, selected, decrease} = this.props;
        return (
            <div>
                Some state changes:
                {number}
                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>
                <button onClick={() => selected('/test')}>点我</button>
            </div>
        )
    }

}


export default  connect(
    (state: any) => {
        let reducer = state.HomeReducer.toJS();
        return {
            number: reducer.number
        }
    },
    (dispatch: any) => bindActionCreators(HomeAction, dispatch)
)(Home)