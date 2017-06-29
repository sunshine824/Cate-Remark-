import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class Star extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        var star = this.props.star || 0
        if (star > 5) {
            star = star % 5
        }
        return (
            <div className="star-container">
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        const lightClass = star >= item ? 'light' : ''
                        return <i key={index} className={'icon-star ' + lightClass}></i>
                    })
                }
            </div>
        );
    };
}