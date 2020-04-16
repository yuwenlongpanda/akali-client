import React, {Component} from 'react';
import NavFooter from '../../components/navFooter/navFooter';
import {Redirect, Route, Switch} from 'react-router-dom';

import Mine from '../mine/mine';
import Home from '../home/home';
import Search from '../search/search';
import CartList from '../cart/cartList';

export default class Main extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/cart' component={CartList}></Route>
            <Route path='/mine' component={Mine}></Route>
            <Redirect to="/home"/>
          </Switch>
          <NavFooter/>
        </div>
    )
  }
}

