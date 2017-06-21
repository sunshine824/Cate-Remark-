/**
 * Created by Gatsby on 2017/6/21.
 */
import React, {Component} from 'react';
import {Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from '../containers'

const history = createBrowserHistory()

class RouteMap extends Component {
    render() {
        return (
            <Router history="history">

            </Router>
        )
    }
}
export default RouteMap