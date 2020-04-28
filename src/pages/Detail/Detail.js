import React, { Component } from 'react'
import { requestDetail } from '../../util/request'
import Back from '../../component/Back/Back'
import { Link } from 'react-router-dom'
import './Detail.css'
import { connect } from 'react-redux'
import { getLong, getShort, requestLongAction, requestShortAction } from '../../store/comment'
import { addCollectionAction, getCollection, delCollectionAction } from '../../store/collect'
import { Toast } from 'antd-mobile'

class Detail extends Component {
    constructor() {
        super()
        this.state = {
            detail: {},
        }
        // ref绑定innerHTML
        this.con = React.createRef()
    }
    componentDidMount() {
        // 获取id
        let id = this.props.match.params.id
        let { changeLong, changeShort } = this.props
        // 获取页面详情
        requestDetail(id).then(res => {
            this.setState({
                detail: res.data
            })
        })
        //  获取长短评论
        changeLong(id)
        changeShort(id)
    }
    render() {
        let { detail } = this.state
        let { long, short, collect, addCollect, delCollect, isCollect } = this.props
        // 富文本
        if (detail.body) {
            this.con.current.innerHTML = detail.body;
        }

        return (
            <div className='detail'>
                {/* 引入富文本css样式 */}
                {detail.css ? <link rel="stylesheet" href={detail.css[0]} /> : null}
                {/* 头部图片和标题 */}
                <div className='img'>
                    <img src={detail.image} alt="" />
                    {
                        detail.image_hue ?
                            <div className="hue" style={{ background: `linear-gradient(rgba(255,255,255,0),#${detail.image_hue.slice(2)})` }}>
                                <p>{detail.title}</p>
                                <span>{detail.image_source}</span>
                            </div>
                            : null
                    }
                </div>
                {/* 渲染富文本 */}
                <div ref={this.con}></div>
                {/* 底部导航 */}
                <footer>
                    <div className="foot">
                        <Back></Back>
                        <ul>
                            {/* 评论 */}
                            <li>
                                <Link to={`/comment/${this.props.match.params.id}`}>
                                    <i className='iconfont icon-pinglun'></i>
                                    <span>{long.length + short.length}</span>
                                </Link>
                            </li>
                            {/* 点赞 */}
                            <li>
                                <i className='iconfont icon-tubiaodianzan'></i>
                                <span>391</span>
                            </li>
                            {/* 收藏 */}
                            <li >
                                {collect.some(val => val.id === detail.id)
                                    ? <i className='iconfont icon-shoucangfill' onClick={() => delCollect(detail.id)}></i>
                                    : <i className='iconfont icon-shoucang' onClick={() => addCollect(detail)}></i>
                                }
                            </li>
                            {/* 分享 */}
                            <li>
                                <i className='iconfont icon-ziyuan'></i>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}
// 批量导入状态
const mapStateToProps = (state) => {
    return {
        long: getLong(state),
        short: getShort(state),
        collect: getCollection(state)


    }
}
// 批量导入方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeLong: (id) => {
            return dispatch(requestLongAction(id))
        },
        changeShort: (id) => {
            return dispatch(requestShortAction(id))
        },
        addCollect: (story) => {
            Toast.success('收藏成功', 1)

            return dispatch(addCollectionAction(story))
        },
        delCollect: (id) => {
            Toast.success('取消收藏成功', 1)
            return dispatch(delCollectionAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)