
import * as React from 'react'
import Config from "&/config";

export default class Footer extends React.PureComponent<any, any> {

    private links = [
        {title: '知乎专栏', path: 'https://zhuanlan.zhihu.com'},
        {title: '圆桌', path: `${Config.host}roundtable`},
        {title: '发现', path: `${Config.host}explore`},
        {title: '移动应用', path: `${Config.host}app`},
        {title: '联系我们', path: `${Config.host}contact`},
        {title: '来知乎工作', path: 'https://app.mokahr.com/apply/zhihu'},
        {title: '注册机构号', path: `${Config.host}/org/signup`}];

    public render(){
        return(
            <div className={'footer'}>
                <div className={'_link'}>
                    {
                        this.links.map((item, index) => {
                            return this.aElement({href: item.path, title: item.title})
                        })
                    }
                </div>
                <div className={'_link'}>
                    <span>© 2018 知乎</span>
                    {this.aElement({href: 'http://www.miibeian.gov.cn/', title: '京 ICP 证 110745 号'})}
                    <span>京公网安备 11010802010035 号
                        {this.aElement({href: 'https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg', title: '出版物经营许可证'})}
                    </span>
                </div>

                <div className={'_link'}>
                    {this.aElement({href: 'https://zhuanlan.zhihu.com/p/28852607', title: '侵权举报'})}
                    {this.aElement({href: 'http://www.12377.cn/', title: '网上有害信息举报专区'})}
                    {this.aElement({href: 'https://www.zhihu.com/jubao', title: '儿童色情信息举报专区'})}
                    <span>违法和不良信息举报：010-82716601</span>
                </div>
                <div className={'integrity'}>
                    <div>
                        <img src="https://static.zhihu.com/static/revved/img/index/chengxing_logo@2x.65dc76e8.png"/>
                        {this.aElement({title: '诚信网站示范企业', href: 'https://credit.cecdc.com/CX20170607038331320388.html'})}
                    </div>
                </div>
            </div>
        )
    }

    private aElement = ({title='', href=''}) => {
        return(
            <a href={href}
               rel="noopener noreferrer"
               target="_blank"
               key={title}>{title}</a>
        )
    }
}