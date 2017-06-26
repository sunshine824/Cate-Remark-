import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

export default class List extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [], //存储列表信息
            hasMore: false, //是否还有第二页数据
            isLoadingMore: false,  //记录当前状态下，是否正在加载，false没有加载，true正在加载
            nextPage: 1 //记录下一页page
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

    //点击加载更多数据
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const nextPage = this.state.nextPage;
        const result = getListData(cityName, nextPage)
        this.resultHandle(result)

        this.setState({
            nextPage: nextPage + 1,
            isLoadingMore:false
        })
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
                data: this.state.data.concat(data)
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
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : <div></div>
                }

            </div>
        );
    };
}