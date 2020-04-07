import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import Login from './containers/login/login';
import Mine from './containers/mine/mine';
import Cart from './containers/cart/cart';
import Home from './containers/home/home';

ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/mine' component={Mine}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route component={Home}></Route>
          </Switch>
        </Switch>
      </HashRouter>
    </Provider>
), document.getElementById('root'))

