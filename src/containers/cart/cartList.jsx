import React, {Component} from 'react';
import Cart from './cart';
import {Badge, Button, Checkbox, NavBar, WhiteSpace, WingBlank} from 'antd-mobile';

export default class CartList extends Component {

  state = {
    data : [1, 2, 3]
  }

  render() {
    return (
        <div>
          <NavBar mode="light" rightContent="编辑">购物车</NavBar>
          <WhiteSpace/>
          <WingBlank size="md">
            <div className="cart-title-1">
              <div className="cart-title-1-1">
                <Checkbox/>
              </div>
              <div className="cart-title-1-2">
                <Badge text="包邮" hot style={{marginRight: 8}}/>
                已满88.0元已包邮
              </div>
              <div className="cart-title-1-3">
                再逛逛>
              </div>
            </div>
          {
            this.state.data.map((item,i) => {
              return (
                  <Cart key={i}/>
              )
            })
          }
          </WingBlank>
          <div className="cart-pay-1">
            <div className="cart-pay-1-left">
              <Checkbox/>
              <span  style={{marginLeft: '10px'}}>全选</span>
              <span style={{marginLeft: '10px',  fontSize: '14px'}}>合计：</span>
              <span style={{color: '#ff0000', fontSize: '14px', fontWeight: 'bold'}}>¥6999</span>
            </div>
            <div className="cart-pay-1-right">
              <Button type="primary" inline size="small">去结算</Button>
            </div>
          </div>
        </div>
    )
  }
}
