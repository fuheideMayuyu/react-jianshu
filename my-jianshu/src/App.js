import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from '../src/statics/iconfont/iconfont';
import Header from './common/header/index'
import Home from './pages/home/index'
import Detail from './pages/detail/loadable.js';
import Write from './pages/write';
import Login from './pages/login';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
        <GlobalStyle />
        <IconfontStyle />
      </Provider>
    );
  }
}

export default App;
