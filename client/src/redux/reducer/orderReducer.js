
var initialState = {
    items: [],
    loading: false
}

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case 'LOAD_ORDERS':{
            return{
                ...state,
                loading: true
            }
        }
        case 'GET_ORDERS':{
            return{
                ...state,
                items: [
                    ...action.payload
                ],
                loading: false
            }
        }
        default: {
            return{
                ...state
            }
        }
    }
}