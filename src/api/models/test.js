import { get,post } from '../request'

/**
 * 
 * @param {Number} param1 参数1 
 * @param {Number} param2 参数2
 * @returns 
 */
export function testGetFetch(data) {
    return get({
        url: '/',
        data,
        headerParam:{
            test:'testRequest'
        }

    })

}
/**
 * 
 * @param {Number} param1 参数1 
 * @param {Number} param2 参数2
 * @returns 
 */
export function testPostFetch(data) {
    return post({
        url: '/',
        data,
        headerParam:{
            test2:'postTest'
        }

    })

}