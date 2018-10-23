


import * as moment from 'moment'


export const test = () => {



    console.log(moment.now());    // 1539929517438


    console.log(moment.defaultFormatUtc);   // YYYY-MM-DDTHH:mm:ss[Z]

    console.log(moment.defaultFormat);      // YYYY-MM-DDTHH:mm:ssZ


    console.log(moment().format(moment.defaultFormat))   // 2018-10-19T14:13:53+08:00


    console.log(moment().daysInMonth())   //这个月多少天



}

