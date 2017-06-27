import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import localStore from '../../util/localStorage'
import {CITYNAME} from '../../confjg/localStoreKey'

class City extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {

    }

    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        //修改redux
        const userinfo=this.props.userinfo
        userinfo.cityName=newCity
        this.props.userInfoActions.update(userinfo)

        //修改localStroge
        localStore.setItem(CITYNAME,newCity)

        //跳转到首页
        this.props.history.push('/')  //route的一大坑
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
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
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);