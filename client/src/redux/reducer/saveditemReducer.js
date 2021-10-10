var initialState = {
    items: [],
    loading: false
}

export default function savedItemReducer(state = initialState, action){
    switch(action.type){
        case 'LOADING_SAVED_ITEM': {
            return {
                ...state,
                loading: true
            }
        }
        case 'GET_SAVED_ITEM':{
            return{
                ...state,
                items: [
                    ...action.payload
                ],
                loading: false
            }
        }
        case 'REMOVE_FROM_SAVED_ITEM': {
            return {
                ...state,
                items: state.items.filter(item => {
                   return item._id !== action.payload
                }), 
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