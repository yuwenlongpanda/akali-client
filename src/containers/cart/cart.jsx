/*
主路由组件
 */
import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';

export default class Cart extends Component {
  render() {
    return (
        <div>
          <NavBar mode="light" leftContent={"购物车"}></NavBar>
        </div>
    )
  }
}
