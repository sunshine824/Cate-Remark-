/**
 * Created by Gatsby on 2017/6/21.
 */
export default {
    getItem(key){
        let value;
        try {
            value = localStorage.getItem(key)
        } catch (err) {
            console.log(err.message)
        } finally {
            return value
        }
    },
    setItem(key,value){
        try{
            localStorage.setItem(key,value)
        }catch (err) {
            console.log(err.message)
        }
    }
}