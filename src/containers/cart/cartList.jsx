import React, {Component} from 'react';
import Cart from './cart';
import {NavBar} from 'antd-mobile';

export default class CartList extends Component {

  state = {
    data : [1, 2, 3]
  }

  render() {
    return (
        <div>
          <NavBar mode="light" rightContent={"编辑"} >购物车</NavBar>
          {
            this.state.data.map((item,i) => {
              return (
                  <Cart key={i}/>
              )
            })
          }
        </div>
    )
  }
}
