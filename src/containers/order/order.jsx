import React, {Component} from 'react';
import {Badge, Icon, InputItem, NavBar, WhiteSpace, WingBlank, Button} from 'antd-mobile';

import '../../assets/css/order.less';

export default class Order extends Component {
  render() {
    return (
        <div>
          <NavBar mode="light" icon={<Icon type="left"/>}
                  onLeftClick={() => {
                    this.props.history.replace('/goodsDetail');
                  }}>确认订单</NavBar>
          <WhiteSpace/>
          <WingBlank size="md">
            <div className="address-1">
              <h3>
                上海市浦东新区
              </h3>
              <Badge text="默认" hot style={{marginRight: 8}}/>
            </div>
            <div className="address-2">
              <h3>
                东靖路669弄1-109号 浦东东旭公寓东区..
              </h3>
              <div className="address-2-right">
                >
              </div>
            </div>
            <div className="address-3">
              <h3>
                余文龙 17775206389
              </h3>
            </div>
            <div className="address-4">
              <h3>
                配送方式
              </h3>
              <div className="address-4-right">
                快递 免运费
              </div>
            </div>
          </WingBlank>
          <WhiteSpace/>
          <WingBlank size="md">
            <div className="item-1">
              <h3>
                自如全屋智能
              </h3>
            </div>
            <div className="item-2">
              <img src="https://webimg.ziroom.com/f14b0a6b-9b21-4fb8-9e4c-9da3c4f371b8.jpg"/>
              <div className="item-2-right">
                <h3 className="item-2-right-1">
                  家用冷饮机小巧冷饮机加速降冷桌面冷柜家用冷饮机小巧冷饮机加速降冷桌面冷柜
                </h3>
                <h3 className="item-2-right-2">
                  白色
                </h3>
                <Badge text="限时折扣" hot style={{marginRight: 8}}/>
              </div>
            </div>
            <div className="item-3">
              <h3>
                ¥138.00
              </h3>
              <div className="item-3-right">
                x1
              </div>
            </div>
            <div className="item-4">
              <h3>
                <span style={{color: '#999'}}>共一件&nbsp;</span> 商品小计：
                <span style={{color: '#ff0000', fontSize: '14px'}}>
                ¥138.00
              </span>
              </h3>
            </div>
          </WingBlank>
          <WhiteSpace/>
          <WingBlank size="md">
            <div className="coupon-1">
              <h3>
                优惠券
              </h3>
              <div className="coupon-1-right">
                暂无可用&nbsp;>
              </div>
            </div>
          </WingBlank>
          <WhiteSpace/>
          <WingBlank size="md">
            <InputItem
                style={{fontSize: '12px'}}
                type="text"
                placeholder="留言建议提前协商（50字以内）"
                clear
                moneyKeyboardAlign="left"
            >
              <span style={{fontSize: '12px'}}>买家留言</span>
            </InputItem>
          </WingBlank>
          <div className="tip-1">
              <div style={{fontSize: '10px'}}>本订单由&nbsp;有赞担保&nbsp;x&nbsp;中国人寿&nbsp;全程保障</div>
              <div style={{marginTop: '20px', fontSize: '12px'}}>自如全屋智能</div>
              <div style={{marginTop: '5px', fontSize: '11px'}}>有赞提供技术支持</div>
          </div>
          <div className="pay-1">
            <div>
              <h3>
                应付：<span style={{color: '#ff0000', fontSize: '14px', fontWeight: 'bold'}}>¥138.00</span>
              </h3>
              <div className="pay-1-freight">
                含运费：¥0.00
              </div>
            </div>
            <div className="pay-1-right">
              <Button type="primary" inline size="small">去支付</Button>
            </div>
          </div>
        </div>
    );
  }
}
