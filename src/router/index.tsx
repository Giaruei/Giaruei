/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 15:18:50
 * @LastEditTime: 2022-07-18 16:11:05
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\router\index.tsx
 */

import { FC, lazy, Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { IRoute } from "@/types"

const Login = lazy(() => import("@/pages/Login")),
    Home = lazy(() => import("@/pages/Home"))

const ViewRouter: FC = () => {
    const location = useLocation()
    const routes: Array<IRoute> = [
        // 为匹配时的组件
        {
            path: "*",
            component: <Home />,
            meta: {
                title: "Less Music"
            }
        },
        // 主页
        {
            path: "/home",
            component: <Home />,
            meta: {
                title: "Less Music"
            }
            // 如果有子页面，参考以下：
            // routes: [
            //     {
            //         path: "/home/demo",
            //         component: lazy(() => import("@/pages/home/demo"))
            //     }
            // ]
        },
        // 登录页
        {
            path: "/login",
            component: <Login />,
            meta: {
                title: "登录 - Less Music"
            }
            // isExact: true // 要求严格路径匹配
        }
    ]

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location}>
                {routes.map(route => (
                    <Route element={route.component} key={route.path} path={route.path} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default ViewRouter
