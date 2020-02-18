import { AxiosRequestConfig } from './types/index'

export default function Xhr(config:AxiosRequestConfig): void{
    const { url, method = 'get', data = null } = config
    const xhr = new XMLHttpRequest()
    xhr.open(method.toUpperCase(), url,  true)
    xhr.send(data)
}