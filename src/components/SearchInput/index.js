import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class SearchInput extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            kwd: ''
        }
    }

    componentDidMount(){
        this.setState({
            kwd:this.props.value || ''
        })
    }

    ChangeHandle(e){
        this.setState({
            kwd:e.target.value
        })
    }

    KeyUpHandle(e){
        if(e.keyCode!==13 || this.state.kwd==''){
            return
        }
        this.props.enterHandle(this.state.kwd)
    }

    render() {
        return (
            <input
                type="text"
                className="search-input"
                placeholder="请输入关键字"
                value={this.state.kwd}
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
            />
        );
    };
}