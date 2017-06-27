import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Search extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount(){
        const match=this.props.match
        console.log(match)
        //console.log(match.params.category)
    }

    render() {
        return (
            <div>
                search
            </div>
        );
    };
}