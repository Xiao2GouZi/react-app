
import * as React from 'react'
import './index.css'
import { connect } from 'react-redux'
import {increase, decrease} from './actions'
import { push } from 'react-router-redux'
// import { withRouter } from 'react-router-dom'



class Home extends React.PureComponent<any, any>{

    render() {
        let {number} = this.props;
        return (
            <div>
                Some state changes:
                {number}
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>

                <button onClick={this.selected}>点我</button>

            </div>
        )
    }

    increase = () => {
        let { increase } = this.props;
        increase(1);
    };

    decrease = () => {
        let { decrease } = this.props;
        decrease(1);
    };

    selected = () => {
        let { selected } = this.props;
        // history.push('/test')
        selected();
    }


}


export default  connect(
    (state: any) => {
        let reducer = state.HomeReducer.toJS()
        return {
            number: reducer.number
        }
    },
    (dispatch: any) => ({

        increase: (number: number) => {
            dispatch(increase(number))
        },

        decrease: (number: number) => {
            dispatch(decrease(number))
        },

        selected: () => {

            console.log('--------');

            dispatch(push('/test'))
        }
    })
)(Home)