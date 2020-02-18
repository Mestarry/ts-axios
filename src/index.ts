import { AxiosRequestConfig } from './types'
import Xhr from './xhr'

function axios(config: AxiosRequestConfig):void {
    Xhr(config)
}

export default axios