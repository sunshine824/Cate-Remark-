import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getOrderListData,postComment} from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList'

import './style.less'

export default class OrderList extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const username = this.props.username
        if (username) {
            this.loadOrderList(username)
        }
    }

    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    //提交评价
    submitCommit(id,value,star,callback){
        const result=postComment(id,value,star)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            if(json.errno===0){
                callback()
            }
        }).catch(err=>{
            console.log(err.message)
        })
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} submitComment={this.submitCommit.bind(this)}/>
                        : <div>暂无数据</div>
                }
            </div>
        );
    };
}