import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class Star extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            star:0
        }
    }

    componentDidMount(){
        this.setState({
            star:this.props.star
        })
    }

    clickHandle(star){
        const clickCallback=this.props.clickCallback
        if(!clickCallback){
            return
        }
        clickCallback(star)

        this.setState({
            star:star
        })
    }

    render() {
        var star = this.state.star || 0
        if (star > 5) {
            star = star % 5
        }
        return (
            <div className="star-container">
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        const lightClass = star >= item ? 'light' : ''
                        return <i key={index} className={'icon-star ' + lightClass} onClick={this.clickHandle.bind(this,item)}></i>
                    })
                }
            </div>
        );
    };
}