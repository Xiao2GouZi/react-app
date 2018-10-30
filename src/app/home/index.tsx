
import * as React from 'react'
import './index.css'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import  * as HomeAction from './actions'
import {IGetHotGoodsResponse} from '../../type'


interface IHomeProps {
    number: number,
    loading: boolean,
    goodsData: IGetHotGoodsResponse,
    loadDataErr: string,
    downloadData: () => void,
    increase: (n: number) => void,
    selected: (n: string) => void,
    decrease: (n: number) => void
}


class Home extends React.PureComponent<IHomeProps, any>{

    componentDidMount() {
        this.props.downloadData();
    }




    render() {
        let {number, increase, selected, decrease, loading, goodsData} = this.props;
        console.log('---------', goodsData);
        return (
            <div>
                Some state changes:
                {number}
                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>
                <button onClick={() => selected('/test')}>点我</button>
                {
                    loading && <div>加载中</div>
                }
            </div>
        )
    }
}


export default  connect(
    (state: any) => {
        let reducer = state.HomeReducer.toJS();
        return {
            number: reducer.number,
            loading: reducer.loading,
            goodsData: reducer.goodsData,
            loadDataErr: reducer.loadDataErr
        }
    },
    (dispatch: any) => bindActionCreators(HomeAction, dispatch)
)(Home)