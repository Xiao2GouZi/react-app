
import Config from '../../config';
// import {IAsyncResult} from '../../type';
import {Fetch} from '../../common'




/**
 *  支持的国家
 * */
export const getHotGoods = async () => {
    let url =  `${Config.host}api/v3/oauth/sms/supported_countries`;
    let response = await Fetch.Get({url});

    console.log('------------', response);





};


