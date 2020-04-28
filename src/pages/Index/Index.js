import React, { Component } from 'react'
import Header from '../../component/Header/Header'
import Banner from '../../component/Banner/Banner'
import Card from '../../component/Card/Card'
import './Index.css'
import { connect } from 'react-redux'
import { requestStoriesAction, getStories } from '../../store/stories'
import { requestBeforeStories } from '../../util/request'
// 引入方法
import headerTime from '../../util/headerTime'
class Index extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            beforeData: []

        }
        this.isRequest = true
        this.n = 0
    }
    componentDidMount() {
        const { changeStories } = this.props
        // 顶部时间
        this.timer = setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000);
        // 进入页面发起请求
        changeStories()
        // 滚动事件
        window.onscroll = () => {
            // 窗口高度
            let wh = document.documentElement.clientHeight;
            // 文档高度
            let dh = document.documentElement.offsetHeight;
            // 上卷距离
            let st = document.documentElement.scrollTop || document.body.scrollTop;

            if (st + wh + 50 >= dh && this.isRequest) {
                // 锁定 
                this.isRequest = false
                this.n++
                requestBeforeStories(this.getBeforeTime(this.n)).then(res => {
                    // 解除锁定
                    this.isRequest = true;
                    this.setState({
                        beforeData: [...this.state.beforeData, res.data]
                    })
                })
            }
        }
    }
    // 获取以前时间
    getBeforeTime(n) {
        let date = new Date(new Date().getTime() - (n - 1) * 24 * 60 * 60 * 1000)
        let y = date.getFullYear();
        let m = (date.getMonth() + 1 + '').padStart(2, '0')
        let d = (date.getDate() + '').padStart(2, '0')
        let p = y + m + d
        return p
    }
    // 处理时间
    handleTime(t) {
        let m = t.slice(4, 5) === '0' ? t.slice(5, 6) : t.slice(4, 6)
        let d = t.slice(6, 7) === '0' ? t.slice(7) : t.slice(6)
        return `${m}月${d}日`
    }

    render() {
        let { date, beforeData } = this.state
        const { stories } = this.props
        // 处理头部时间
        let t = headerTime(date)

        return (
            <div className='index'>

                {/* 顶部 */}
                <Header t={t} onLeftClick={this.onOpenChange}></Header>
                {/* 轮播图 */}
                <Banner data={stories.top_stories}></Banner>
                {/* 今日资讯 */}
                <ul className='news'>
                    {stories.stories ?
                        stories.stories.map(val => (
                            <Card story={val} key={val.id}></Card>
                        ))
                        : null}
                </ul>
                {/* 以前的新闻 */}
                {
                    beforeData
                        ? beforeData.map((val, index) => (
                            <div className="before" key={index}>
                                <span className="show-time">{this.handleTime(val.date)}</span>
                                <ul className='news'>
                                    {
                                        val.stories ? val.stories.map(item => (
                                            <Card story={item} key={item.id}></Card>
                                        )) : null
                                    }

                                </ul>
                            </div>
                        ))
                        : null
                }
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        // 销毁后，防止内存泄漏
        this.setState = (state, callback) => {
            return;
        };

    }
}
// 成批导入状态
const mapStateToProps = (state) => {
    return {
        stories: getStories(state)
    }
}
// 成批导入方法
const mapDispatchToProps = (dispatch) => {
    return {
        changeStories: () => {
            return dispatch(requestStoriesAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)