import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './util/asyncComponent'
import Index from './pages/Index/Index'
const Detail = asyncComponent(() => import('./pages/Detail/Detail'))
const Comment = asyncComponent(() => import('./pages/Comment/Comment'))
const Mine = asyncComponent(() => import('./pages/Mine/Mine'))
const Collect = asyncComponent(() => import('./pages/Collect/Collect'))
function App() {
  return (
    <div >
      {/* 定义路由出口和规则 */}
      <Switch>
        <Route path='/index' component={Index}></Route>
        <Route path='/mine' component={Mine}></Route>
        <Route path='/collect' component={Collect}></Route>
        <Route path='/detail/:id' component={Detail}></Route>
        <Route path='/comment/:id' component={Comment}></Route>
        <Redirect to='/index'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
