import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username) {
    const result = get('http://localhost:3001/api/orderlist/' + username)
    return result
}

export function postComment(id, comment, star) {
    const result = post('http://localhost:3001/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}