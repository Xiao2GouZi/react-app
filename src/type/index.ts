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


export interface ILoginContentPageProps {
    loginRegister: ELoginOrRegister,
    loginRegisterLoading: boolean,
    loginType: ELoginType,
}


export interface ILoginContentPageActions {
    checkLoginOrRegister: typeof LoginAction.checkLoginOrRegister,
    login: typeof LoginAction.login,
    register: typeof LoginAction.register,
    checkLoginType: typeof LoginAction.checkLoginType
    downloadSupportCountries: typeof LoginAction.downloadSupportCountries
}


export interface IRegisterPros {
    supportCountries: Array<ISupportCountriesItem>
    normalCountry: ISupportCountriesItem,
    acceptCodeType: ERegisterCheckAcceptCode,
    registerMobile: string,
    registerCode: string,
    loginType: ELoginType,
}

export interface IRegisterPropsActions {
    actionCheckAcceptCode: typeof LoginAction.actionCheckAcceptCode
    actionSelectedCountry: typeof LoginAction.actionSelectedCountry
    actionRegisterMobileChange: typeof LoginAction.actionRegisterMobileChange
    actionRegisterCodeChange: typeof LoginAction.actionRegisterCodeChange
    checkLoginType: typeof LoginAction.checkLoginType

}




export interface IMobileEmailProps {
    loginMobile: string,
    loginPassword: string
}


export interface IMobileEmailProsActions {
    actionMobileEmailChangeMobile: typeof LoginAction.actionMobileEmailChangeMobile,
    actionMobileEmailChangePassword: typeof LoginAction.actionMobileEmailChangePassword,
    checkLoginType: typeof LoginAction.checkLoginType
}


export enum ELoginOrRegister {
    login = 'login',
    register = 'register'
}





export enum ELoginType {
    QrCode = 'QrCode',
    OverseasMobile = 'OverseasMobile',
    SocialContact = 'SocialContact',
    EmailOrMobile = 'EmailOrMobile',
    MobileCode = 'MobileCode',
}


export interface ISupportCountriesItem {
    is_hot: boolean,
    code: string,
    name: string,
    abbr: string
}

export enum ERegisterCheckAcceptCode {
    Voice = 'Voice',
    Message = 'Message'
}
