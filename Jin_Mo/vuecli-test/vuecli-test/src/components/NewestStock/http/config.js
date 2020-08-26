// proxy URL
// https://cors-anywhere.herokuapp.com/

const isUsingCors = false

// if(isUsingCors){
const newest_stock = {
    // newest stock
    // baseURL: 'https://mis.twse.com.tw/stock/api/'

    // using proxy server
    baseURL: 'https://cors-anywhere.herokuapp.com/https://mis.twse.com.tw/stock/api/'
    
}

const back_end = {
    // back end
    // baseURL: 'http://trading.maxosoft.com/api/'

    // using proxy server
    baseURL: 'https://cors-anywhere.herokuapp.com/http://trading.maxosoft.com/api/'    
}


// }else{
//     conosle.log('enter no using cors')
// const newest_stock = {
//     // newest stock
//     // baseURL: 'https://mis.twse.com.tw/stock/api/'

//     // using proxy server
//     // baseURL: 'https://cors-anywhere.herokuapp.com/https://mis.twse.com.tw/stock/api/'
//     baseURL: 'https://mis.twse.com.tw/stock/api/'
// }

// const back_end = {
//     // back end
//     // baseURL: 'http://trading.maxosoft.com/api/'

//     // using proxy server
//     // baseURL: 'https://cors-anywhere.herokuapp.com/http://trading.maxosoft.com/api/'
//     baseURL: 'http://trading.maxosoft.com/api/'
// }

// }


export default {
    newest_stock,
    back_end
}