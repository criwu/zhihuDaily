import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import stories from './stories'
import comment from './comment'
import collect from './collect'

const reducer = combineReducers({
    stories: stories,
    comment: comment,
    collect: collect
})
// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk))

// 导出仓库
export default store;

