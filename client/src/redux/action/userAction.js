import axios from 'axios'
import { getError, clearError } from './erroAction'
import { useHistory } from 'react-router'

export function loadUser(){
    return function(dispatch, getState){
        dispatch({ type: 'LOADING_USER' })

        axios.get('/api/auth/user', setHeaders(getState))
          .then(res => {
                dispatch({
                 type: 'LOADED_USER',
                 payload: res.data.user
                })
            })
          .catch(err => dispatch({type: 'AUTH_FAILED'}))  
        }
}
export function loadVendor(){
    return function(dispatch, getState){
        dispatch({ type: 'LOADING_USER' })

        axios.get('/api/auth/vendor', setHeaders(getState))
          .then(res => {
              console.log(res.data);
                dispatch({
                 type: 'LOADED_USER',
                 payload: res.data.user
                })
            })
          .catch(err => dispatch({type: 'AUTH_FAILED'}))  
        }
}
export function loginUser(doc, history){
    return function(dispatch){
        var body = JSON.stringify(doc)
        
        axios.post('/api/auth', body, {headers: {"Content-Type": "application/json"}})
          .then(res => {
                dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: res.data
                    });
                dispatch(clearError())
                res.data.user.isUser ? history.push('/') : history.push('/vendor')
            })
          .catch(err => {
              dispatch({type: 'LOGIN_FAILED'});
              dispatch(getError(err.response.data.error, err.response.status))
            })  
    }
}

export function resetPassword(doc){
    return function(dispatch){
        var body = JSON.stringify(doc)
        axios.post('api/auth/forgetPassword', body, {headers:{"Content-Type": "application/json"}})
            .then(res => {
                dispatch(clearError())
            })
            .catch(err => {
                console.log(err.response.data)
                dispatch(getError(err.response.data.message, err.response.status))
            })
    }
}
export function registerUser(doc, history){
    return function(dispatch){

        var body = JSON.stringify(doc)

        axios.post('/api/user', body, {headers: { "Content-Type": "application/json"}})
          .then(res => {
              dispatch({
                type: 'SIGNUP_SUCCESS',
                payload: res.data
            })
            dispatch(clearError())
            history.push('/DashBoard')
          })
          .catch(err => {
              dispatch({
                  type: 'SIGNUP_FAILED'
              })
              dispatch(getError(err.response.data.error, err.response.status))
          })
    }
}
export function registerVendor(doc, history){
    return function(dispatch){

        var body = JSON.stringify(doc)

        axios.post('/api/user/vendor', body, {headers: { "Content-Type": "application/json"}})
          .then(res => {
              dispatch({
                type: 'SIGNUP_SUCCESS',
                payload: res.data
            })
            history.push('/vendor')
            dispatch(clearError())
          })
          .catch(err => {
              dispatch({
                  type: 'SIGNUP_FAILED'
              })
              dispatch(getError(err.response.data.error, err.response.status))
          })
    }
}
export function setHeaders(getState){
    var token = getState().user.token

    var config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(token){
        config.headers['x-auth-token'] = token
    }

    return config
}
