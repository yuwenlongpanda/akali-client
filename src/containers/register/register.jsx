/*
注册的路由组件
 */
import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Register extends Component {
  state = {
    username: '',
    password: ''
  }

  // 点击注册调用
  register = () => {
    console.log(this.state);
    if (this.state.username == 'Admin' && this.state.password == '1') {
      this.props.history.replace('/main')
    }
  }

  // 处理输入数据的改变: 更新对应的状态
  handleChange = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val  // 属性名不是name, 而是name变量的值
    })
  }

  render() {
    return (
        <div>
          <NavBar>阿卡丽的神秘商店</NavBar>
          <Logo/>
          <WingBlank>
            <List>
              <WhiteSpace/>
              <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username', val)}}>用户名:</InputItem>
              <InputItem placeholder='请输入密码'  type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
              <WhiteSpace/>
              <WhiteSpace/>
              <Button type='primary' onClick={this.register}>登&nbsp;&nbsp;&nbsp;录</Button>
              <WhiteSpace/>
            </List>
          </WingBlank>
        </div>
    )
  }
}
