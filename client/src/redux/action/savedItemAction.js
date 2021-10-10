import axios from "axios"
import { getError } from "./erroAction"
import { setHeaders } from "./userAction"


export function addToSavedItem(id){
    return function(dispatch, getState){
        axios.put(`/api/savedItem`, {id} ,  setHeaders(getState))
          .then(res => {
                dispatch({
                    type: 'ADD_TO_SAVEDITEMS',
                    payload: id
                })
            })
          .catch(err => {
              dispatch(getError(err.response.error))
          })
    }
}

export function removefromSavedItem(id){
    return function(dispatch, getState){
        dispatch({
            type: 'RI_SI',
            payload: id
        })
        axios.delete(`/api/savedItem/${id}`, setHeaders(getState))
          .then(res => {
              dispatch({
                  type: 'REMOVE_FROM_SAVED_ITEM',
                  payload: id
              })
          })
          .catch(err => {
              dispatch(getError(err.response.error))
          })
    }
}

export function getSavedItem(){
    return function(dispatch, getState){
        dispatch({type: 'LOADING_SAVED_ITEM'})
        axios.get(`/api/savedItem`, setHeaders(getState))
          .then(res => {
              dispatch({
                  type: 'GET_SAVED_ITEM',
                  payload: res.data.product
              })
          })
          .catch(err => {
              dispatch(getError(err.response.err))
          })
    }
}
