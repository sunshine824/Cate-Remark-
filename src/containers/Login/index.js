import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class Login extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking: true //判断是否登录
        }
    }

    componentDidMount() {
        this.doCheck()
    }

    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            //已经登录
            this.goUserPage()
        } else {
            //尚未登录
            this.setState({
                checking: false
            })
        }
    }

    //登录成功之后的处理
    loginHandle(username) {
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)
    }

    goUserPage() {
        this.props.history.push('/User')
    }


    render() {
        return (
            <div>
                <Header title="登录页面"/>
                {
                    this.state.checking
                        ? <div></div>
                        : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)