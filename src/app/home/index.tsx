
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Row, Col, Layout, Menu} from 'antd'

import  * as HomeAction from './actions'

const { Header, Content } = Layout;


interface IHomeProps {
    number: number,
    loading: boolean,
    loadDataErr: string,
}

interface IHomeActionProps {
    actionDownloadData: typeof HomeAction.actionDownloadData,
}


class Home extends React.PureComponent<IHomeProps & IHomeActionProps>{

    public componentDidMount() {
        this.props.actionDownloadData(true);
    }


    public render() {
        return (
            <div className={'home-content'}>

                <Row type={'flex'}
                     justify={'center'}
                     gutter={16}
                     align={'top'}
                     style={{margin: '10px auto'}}>

                    <Col span={11} >
                        <Header className={'header'}>
                            <Menu theme="light"
                                  mode="horizontal"
                                  defaultSelectedKeys={['1']}
                                  className={'menu'}>
                                <Menu.Item key="1">推荐</Menu.Item>
                                <Menu.Item key="2">关注</Menu.Item>
                                <Menu.Item key="3">热销</Menu.Item>
                            </Menu>
                        </Header>
                        <Content>
                            <div style={{background: '#fff'}}>0998098aksdajshda</div>
                        </Content>
                    </Col>
                    <Col span={5} >
                        <div style={{background: 'yellow'}}>askdjalskdjaksd</div>

                    </Col>



                </Row>









            </div>
        )
    }
}


export default  connect(
    (state: any): IHomeProps =>  state.HomeReducer.toJS(),
    (dispatch: any): IHomeActionProps => bindActionCreators(HomeAction, dispatch)
)(Home)