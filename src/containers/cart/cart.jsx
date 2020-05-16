import React, {Component} from 'react';
import {Badge, Checkbox, Stepper} from 'antd-mobile';

import '../../assets/css/cart.less';

export default class Cart extends Component {

  render() {
    return (
        <div>
          <div className="cart-item">
            <div className="cart-item-check">
              <Checkbox/>
            </div>
            <div className="cart-item-img">
              {/*<img src={require(`../../assets/images/cart/1.jpg`)}/>*/}
              <img
                  src="https://img12.360buyimg.com/n7/jfs/t1/67917/17/14259/338917/5dba3f93E89089ecf/292ff70f4fe86cd2.jpg"/>
            </div>
            <div className="cart-item-text">
              <h3 className="cart-item-text-1">
                零度白,5G全网通 8GB+128GB,官方标配
              </h3>
              <Badge text="限时折扣" hot style={{marginRight: 8}}/>
              <Badge text="分期支付" hot style={{marginRight: 8}}/>
            </div>
          </div>
          <div className="cart-item-bottom">
            <h3>¥1999</h3>
            <div className="cart-item-bottom-stepper">
              <Stepper
                  style={{ width: '20%', minWidth: '90px'}}
                  showNumber
                  max={10}
                  min={1}
                  defaultValue={1}
              />
            </div>
          </div>
        </div>
    );
  }
}
