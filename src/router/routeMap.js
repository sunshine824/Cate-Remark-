/**
 * Created by Gatsby on 2017/6/21.
 */
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'

const history = createBrowserHistory()

class RouteMap extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/user" component={User}/>
                    <Route path="/search/:category/:keyword" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/Login" component={Login}/>
                </div>
            </Router>
        )
    }
}
export default RouteMap