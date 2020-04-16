import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon, NavBar, Popover} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const Item = Popover.Item;

class CommonBar extends Component {

  onSelect = (opt) => {
    this.props.history.push(opt.props.value)
  }

  render() {
    return (
        <NavBar  icon={<Icon type="left" />} mode="light"
                 onLeftClick={() => {this.props.history.replace("/search")}}
                 rightContent={
                   <Popover mask
                            overlayStyle={{ color: 'currentColor' }}
                            overlay={[
                              (<Item key="1" value="/home" /*icon={require(`../../assets/images/icon/home.svg`)}*/ style={{ whiteSpace: 'nowrap' }}>首页</Item>),
                              (<Item key="2" value="/search" /*icon={require(`../../assets/images/icon/search.svg`)}*/ style={{ whiteSpace: 'nowrap' }}>搜索</Item>),
                              (<Item key="3" value="/cart" /*icon={require(`../../assets/images/icon/cart.svg`)}*/ style={{ whiteSpace: 'nowrap' }}>购物车</Item>),
                              (<Item key="4" value="/mine" /*icon={require(`../../assets/images/icon/mine.svg`)}*/>
                                <span style={{ marginRight: 5 }}>我的</span>
                              </Item>),
                            ]}
                            align={{
                              overflow: { adjustY: 0, adjustX: 0 },
                              offset: [-10, 0],
                            }}
                            onSelect={this.onSelect}
                   >
                     <div style={{
                       height: '100%',
                       padding: '0 15px',
                       marginRight: '-15px',
                       display: 'flex',
                       alignItems: 'center',
                     }}
                     >
                       <Icon type="ellipsis" />
                     </div>
                   </Popover>
                 }
        >商品详情</NavBar>
    )
  }
}

export default connect()(withRouter(CommonBar))
