import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Categroy from '../../components/Category'
import {connect} from 'react-redux'
import Ad from './subpage/ad'
import List from './subpage/List'

class Home extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Categroy/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        );
    };
}
function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);