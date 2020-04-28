import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Back.css'

class Back extends Component {
    goBack() {
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className='back' onClick={this.goBack.bind(this)}>

                <i className='iconfont icon-back'></i>

            </div>
        )
    }
}
export default withRouter(Back)