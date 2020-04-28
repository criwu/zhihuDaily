import React, { Component } from 'react'
import { connect } from 'react-redux'
import Back from '../../component/Back/Back'
import { Link } from 'react-router-dom'
import { getCollection } from '../../store/collect'
import './Collect.css'
class Collect extends Component {
    render() {
        let { collect } = this.props
        return (
            <div className='collect'>
                {/* 头部 */}
                <header>
                    <Back></Back>
                    <h3>我的收藏</h3>
                </header>
                {/* 收藏内容 */}
                {collect.length === 0 ?
                    <p className='no-collections'>还没有收藏</p>
                    :
                    <div>
                        <ul>
                            {
                                collect.map(item => (
                                    <li key={item.id}>
                                        <Link to={`/detail/${item.id}`}>
                                            <div className="left">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="right">
                                                <img src={item.image} alt='' />
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="no-more">
                            没有更多内容
                        </div>
                    </div>
                }
            </div>
        )
    }
}
// 批量导入状态
const mapStateToProps = (state) => {
    return {
        collect: getCollection(state)
    }
}
// 批量导入方法
const mapDespatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDespatchToProps)(Collect)
