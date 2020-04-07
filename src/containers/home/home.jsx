/*
主路由组件
 */
import React, {Component} from 'react';
import {NavBar, SearchBar} from 'antd-mobile';

export default class Home extends Component {
  render() {
    return (
        <div>
          <NavBar mode="light">阿卡丽的神秘商店</NavBar>
          <SearchBar placeholder="搜索" />
        </div>
    )
  }
}
