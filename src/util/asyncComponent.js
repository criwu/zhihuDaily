import React, { Component } from 'react'
function asyncComponent(fn) {

    class lazy extends Component {
        constructor() {
            super()
            this.state = {
                LazyComponent: null
            }
        }
        componentDidMount() {
            fn().then(result => {
                this.setState({
                    LazyComponent: result.default
                })
            })
        }
        render() {
            const { LazyComponent } = this.state
            return (
                <div>
                    {
                        LazyComponent ? <LazyComponent {...this.props}></LazyComponent> : null
                    }
                </div>
            )
        }
    }
    return lazy
}
export default asyncComponent