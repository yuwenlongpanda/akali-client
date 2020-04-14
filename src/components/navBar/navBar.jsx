import React, {Component} from 'react';
import {NavBar} from 'antd-mobile';

export default class MyNavBar extends Component {
  render() {
    return (
        <NavBar mode="light" >{this.props.title}</NavBar>
    )
  }
}
