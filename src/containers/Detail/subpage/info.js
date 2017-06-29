import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detai'
import DetailInfo from '../../../components/DetailInfo'

export default class Info extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: false,
        }
    }

    componentDidMount() {
        const result = getInfoData(this.props.id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data
                        ? <DetailInfo data={this.state.data}/>
                        : ''
                }
            </div>
        );
    };
}