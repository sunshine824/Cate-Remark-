import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header'

class City extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){
        console.log(this.props.userinfo)
        console.log(this.props.userInfoActions)
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    };
}

//连接redux
function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
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