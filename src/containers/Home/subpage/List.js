import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'

import './style.less'

export default class List extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],
            hasMore: false
        }
    }

    componentDidMount() {
        //获取列表数据
        this.loadFirstPageData()
    }

    //获取第一页数据
    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0)
        this.resultHandle(result)
    }

    //数据处理函数
    resultHandle(result) {
        result.then((res) => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                hasMore: hasMore,
                data: data
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>加载中...</div>
                }

            </div>
        );
    };
}