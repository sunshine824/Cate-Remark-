import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

export default class OrderList extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const data=this.props.data
        const submitComment=this.props.submitComment
        return (
            <div>
                {
                    data.map((item,index)=>{
                        return <Item item={item} key={index} submitComment={submitComment}/>
                    })
                }
            </div>
        );
    };
}