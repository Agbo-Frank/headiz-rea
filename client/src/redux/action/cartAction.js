import axios from "axios"
import { setHeaders } from "./userAction"
import { getError } from "./erroAction"


export function getCartItem(history){
    return function(dispatch, getState){
        dispatch({type: 'LOADING_USER'})
        var user = getState().user.user
        if(!user) history.push('/login')
        axios.get('/api/cart', setHeaders(getState))
          .then(res => {
              dispatch({
                  type: 'GET_CART_ITEMS',
                  payload: res.data.cart
              })
          })
          .catch(err => dispatch(getError(err.response.err)))
    }
}

export function addToCart(itemId, price, category, quantity, file_id, name){
    return function(dispatch, getState){
        axios.put(`/api/cart/`, { itemId, price, category, quantity, file_id, name }, setHeaders(getState))
            .then(res => {
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: { itemId, price, category, quantity, file_id, name }
                    })
            })
            .catch(err => dispatch(getError(err.response.err)))
    }
}

export function removeFromCart(id){
    return function(dispatch, getState){
        dispatch({
            type: 'RI_CART',
            payload: id
        })
        axios.delete(`/api/cart/${id}`, setHeaders(getState))
          .then(res => console.log(res))
          .catch(err => dispatch(getError(err.response.err)))
    }
}