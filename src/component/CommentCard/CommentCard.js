import React, { Component } from 'react'
import './CommentCard.css'
class CommentCard extends Component {

    // 时间处理
    handleTime(t) {
        let date = new Date(parseInt(t) * 1000);
        let m = (date.getMonth() + '').padStart(2, '0');
        let d = (date.getDate() + '').padStart(2, '0');
        let h = (date.getHours() + '').padStart(2, '0');
        let minute = (date.getMinutes() + '').padStart(2, '0')
        return `${m}-${d} ${h}:${minute}`
    }
    render() {
        const { data } = this.props
        return (
            <div className='com-card'>
                <div className="left">
                    <img src={data.avatar} alt="" />
                </div>
                <div className="right">
                    <div className="user">
                        <span>{data.author}</span>
                        <i className='iconfont icon-gengduo'></i>
                    </div>
                    <p>{data.content}</p>
                    {data.reply_to ? <div className='reply'>{`//${data.reply_to.author}：${data.reply_to.content}`}</div> : null}
                    <div className="bottom">
                        <span className='time'>{this.handleTime(data.time)}</span>
                        <div >
                            <div className="likes">
                                <span>{data.likes}</span>
                                <i className='iconfont icon-tubiaodianzan'></i>
                            </div>
                            <i className='com iconfont icon-comment'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard