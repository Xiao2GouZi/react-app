/**
 * 网络层封装
 */

import {IAsyncResult, IResponse} from '../type';
import Config from '../config';
import {urlQuery} from './utils'


interface IRequestCommonParam {
    url: string,
    init?: RequestInit,
    body?: string
}

export async function Common<T = any>(param: IRequestCommonParam): Promise<IAsyncResult<T>> {
    let headers: HeadersInit = {
        'Content-Type': 'application/json',
        'mode': 'cors',
        'credentials': 'omit'
    };
    const request: RequestInit = {
        headers,
        ...param.init,
    };
    // 添加网络超时机制
    const timeoutId = setTimeout(() => {
        return { res: null, err: new Error('timeout') };
    }, Config.requestTimeOut * 1000);

    try {
        const response = await fetch(`${Config.host}${param.url}`, request);
        timeoutId && clearTimeout(timeoutId);
        const responseData: IResponse = await response.json();
        const { message, data, status} = responseData;
        let ret = {
            res: status ? data : {} as T,
            err: status != 1 ? message : null,
        };
        return ret;
    } catch (err) {
        timeoutId && clearTimeout(timeoutId);
        let msgText: string = '网络请求失败,请检查网络';
        return { res: {} as T, err: msgText};
    }
}

const Post = <T = any>(param: IRequestCommonParam): Promise<IAsyncResult<T>> => {
    return Common<T>({
        url: param.url,
        init: param.init ? param.init : {
            method: 'POST',
            body: JSON.stringify(param.body)
        }
    })
};

const Delete = <T = any>(param: IRequestCommonParam): Promise<IAsyncResult<T>> => {
    return Common<T>({
        url: param.url,
        init: param.init ? param.init : {
            method: 'DELETE',
            body: JSON.stringify(param.body)
        }
    });
};

/**
 * Put
 */
const Put = <T = any>(param: IRequestCommonParam): Promise<IAsyncResult<T>> => {
    return Common<T>({
        url: param.url,
        init: param.init ? param.init : {
            method: 'PUT',
            body: JSON.stringify(param.body)
        }
    });
};

/**
 * GET
 */
const Get = <T = any>(param: IRequestCommonParam): Promise<IAsyncResult<T>> => {
    let url = param.body ? `${param.url}${urlQuery(param.body)}` : param.url;
    return Common<T>({
        url,
        init: param.init ? param.init : {
            method: 'GET'
        }
    });
}


export default {
    Common,
    Post,
    Get,
    Delete,
    Put,
};