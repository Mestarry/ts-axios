import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transfromRequest } from './helpers/data'

function axios(config: AxiosRequestConfig):void {
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = transfromURL(config)
    config.data = transfromRequestData(config)
}

function transfromURL(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url, params)
}

function transfromRequestData(config: AxiosRequestConfig): any {
    return transfromRequest(config.data)
}

export default axios