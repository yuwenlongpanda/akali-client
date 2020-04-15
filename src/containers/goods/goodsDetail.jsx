import React, {Component} from 'react';
import {Badge, Carousel, Icon, NavBar, WhiteSpace} from 'antd-mobile';

import '../../assets/css/goodsdetail.less';

export default class GoodsDetail extends Component {
  state = {
    data: [require(`../../assets/images/goods/1.jpg`),
           require(`../../assets/images/goods/2.dpg`),
           require(`../../assets/images/goods/3.dpg`),
           require(`../../assets/images/goods/4.dpg`),
           require(`../../assets/images/goods/5.dpg`),
           require(`../../assets/images/goods/6.dpg`)],
    imgHeight: 367.5,
  }
  render() {
    return (
        <div className="goods-page">
          <NavBar  icon={<Icon type="left" />} mode="light"
                   onLeftClick={() => {this.props.history.replace("/search")}}>商品详情</NavBar>
          <Carousel
              autoplay={false}
              infinite
              autoplay={true}
          >
            {this.state.data.map(val => (
                <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: '100%'  }}
                >
                  <img
                      src={`${val}`}
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top' }}
                  />
                </a>
            ))}
          </Carousel>
          {/*价格*/}
          <div className="price-wrap">
            <div className="price">
              <span><i>￥</i>7499</span>
              <span>￥7899</span>
            </div>
          </div>
          {/*标题*/}
          <div className="buy-wrap">
            <div className="goods-name">
              <div className="goods-title">
                Apple 2019新品 MacBook Pro 16【带触控栏】九代八核i9 16G 1TB 深空灰 Radeon Pro 5500M显卡 笔记本电脑 轻薄本 MVVK2CH/A
              </div>
            </div>
          </div>
          <WhiteSpace/>
          {/*运费 已售|剩余*/}
          <div className="item-list">
            <h3>运费</h3>
            <div className="item-content">
              ￥ 0.00~10.00
            </div>
            <div className="item-content-right">
              已售 1998 | 剩余 180
            </div>
          </div>
          {/*领券*/}
          <div className="item-list">
            <h3>领劵</h3>
            <div className="item-content">
              <Badge text="满99减15"  hot style={{ marginRight: 8 }}/>
              <Badge text="满199减30" hot style={{ marginRight: 8 }}/>
              <Badge text="满299减50" hot style={{ marginRight: 8 }}/>
            </div>
          </div>
          {/*促销*/}
          <div className="item-list">
            <h3>促销</h3>
            <div className="item-content">
                <Badge text="包邮" hot style={{ marginRight: 8 }}/>满88.00元全国包邮
            </div>
          </div>
          <WhiteSpace/>
          {/*服务 选择*/}
          <div className="item-list">
            <h3>服务</h3>
            <div className="item-content">
              收货后结算.快递发货
            </div>
          </div>
          <div className="item-list">
            <h3>选择</h3>
            <div className="item-content">
              共1种颜色可选
            </div>
          </div>
          {/*客服 购物车 购买*/}
          <div className="fixed-btns">
            <div className="icon">
              <img src={require(`../../assets/images/goods/msg@default.png`)} alt="客服"/>
              <span>客服</span>
            </div>
            <button className="btn-orange">加入购物车</button>
            <button onClick={()=>{
              this.buyImmediately()
            }}>购买</button>
          </div>
        </div>
    )
  }
}
