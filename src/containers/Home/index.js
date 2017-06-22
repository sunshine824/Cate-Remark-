import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'

export default class Home extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <HomeHeader/>
            </div>
        );
    };
}