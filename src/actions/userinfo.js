/**
 * Created by Gatsby on 2017/6/21.
 */
import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}