import React, { Component } from 'react'
import Back from '../../component/Back/Back'
import CommentCard from '../../component/CommentCard/CommentCard'
import './Comment.css'
import { connect } from 'react-redux'
import { getLong, getShort, requestLongAction, requestShortAction } from '../../store/comment'
import { Accordion } from 'antd-mobile';
class Comment extends Component {
    componentDidMount() {
        // 获取id
        let id = this.props.match.params.id
        let { changeLong, changeShort } = this.props
        //  获取长短评论
        changeLong(id)
        changeShort(id)
    }

    render() {
        const { long, short } = this.props
        return (
            <div className='comment'>
                {/* 头部 */}
                <header>
                    <Back></Back>
                    <h3>{`${long.length + short.length} 条评论`}</h3>
                </header>
                {/* 评论列表 */}
                <Accordion defaultActiveKey="0" className="my-accordion" >
                    {long.length !== 0
                        ? <Accordion.Panel header={`${long.length}条长评`} className="long">
                            {long.map(item => (
                                <CommentCard data={item} key={item.id}></CommentCard>
                            ))}
                            {short.length === 0
                                ? <div className="no-more">
                                    已显示全部评论
                            </div>
                                : <div></div>}

                        </Accordion.Panel>
                        : null}
                    {short.length !== 0
                        ? <Accordion.Panel header={`${short.length}条短评`} className='short'>
                            {short.map(item => (
                                <CommentCard data={item} key={item.id}></CommentCard>
                            ))}
                            <div className="no-more">
                                已显示全部评论
                            </div>
                        </Accordion.Panel>
                        : <div className="no-comment">
                            <div>
                                <i className='iconfont icon-shafa'></i>
                                <span>快来抢沙发吧</span>
                            </div>
                        </div>
                    }
                </Accordion>
                {/* 参与评论 */}
                <footer>
                    <div className="discuss">
                        <img src="http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg" alt="" />
                        <p>说说你的看法……</p>
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
        short: getShort(state)
    }
}
// 批量导入方法
const mapDispatchToProps = (dispatch) => {
    return {
        // 获取长评
        changeLong: (id) => {
            return dispatch(requestLongAction(id))
        },
        // 获取短评
        changeShort: (id) => {
            return dispatch(requestShortAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)