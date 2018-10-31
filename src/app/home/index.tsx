
import * as React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { Button } from 'antd';

import  * as HomeAction from './actions'
import {IGetHotGoodsResponse} from '../../type'
import './index.css'



interface IHomeProps {
    number: number,
    loading: boolean,
    goodsData: IGetHotGoodsResponse,
    loadDataErr: string,

}

interface IHomeActionProps {
    downloadData: typeof HomeAction.downloadData,
    increase: typeof HomeAction.increase,
    selected: typeof HomeAction.selected,
    decrease: typeof HomeAction.decrease
}


class Home extends React.PureComponent<IHomeProps & IHomeActionProps>{

    componentDidMount() {
        this.props.downloadData();
    }




    render() {
        let {number, increase, selected, decrease, loading, loadDataErr} = this.props;
        return (
            <div>
                Some state changes:
                {number}

                <div>{loadDataErr}</div>

                <Button onClick={() => increase(1)}>Increase</Button>
                <Button onClick={() => decrease(1)}>Decrease</Button>
                <Button onClick={() => selected('/test')}>点我</Button>
                {
                    loading && <div>加载中</div>
                }
            </div>
        )
    }
}


export default  connect(
    (state: any): IHomeProps => {
        let reducer = state.HomeReducer.toJS();
        return {
            number: reducer.number,
            loading: reducer.loading,
            goodsData: reducer.goodsData,
            loadDataErr: reducer.loadDataErr
        }
    },
    (dispatch: any): IHomeActionProps => bindActionCreators(HomeAction, dispatch)
)(Home)


// No valid rules have been specified for TypeScript files
