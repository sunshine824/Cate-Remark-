/**
 * Created by Gatsby on 2017/6/21.
 */
import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    return store
}