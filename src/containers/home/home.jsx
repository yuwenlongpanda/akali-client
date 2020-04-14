import React, {Component} from 'react';
import {Carousel, Grid, List, WingBlank} from 'antd-mobile';

import MyNavBar from '../../components/navBar/navBar';

export default class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  constructor(props) {
    super(props)
    // 准备需要显示的列表数据
    this.categoryList = []
    for (let i = 0; i < 8; i++) {
      this.categoryList.push({
        text: '品类'+(i+1),
        icon: require(`../../assets/images/2.jpg`) // 不能使用import
      })
    }
    // 准备需要显示的列表数据
    this.shopList = []
    for (let i = 0; i < 10; i++) {
      this.shopList.push({
        text: '商品'+(i+1),
        icon: require(`../../assets/images/1.jpg`) // 不能使用import
      })
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['https://imgcps.jd.com/ling/100008348542/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5bd8253082acdd181d02fa22/465c38f6/590x470.jpg',
          'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/107368/6/11023/50174/5e8310deE6d29d204/b7b2edad4837e9de.jpg.webp',
          'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/106564/23/17672/67816/5e8c3965E76daaf14/9e7f8f9ec21d9d25.jpg.webp'],
      });
    }, 100);
  }
  render() {
    return (
        <div>
          <MyNavBar title="阿卡丽的神秘商店"/>
          <WingBlank>
            <Carousel
                autoplay={false}
                infinite
                autoplay={true}
            >
              {this.state.data.map(val => (
                  <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight  }}
                  >
                    <img
                        src={`${val}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                  </a>
              ))}
            </Carousel>
          </WingBlank>
          <List>
            <Grid data={this.categoryList}  columnNum={4}/>
          </List>
          <List renderHeader={"猜你喜欢"}>
            <Grid data={this.shopList}  columnNum={2}/>
          </List>
        </div>
    )
  }
}
