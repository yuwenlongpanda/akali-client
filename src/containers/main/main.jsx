import React, {Component} from 'react';
import NavFooter from '../../components/navFooter/navFooter';
import {Redirect, Route, Switch} from 'react-router-dom';

import Mine from '../mine/mine';
import Cart from '../cart/cart';
import Home from '../home/home';
import Search from '../search/search';

export default class Main extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/mine' component={Mine}></Route>
            <Redirect to="/home"/>
          </Switch>
          <NavFooter/>
        </div>
    )
  }
}

