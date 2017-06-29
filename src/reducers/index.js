/**
 * Created by Gatsby on 2017/6/21.
 */
import {combineReducers} from 'redux'
import userinfo from './userinfo'
import store from './store'

export default combineReducers({
    userinfo,
    store
})