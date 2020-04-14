/*
主路由组件
 */
import React, {Component} from 'react';

import MyNavBar from '../../components/navBar/navBar';

export default class Mine extends Component {
  render() {
    return (
        <div>
          <MyNavBar title="我的"/>
        </div>
    )
  }
}
