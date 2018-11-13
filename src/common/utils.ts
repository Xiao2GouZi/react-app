
import {EDataType} from '@/type'
import * as TSTypes from "@/type";

/**
 * object 拼接到url后
 * */
export const urlQuery = (param: Object) => {
    let arr = [];
    for(let i in param){
        if (param.hasOwnProperty(i)) {
            arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(param[i]));
        }
    }
    return arr.join("&");
};

/**
 * url-query转成object
 * */
export const urlObject = (url: string) => {
    let param = url.split('?')[1].split('&');
    let res = {};
    param.forEach(item => {
        let str = item.split('=');
        if(str[0]!=''){
            res[str[0]]=str[1];
        }
    });
    return res;
};

/**
 *  数据类型
 *
 *  ''        ---->   String
 *  {}        ---->   Object
 *  []        ---->   Array
 *  () => {}  ---->   Function
 *  1         ---->   Number
 *  false     ---->   Boolean
 *  null      ---->   Null
 *  undefined ---->   Undefined
 *            ---->   Undefined
 *  /at/      ---->   RegExp
 *  new Date()---->   Date
 *
 * */
export const dataType = (data: any): EDataType => {
    let string = Object.prototype.toString.call(data)
    let _type = string.split(' ')[1];
    return _type.slice(0, _type.length - 1)
};

/**
 *  过滤数据中的null, undefined为空字符串
 * */
export const dataNoEmpty = (data: any) => {
    switch (dataType(data)) {
        case TSTypes.EDataType.Object: {
            data = dataObject(data);
            break
        }
        case TSTypes.EDataType.Array:{
            data = dataArray(data);
            break
        }
        case TSTypes.EDataType.Null || TSTypes.EDataType.Undefined :{
            data = '';
            break
        }
        default:{
            break
        }
    }
    return data
};

const dataObject = (object: Object) => {
    for (let key in object) {
        object[key] = dataNoEmpty(object[key]);
    }
    return object
};

const dataArray = (array: Array<any>) => {
    return array.map(item => {
        return dataNoEmpty(item)
    })
};

