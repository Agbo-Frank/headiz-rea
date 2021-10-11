import axios from "axios"
import { setHeaders } from './userAction'

export function createOrder(doc, history){
    return function(dispatch, getState){
        var cart = getState().user.user.cart
    
        axios.post('/api/order', cart, setHeaders(getState))
           .then(res => {
               dispatch({
                   type: 'EMPTY_CART'
               })
               history.push('/success')
           })
    }
}

export function getOrder(history){
    return function(dispatch, getState){
        dispatch({type: 'LOAD_ORDERS'})
        var user = getState().user.user
        if(!user) history.push('/login')
        axios.get('/api/order',setHeaders(getState))
            .then(res => {
                dispatch({
                    type: 'GET_ORDERS',
                    payload: res.data.order
                })
            })
    }
}

export function getVOrder(){
    return function(dispatch, getState){
        dispatch({type: 'LOAD_ORDERS'})
        axios.get('/api/order/vendor',setHeaders(getState))
            .then(res => {
                dispatch({
                    type: 'GET_ORDERS',
                    payload: res.data.order
                })
            })
    }
}