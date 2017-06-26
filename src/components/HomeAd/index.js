import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'
import './style.less'

export default class HomeAd extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const data = this.props.data
        return (
            <div id="home-ad">
                <h2>超级特惠</h2>
                <div className="ad-container clear-fix">
                    {
                        data.map((item, index) => {
                            return <div key={index} className="ad-item float-left">
                                <a href={item.link}>
                                    <img src={item.img} alt="" style={{width:'100px'}} />
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    };
}