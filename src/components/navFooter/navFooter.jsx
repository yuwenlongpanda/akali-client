import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

const Item = TabBar.Item

class NavFooter extends Component {

  render() {
    const path = this.props.location.pathname // 请求的path
    return (
        <TabBar
            barTintColor="white"
            tintColor="#33A3F4"
            unselectedTintColor="#949494"
        >
          <Item
              icon={{ uri: require(`../../assets/images/icon/home.svg`) }}
              selectedIcon={{ uri: require(`../../assets/images/icon/home.svg`) }}
              title="首页"
              selected={path==='/home'}
              onPress={() => this.props.history.replace('/home')}
          >
          </Item>
          <Item
              icon={{ uri: require(`../../assets/images/icon/search.svg`) }}
              selectedIcon={{ uri: require(`../../assets/images/icon/search.svg`) }}
              title="搜索"
              selected={path==='/search'}
              onPress={() => this.props.history.replace('/search')}
          >
          </Item>
          <Item
              icon={{ uri: require(`../../assets/images/icon/cart.svg`) }}
              selectedIcon={{ uri: require(`../../assets/images/icon/cart.svg`) }}
              title="购物车"
              selected={path==='/cart'}
              onPress={() => this.props.history.replace('/cart')}
          >
          </Item>
          <Item
              icon={{ uri: require(`../../assets/images/icon/mine.svg`) }}
              selectedIcon={{ uri: require(`../../assets/images/icon/mine.svg`) }}
              title="我的"
              selected={path==='/mine'}
              onPress={() => this.props.history.replace('/mine')}
          >
          </Item>
        </TabBar>
    )
  }
}


export default withRouter(NavFooter)
