import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import BuyAndStore from '../../../components/BuyAndStore'
import {bindActionCreators} from 'redux'
import * as storeActionsFromFile from '../../../actions/store'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Buy extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isStore: false
        }
    }

    componentDidMount() {
        this.checkStoreState()
    }

    //购买事件
    buyHandle() {
        //验证是否登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }
        //购买的流程

        //跳转到用户主页
        this.props.history.push('/User')

    }

    //检验当前商户是否被收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                //跳出循环
                return true
            }
        })
    }

    //收藏事件
    storeHandle() {
        //验证是否登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }
        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            //当前商户已经被收藏，点击时即要取消收藏
            storeActions.rm({id: id})
        } else {
            //当前商户尚未被收藏，点击时即要执行收藏
            storeActions.add({id: id})
        }

        //修改状态(取反)
        this.setState({
            isStore: !this.state.isStore
        })
    }

    //验证登录
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            history.push('/Login')
            return false;
        }
        return true
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)}
                             storeHandle={this.storeHandle.bind(this)}/>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)