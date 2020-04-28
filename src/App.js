import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/Index/Index'
import Detail from './pages/Detail/Detail'
import Comment from './pages/Comment/Comment'
import Mine from './pages/Mine/Mine'
import Collect from './pages/Collect/Collect'
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
