import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

export default class PCIndex extends Component {
    constructor(){
        super()
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="clear-fix">
                <div className="float-left">
                    深圳
                    <span className="icon-angle-down"></span>
                </div>
                <div className="float-right">
                    <span className="icon-user"></span>
                </div>
                <div>
                    <span className="icon-search"></span>
                    <input/>
                </div>
            </div>
        );
    };
}