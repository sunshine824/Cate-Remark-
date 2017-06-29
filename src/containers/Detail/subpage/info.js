import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detai'

export default class Info extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            info: false,
        }
    }

    componentDidMount() {
        const result = getInfoData(this.props.id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <div>有数据了</div>
                        : ''
                }
            </div>
        );
    };
}