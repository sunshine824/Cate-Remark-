import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './style.less'

const history = createBrowserHistory()


export default class HomeHeader extends Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            kwd: ''
        }
    }

    ChangeHangle(e) {
        const val = e.target.value
        console.log(val)
        this.setState({
            kwd:val
        })
    }

    KeyUpHandle(e){
        if(e.keyCode!==13){
            return
        }
        console.log(history)
        history.push('/search/all/'+encodeURIComponent(this.state.kwd))
        //window.location.href='/search/all/'+encodeURIComponent(this.state.kwd)
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to='/city'>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <input
                            placeholder="请输入关键字"
                            type="text"
                            value={this.state.kwd}
                            onChange={this.ChangeHangle.bind(this)}
                            onKeyUp={this.KeyUpHandle.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    };
}