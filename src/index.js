import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Main from './containers/main/main';
import GoodsDetail from './containers/goods/goodsDetail';
import Cart from './containers/cart/cart';
import Order from './containers/order/order';

import './assets/css/index.less';

ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/goodsDetail' component={GoodsDetail}></Route>
            <Route path='/cartItem' component={Cart}></Route>
            <Route path='/order' component={Order}></Route>
            <Route component={Main}></Route>
        </Switch>
      </HashRouter>
    </Provider>
), document.getElementById('root'))

