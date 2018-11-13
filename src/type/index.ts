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
    loginStatus: boolean
}

export interface IQrCodePropsAction {
    checkLoginType: typeof LoginAction.checkLoginType
}

export interface ILoginContentPageActions extends IQrCodePropsAction{
    checkLoginOrRegister: typeof LoginAction.checkLoginOrRegister,
    login: typeof LoginAction.login,
    register: typeof LoginAction.register,
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

export interface IRegisterPropsActions extends IQrCodePropsAction{
    actionCheckAcceptCode: typeof LoginAction.actionCheckAcceptCode
    actionSelectedCountry: typeof LoginAction.actionSelectedCountry
    actionRegisterMobileChange: typeof LoginAction.actionRegisterMobileChange
    actionRegisterCodeChange: typeof LoginAction.actionRegisterCodeChange
}




export interface IMobileEmailProps {
    loginMobile: string,
    loginPassword: string
}


export interface IMobileEmailProsActions extends IQrCodePropsAction{
    actionMobileEmailChangeMobile: typeof LoginAction.actionMobileEmailChangeMobile,
    actionMobileEmailChangePassword: typeof LoginAction.actionMobileEmailChangePassword,
}


export interface IOverseasMobileProps {
    supportCountries: Array<ISupportCountriesItem>
    normalCountry: ISupportCountriesItem,
    loginMobile: string,
    loginPassword: string,
}


export interface IOverseasMobilePropsAction {
    actionMobileEmailChangeMobile: typeof LoginAction.actionMobileEmailChangeMobile;
    actionMobileEmailChangePassword: typeof LoginAction.actionMobileEmailChangePassword;
    actionRegisterCodeChange: typeof LoginAction.actionRegisterCodeChange;
    actionSelectedCountry: typeof LoginAction.actionSelectedCountry;
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

export enum EDataType {
    String = 'String',
    Object = 'Object',
    Array = 'Array',
    Function = 'Function',
    Number = 'Number',
    Boolean = 'Boolean',
    Null = 'Null',
    Undefined = 'Undefined',
    RegExp = 'RegExp',
    Date = 'Date'
}




