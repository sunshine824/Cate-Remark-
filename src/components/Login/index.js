import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class Login extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            username: ''
        }
    }

    changeHandle(e) {
        this.setState({
            username: e.target.value
        })
    }

    clickHandle() {
        const username = this.state.username
        if(username===''){
            return
        }
        this.props.loginHandle(username)
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        );
    };
}