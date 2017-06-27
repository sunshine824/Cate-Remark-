import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput'
import './style.less'

export default class SearchHeader extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    clickHandle() {
        window.history.back()
    }

    enterHandle(value) {
        window.location.href='/search/all/'+encodeURIComponent(value)
    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        );
    };
}