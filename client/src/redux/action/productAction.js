import axios from "axios"
import { getError } from "./erroAction"
import { setHeaders } from "./userAction"

export function uploadProduct(doc){
    return function(dispatch, getState){
        dispatch({ type: 'LOADING_ITEM'})
        var body = JSON.stringify(doc)
        axios.post('/api/product', body, setHeaders(getState))
          .then(res => {
              dispatch({
                  type: 'ADD_ITEM',
                  payload: res.data.product
              })
          })
    }
}

export function editProduct(doc){
    return function(dispatch, getState){
        // dispatch({ type: 'LOADING_ITEM'
        var body = JSON.stringify(doc)
        axios.put('/api/product', body, setHeaders(getState))
          .then(res => {
              dispatch({
                  type: 'EDIT_ITEM',
                  payload: res.data.product
              })
          })
    }
}

export function getProduct(){
    return function(dispatch){
        dispatch({ type: 'LOADING_ITEM'})
        axios.get('/api/product')
          .then(res =>
              dispatch({
                  type: 'GET_ITEM',
                  payload: res.data.product
              })
          )
          .catch(err => {
              dispatch(getError(err.response))
          })
    }
}

export function getItem(id){
    return function(dispatch){
        dispatch({ type: 'LOADING_ITEM'})
        axios.get(`/api/product/item/${id}`)
          .then(res =>
              dispatch({
                  type: 'GET_ONE_ITEM',
                  payload: res.data.product
              })
          )
          .catch(err => {
              dispatch(getError(err.response))
          })
    }
}

export function getVendorProduct(){
    return function(dispatch, getState){
        dispatch({ type: 'LOADING_ITEM'})
        axios.get('/api/product/vendorProduct',  setHeaders(getState))
          .then(res =>
              dispatch({
                  type: 'GET_ITEM',
                  payload: res.data.product
              })
          )
          .catch(err => {
              dispatch(getError(err.response))
          })
    }
}