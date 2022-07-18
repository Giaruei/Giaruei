/**
 * @Author: Pacific_D
 * @Date: 2022-07-18 11:00:52
 * @LastEditTime: 2022-07-18 11:19:55
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \music\config-overrides.js
 */
// override是覆写react隐藏的webpack配置
const { override, addWebpackAlias } = require("customize-cra")
const path = require("path")
module.exports = override(
    //增加路径别名的处理
    addWebpackAlias({
        "@": path.resolve("./src")
    })
)
