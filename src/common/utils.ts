
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
}