import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class BuyAndStore extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    storeClickHandle(){
        this.props.storeHandle()
    }

    render() {
        return (
            <div>
                {
                    this.props.isStore
                        ? <button onClick={this.storeClickHandle.bind(this)}>已收藏</button>
                        : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                }
            </div>
        );
    };
}