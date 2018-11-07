import * as LoginAction from "../app/login/action";


export interface IAsyncResult<T> {
    res: T;
    err: any;
}


export interface IResponse {
    data: any;
    status: number;
    message: string;
}


export interface IConfig {
    host: string,
    requestTimeOut: number,
    isDev: boolean,
    defaultImage: string
}


export interface IReduxAction {
    type: string,
    payload: any
}


export interface ILoginContenPageProps {
    login_register: ELoginOrRegister
}


export interface ILoginContentPageActions {
    checkLoginOrRegister: typeof LoginAction.checkLoginOrRegister,
    login: typeof LoginAction.login,
    register: typeof LoginAction.register

}

export enum ELoginOrRegister {
    login = 'login',
    register = 'register'
}



