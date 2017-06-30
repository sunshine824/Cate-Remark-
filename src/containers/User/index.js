import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        if (!this.props.userinfo.username) {
            this.props.history.push('/Login')
        }
    }

    render() {
        const userinfo = this.props.userinfo
        const username=userinfo.username
        const cityName=userinfo.cityName
        return (
            <div>
                <Header title="用户中心" backRouter="/"/>
                <UserInfo username={username} cityName={cityName}/>
                <OrderList username={username}/>
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
)(User);