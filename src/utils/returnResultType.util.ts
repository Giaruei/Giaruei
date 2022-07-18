/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 12:16:37
 * @LastEditTime: 2022-07-18 12:18:45
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\utils\returnResultType.util.ts
 */

type Reverse<T> = (arg: any) => T

function returnResultType<T>(arg: Reverse<T>): T {
    return {} as T
}

export default returnResultType

// 使用：
// const res = returnResultType(func)
// type ResultType = typeof res
