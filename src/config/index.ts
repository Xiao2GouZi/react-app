
import {IConfig} from '@/type'

const Config = {

    host: 'https://www.zhihu.com/',
    requestTimeOut: 10,
    isDev: process.env.NODE_ENV === 'development',

    defaultImage: 'https://pic.qianmi.com/qmui/app/img/default_square.png'


} as IConfig;


export default Config
