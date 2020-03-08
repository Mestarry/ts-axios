import { isPlainObject } from './util'

function normalizeHeadersName(headers: any, normalizeName: string): void {
    Object.keys(headers).forEach(name => {
        if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
            headers[normalizeName] = headers[name]
            delete headers[name]
        }
    })
}

export function processHeaders (headers: any, data: any): any {
    normalizeHeadersName(headers, 'Content-Type')
    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}