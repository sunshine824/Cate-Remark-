import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home'

export default class Ad extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        const result = getAdData()
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data=json
            if(data.length){
                this.setState({
                    data:data
                })
            }
        }).catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <div>

            </div>
        );
    };
}