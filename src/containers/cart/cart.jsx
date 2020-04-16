import React, {Component} from 'react';
import {Checkbox, Stepper} from 'antd-mobile';

import '../../assets/css/cart.less';

export default class Cart extends Component {

  render() {
    return (
        /*购物车-单个商品*/
        <div className="cart-item">
          {/*单选框*/}
          <div className="cart-item-check">
            <Checkbox></Checkbox>
          </div>
          {/*图片*/}
          <div className="cart-item-left">
            <img src={require(`../../assets/images/cart/1.jpg`)}/>
          </div>
          {/*描述 价格 数量*/}
          <div className="cart-item-right">
            <div className="item-title"><span>零度白,5G全网通 8GB+128GB,官方标配</span></div>
            <div className="item-step">
              <span className="item-price"><span>￥</span>4488</span>
              <span className="span-stepper">
                <Stepper
                    style={{ width: '100%', minWidth: '100px' }}
                    showNumber
                    max={10}
                    min={1}
                    defaultValue={1}
                />
              </span>
            </div>
          </div>
        </div>
    )
  }
}
