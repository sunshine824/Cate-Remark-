import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

export default class Search extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const match=this.props.match
        return (
            <div>
                <SearchHeader keyword={match.params.keyword}/>
                <SearchList keyword={match.params.keyword} category={match.params.category}/>
            </div>
        );
    };
}