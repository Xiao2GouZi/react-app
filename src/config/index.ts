
import {IConfig} from '../type'

const Config = {

    host: '',
    requestTimeOut: 10,
    isDev: process.env.NODE_ENV === 'development'






} as IConfig;


export default Config
