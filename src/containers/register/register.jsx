import React, {Component} from 'react';
import {Button, Icon, InputItem, List, NavBar, Toast, WhiteSpace, WingBlank} from 'antd-mobile';

import Logo from '../../components/logo/logo';
import axios from 'axios';

export default class Register extends Component {
  state = {
    username: '',
    password: '',
    password2: ''
  }

  // 点击注册调用
  login = () => {
    const {username, password, password2} = this.state
    if (!username) {
      Toast.info("用户名不能为空")
      return
    }
    if (!password) {
      Toast.info("密码不能为空")
      return
    }
    if (!password2) {
      Toast.info("确认密码不能为空")
      return
    }
    if (password != password2) {
      Toast.info("两次密码不一致")
      return
    }
    const registerUrl = '/user/register?username=' +username + '&password=' + password
    axios.get(registerUrl)
        .then(response => {
          const result= response.data
          if (result.code == 1) {
            Toast.success("注册成功")
            this.props.history.replace('/main')
          } else if (result.code == 0){
            Toast.info(result.data)
          }
        })
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
          <NavBar mode="light"  icon={<Icon type="left" />} leftContent={"注册"}></NavBar>
          <Logo/>
          <WingBlank>
            <List>
              <WhiteSpace/>
              <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username', val)}}>用户名:</InputItem>
              <InputItem placeholder='请输入密码'  type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
              <InputItem placeholder='请输入密码'  type="password" onChange={val => {this.handleChange('password2', val)}}>确认密码:</InputItem>
              <WhiteSpace/>
              <WhiteSpace/>
              <Button type='primary' onClick={this.login}>注&nbsp;&nbsp;&nbsp;册</Button>
              <WhiteSpace/>
            </List>
          </WingBlank>
        </div>
    )
  }
}
