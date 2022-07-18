/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 21:51:13
 * @LastEditTime: 2022-07-18 17:04:44
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\axios.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

import { showMessage } from "./status"
import URL from "@/constants/url"
import { ENV } from "@/constants"

const axiosInstance: AxiosInstance = axios.create({
    baseURL: URL[ENV],
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    // withCredentials: true,
    timeout: 30000,
    transformRequest: [
        data => {
            data = JSON.stringify(data)
            return data
        }
    ]
})

// axios实例拦截响应
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.headers.authorization) {
            localStorage.setItem("app_token", response.headers.authorization)
        } else {
            if (response.data && response.data.token) {
                localStorage.setItem("app_token", response.data.token)
            }
        }

        if (response.status === 200) {
            return response
        } else {
            showMessage(response.status)
            return response
        }
    },
    // 请求失败
    (error: any) => {
        const { response } = error
        console.log(response)

        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status)
            return Promise.reject(response.data)
        } else {
            //TODO: 封装msg组件
            // alert("网络连接异常,请稍后再试!")
        }
    }
)

// axios实例拦截请求
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem("app_token")
        if (token) {
            config.headers!.authorization = `Bearer ${token}`
        }
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
