import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getSearchData} from '../../../fetch/search/search'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import {connect} from 'react-redux'

import './style.less'

// 初始化一个组件的 state
const initialState = {
    data: [], //存储列表信息
    hasMore: false, //是否还有第二页数据
    isLoadingMore: false,  //记录当前状态下，是否正在加载，false没有加载，true正在加载
    nextPage: 1 //记录下一页page
}

class List extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = initialState
    }

    componentDidMount() {
        //获取列表数据
        this.loadFirstPageData()
    }

    //获取第一页数据
    loadFirstPageData() {
        const cityName = this.props.userinfo.cityName;
        const keyword = this.props.keyword;
        const category = this.props.category
        const result = getSearchData(cityName, 0, keyword, category)
        this.resultHandle(result)
    }

    //点击加载更多数据
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.userinfo.cityName;
        const nextPage = this.state.nextPage;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const result = getSearchData(cityName, nextPage, keyword, category)
        this.resultHandle(result)

        this.setState({
            nextPage: nextPage + 1,
            isLoadingMore: false
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

    componentDidUpdate(prevProps,prevState){
        const keyword=this.props.keyword
        const category = this.props.category

        if(keyword===prevProps.keyword && category===prevProps.category){
            return
        }

        //重置状态
        this.setState(initialState)

        //重新加载数据
        this.loadFirstPageData()
    }

    render() {
        return (
            <div>
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

//连接redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);