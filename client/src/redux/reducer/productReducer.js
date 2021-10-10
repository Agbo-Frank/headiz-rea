const initialState = {
    items: [],
    item: {},
    loading: false
}

export default function productReducer(state = initialState, action){
    switch (action.type) {
        case 'LOADING_ITEM': {
            return {
                ...state,
                loading: true
            }
        }
        // case 'EDIT_ITEM':
        case 'ADD_ITEM': {
            return{
                ...state,
                items: [
                    ...state.items,
                    {
                        ...action.payload
                    }
                ],
                loading: false
            }
        }
        case 'EDIT_ITEM': {
            return{
                ...state,
                item: [
                    ...state.items,
                    {
                        ...action.payload
                    }
                ],
                loading: false
            }
        }
        case 'GET_ITEM': {
            return{
                ...state,
                items: [
                    ...action.payload
                ],
                item: {},
                loading: false
            }
        }
        case 'GET_ONE_ITEM': {
            return{
                ...state,
                item: {
                    ...action.payload
                },
                loading: false
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}