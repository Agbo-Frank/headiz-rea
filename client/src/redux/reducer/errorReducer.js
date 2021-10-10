var initialState = {
    errorMsg: {},
    status: null
}

export default function errorReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_ERROR':{
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
                status: action.payload.status
            }
        }
        case 'CLEAR_ERROR':{
            return {
                ...state,
                errorMsg:{},
                status: null
            }
        }
        default:{
            return state
        }
            
    }
}