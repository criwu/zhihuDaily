import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Mine.css'
import Back from '../../component/Back/Back'
import { Icon } from 'antd-mobile';
export default class Mine extends Component {
    render() {
        return (
            <div className='mine'>
                {/* 头部 */}
                <header>
                    <Back></Back>
                </header>
                {/* user */}
                <div className="user">
                    <img src="http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg" alt="" />
                    <span>user</span>
                </div>
                {/* nav */}
                <ul className='nav'>
                    <li>
                        <Link to='/collect'>
                            <span>我的收藏</span><Icon type='right'></Icon>
                        </Link>
                    </li>
                    <li>
                        <Link to='/mine'>
                            <span>消息中心</span><Icon type='right'></Icon>
                        </Link>
                    </li>
                </ul>
                {/* 夜间模式和设置 */}
                <ul className='bottom'>
                    <li>
                        <i className='iconfont icon-yejian'></i>
                        <span>夜间模式</span>
                    </li>
                    <li>
                        <i className='iconfont icon-shezhi'></i>
                        <span>设置</span>
                    </li>
                </ul>
            </div>
        )
    }
}
