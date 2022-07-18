/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:10:06
 * @LastEditTime: 2022-07-18 16:57:55
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\user.api.ts
 */
import axiosInstance from "../axios"
import { ILogin } from "../model/user"
import { AxiosResponse } from "axios"

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
const Login = (params: ILogin): Promise<AxiosResponse> => {
    return axiosInstance.post("/user/login", params).then(res => res.data)
}

const test = (): Promise<AxiosResponse> => {
    return axiosInstance.get("/hot/topic").then(res => res.data)
}

export default {
    Login,
    test
}
