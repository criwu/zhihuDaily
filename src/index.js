import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入antd
import 'antd-mobile/dist/antd-mobile.css';
// 引入rem.js
import './assets/js/rem'
// 引入重置样式
import './assets/css/reset.css'
// 引入iconfont
import './assets/font/iconfont.css'
// 引入路由方式
import { HashRouter } from 'react-router-dom'
// 引入provider组件
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);


