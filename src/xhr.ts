import { AxiosRequestConfig } from './types/index'
import { request } from 'http'

export default function Xhr(config:AxiosRequestConfig): void{
    const { url, method = 'get', data = null, headers } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    Object.keys(headers).forEach(name => {
        if (data === null && name.toLowerCase() === 'content-type') {
            delete headers[name]
        } else {
            request.setRequestHeader( name, headers[name])
        }
    })
    request.send(data)
}