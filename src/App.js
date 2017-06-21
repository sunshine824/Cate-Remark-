import React, {Component} from 'react';
import RouteMap from './router/routeMap'
import localStore from './util/localStorage'
import {CITYNAME} from './confjg/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from './actions/userinfo'
import configureStore from './store/configureStore'

const store = configureStore()


class App extends Component {
    constructor() {
        super();
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? <RouteMap/>
                        : '正在加载...'
                }
            </div>
        );
    }

    componentDidMount() {
        //获取位置信息
        let cityName = localStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '成都'
        }

        //将城市信息存储到Redux中
        this.props.userInfoActions.update({
            cityName: cityName
        })

        this.setState({
            initDone: true
        })
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
