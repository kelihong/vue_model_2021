import axios from 'axios'
import qs from 'qs'

const host = process.env.VUE_APP_SERVER
// headerParam: {} // 单独设置的header头
axios.defaults.baseURL = host

// axios.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(
    config => {
        
        // 配置单独设置的请求头
        let headerParam = config.headerParam
        let prevParams = {}
        if (Object.keys(headerParam)) {
            for (let key in headerParam) {
                prevParams[key] = config.headers.common[key]
                config.headers.common[key] = headerParam[key]
            }
        }

        config.data = qs.stringify(config.data)

        return config
    },
    error => {
        return Promise.error(error)
    }
)

axios.interceptors.response.use(
    resConfig => {
        const { status,  data:resData } = resConfig

        // 请求失败：
        if(status !== 200) {
            return Promise.reject(resConfig)
        }

        // 请求成功：
        if(resData.code === 200) {
            // return resData.data
        }

        // 返回结果
        return resData
    }
)

function get({
    url,
    data = {},
    headerParam = {}
}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: data,
            headerParam
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

function post({
    url,
    data = {},
    headerParam = {},
}) {
    // data = qs.stringify(data)
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headerParam
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export {
    get,
    post
}