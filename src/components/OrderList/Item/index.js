import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'

import './style.less'

export default class Item extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            commentState: 2,
            stars: []
        }
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.item.commentState
        })
    }

    //显示输入框
    showComment() {
        this.setState({
            commentState: 1
        })
    }

    //隐藏输入框
    hideComment() {
        this.setState({
            commentState: 0
        })
    }

    submitComment() {
        const submitComment = this.props.submitComment
        const id = this.props.item.id
        const commentTextDOM = this.refs.commentText
        const star = this.state.stars[id]
        const value = commentTextDOM.value.trim()
        if (!value) {
            return
        }
        submitComment(id, value, star, this.commentOk.bind(this))
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    starClickCallback(star) {
        console.log(star)
        const id = this.props.item.id
        const stars = this.state.stars
        stars[id] = star
        console.log(stars)
        this.setState({
            stars: stars
        })
    }

    render() {
        const data = this.props.item

        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                                // 未评价
                                ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                                :
                                this.state.commentState === 1
                                    // 评价中
                                    ? ''
                                    // 已经评价
                                    : <button className="btn unseleted-btn">已评价</button>
                        }
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text"
                                  ref="commentText"></textarea>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <Star star='0' clickCallback={this.starClickCallback.bind(this)}/>
                        </div>
                        <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                        : ''
                }
            </div>
        );
    };
}