/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from './ajax'

// 商品搜索接口
export const reqSearch = ({key}) => ajax('/item/search',{key})
