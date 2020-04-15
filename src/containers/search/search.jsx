import React, {Component} from 'react';
import {Grid, List, SearchBar} from 'antd-mobile';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {search} from '../../redux/actions';
import MyNavBar from '../../components/navBar/navBar';

import '../../assets/css/search.less';

class Search extends Component {

  static propTypes = {
    itemList: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired
  }

  state = {
    key: ''
  }

  search = () => {
    this.props.search(this.state)
  }

  // 处理输入数据的改变: 更新对应的状态
  handlerChange = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val  // 属性名不是name, 而是name变量的值
    })
  }

  render() {
    const {itemList} = this.props
    return (
        <div>
          <MyNavBar title="搜索"/>
          <SearchBar placeholder="iphone11"
                     onChange={val => {this.handlerChange('key', val)}}
                     onSubmit={this.search} />
          <List>
            <Grid data={itemList}  columnNum={2}
                  renderItem={dataItem => (
                      <div className="dataItem" onClick={() => {this.props.history.replace('/goodsDetail')}}>
                        <img src={dataItem.icon} className="dataItem-img" />
                        <div className="dataItem-div">
                          <span>{dataItem.text}</span>
                        </div>
                      </div>
                  )}/>
          </List>
        </div>
    )
  }
}

export default connect(
    state => ({itemList: state.itemList}),
    {search}
)(Search)
