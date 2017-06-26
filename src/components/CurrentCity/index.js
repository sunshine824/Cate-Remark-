import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class CurrentCity extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        );
    };
}