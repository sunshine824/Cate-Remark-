import React, {Component} from 'react';
import RouteMap from './router/routeMap'
import localStore from './util/localStorage'
import {CITYNAME} from './confjg/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from './actions/userinfo'

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


        this.setState({
            initDone: true
        })
    }
}

export default App;
