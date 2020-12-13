import { create } from 'apisauce'
import storage from '../auth/storage'
import cache from '../utility/Cache'



// define the api
const api = create({
    baseURL: 'http://192.168.1.10:9000/api',
})

api.addAsyncRequestTransform(async (request) => {
    const authToken = await storage.getToken()
    if (!authToken) return
    request.headers['x-auth-token'] = authToken
})

const get = api.get;
api.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig)
    if (response.ok) {
        cache.set(url, response.data);
        return response
    }
    else {
        const data = await cache.get(url)
        return data ? { ok: true, data } : response
    }
}

export default api