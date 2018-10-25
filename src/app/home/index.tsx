
import * as React from 'react'
import './index.css'
import { connect } from 'react-redux'
import {increase, decrease} from './actions'
import { push } from 'react-router-redux'
// import * as Pref from 'react-addons-perf'



class Home extends React.PureComponent<any, any>{

    componentDidMount() {
        // Pref.start()
    }

    componentDidUpdate(){
        // Pref.stop()
    }

    render() {
        let {number, increase, decrease, selected} = this.props;
        return (
            <div>
                Some state changes:
                {number}
                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>

                <button onClick={selected}>点我</button>

            </div>
        )
    }


}


export default connect(
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
            dispatch(push('/me'))
        }
    })
)(Home)