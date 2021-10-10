import { combineReducers } from "redux";
import errorReducer from './errorReducer'
import productReducer from './productReducer'
import savedItemReducer from "./saveditemReducer";
import orderReducer from "./orderReducer";
import userReducer from './userReducer'

export default combineReducers({
    error: errorReducer,
    product: productReducer,
    user: userReducer,
    savedItem: savedItemReducer,
    order: orderReducer,
})