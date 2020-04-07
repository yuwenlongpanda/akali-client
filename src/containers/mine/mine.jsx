/*
主路由组件
 */
import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';

export default class Mine extends Component {
  render() {
    return (
        <div>
          <NavBar mode="light" leftContent={"我的"}></NavBar>
        </div>
    )
  }
}
