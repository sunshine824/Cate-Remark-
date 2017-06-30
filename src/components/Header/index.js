import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class Header extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    clickHandle() {
        const backRouter = this.props.backRouter
        //console.log(this.props.backRouter)
        backRouter ? this.props.history.push(backRouter) : window.history.back()
    }

    render() {
        return (
            <div id="common-header">
                 <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h2>{this.props.title}</h2>
            </div>
        );
    };
}