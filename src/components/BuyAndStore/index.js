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

    buyClickHandle(){
        this.props.buyHandle()
    }

    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        // 是否已经收藏了
                        this.props.isStore
                            ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
                            : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        );
    };
}