/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from './ajax'

// 登陆接口
export const reqLogin = ({username, password}) => ajax('/user/login',{username, password}, 'POST')
