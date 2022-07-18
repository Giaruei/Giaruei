/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 15:30:37
 * @LastEditTime: 2022-07-18 16:53:45
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\types\route.ts
 */
export interface IRoute {
    path: string
    component: JSX.Element
    meta?: {
        title: string
    }
    isExact?: boolean
}
