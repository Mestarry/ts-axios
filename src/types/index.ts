export type Method = 'get' | 'GET' | 'post' | 'POST' | 'head' | 'HEAD' | 'delete' | 'DELETE' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'options' | 'OPTIONS';

export interface AxiosRequestConfig{
    url: string;
    method?: Method;
    data?: any;
    params?: any; 
}