import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/info'
import Comment from './subpage/comment'

export default class Detail extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        //获取参数id
        const id = this.props.match.params.id

        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Comment id={id}/>
            </div>
        );
    };
}