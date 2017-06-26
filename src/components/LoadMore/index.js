import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class LoadMore extends Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    loadMoreHandle() {
        this.props.loadMoreFn()
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper

        let timeoutId;

        function callback() {
            const top = wrapper.getBoundingClientRect().top //获取距离顶部距离
            const windowHeight = window.screen.height //获取屏幕高度

            if (top && top < windowHeight) {
                //当wrapper 已经被滚动到暴露在页面的可视范围触发
                loadMoreFn()
            }
        }

        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearInterval(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }, false)
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    };
}