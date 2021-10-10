import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

var middleWare = applyMiddleware(thunk)

const store = createStore(reducer, middleWare)

export default store