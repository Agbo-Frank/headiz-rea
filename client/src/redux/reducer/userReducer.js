 const initialState ={
     token: localStorage.getItem('token'),
     isAuthenticated: null,
     totalBill: null,
     loading: false,
     user: null
 }

 export default function userReducer(state = initialState, action){
     switch(action.type){
         case 'LOADING_USER': {
             return {
                 ...state,
                 loading: true
             }
         }
         case 'LOADED_USER': {
             return {
                 ...state,
                 isAuthenticated: true,
                 loading: false,
                 user: action.payload
             }
         }
         case 'LOGIN_SUCCESS':
         case 'SIGNUP_SUCCESS':   
              {
             localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token, 
                isAuthenticated: true,
                user: {...action.payload.user},
                loading: false,
            }
        }
        
        case 'GET_CART_ITEMS':{
            return{
                ...state,
                user: {
                    ...state.user,
                    cart: [
                        ...action.payload
                    ]
                },
                loading: false
            }
        }    
        case 'LOGIN_FAILED':
        case 'SIGNUP_FAILED':
        case 'LOGOUT':
        case 'AUTH_FAILED': {
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null
            }
        }
        case 'ADD_TO_SAVEDITEMS':
            {
                return{
                    ...state,
                    user: {
                        ...state.user,
                        savedItems: state.user.savedItems.includes(action.payload) ?[
                            ...state.user.savedItems
                        ]:
                        [
                            ...state.user.cart,
                            action.payload
                        ]
                    }
                }
            }
        case 'ADD_TO_CART':
            {
                return{
                    ...state,
                    user: {
                        ...state.user,
                        cart: [
                                ...state.user.cart,
                                { ...action.payload }
                              ]
                    },
                    loading: false
                }
            }

        case 'INC': {
            return{
                ...state,
                user: {
                    ...state.user,
                    cart: state.user.cart.map(item => (
                        item.itemId === action.payload ?
                        {...item, quantity: item.quantity + 1} :
                        {...item} 
                    ))
                }
            }
        } 
        
        case 'DEC': {
            return{
                ...state,
                user: {
                    ...state.user,
                    cart: state.user.cart.map(item => (
                        item.itemId === action.payload ?
                        {...item, quantity: item.quantity - 1} :
                        {...item} 
                    ))
                }
            }
        } 

        case 'RI_SI':
            {
                return{
                    ...state,
                    user: {
                        ...state.user,
                        savedItems: state.user.savedItems.filter(item => {
                            return item !== action.payload
                        }),
                    },
                    loading: false
                }
            } 
        case 'RI_CART':
            {
                return{
                    ...state,
                    user: {
                        ...state.user,
                        cart: state.user.cart.filter(item => {
                            return item.itemId !== action.payload
                        })
                    },
                    loading: false
                }
            } 
        case 'EMPTY_CART': {
            return{
                ...state,
                user: {
                    ...state.user,
                    cart: state.user.cart.filter(item => {
                        return false
                    })
                },
                loading: false
            }
        }    
        case 'UPDATE_BILL': {
            return{
                ...state,
                totalBill: action.payload,
            }
        } 
        
        case 'QUANTITY': {
            return{
                ...state,
                user: {
                    ...state.user,
                    cart: state.user.cart.map(item => (
                        item.itemId === action.payload.itemId ?
                        {...item, quantity: action.payload.quantity} :
                        { ...item }
                    ))
                }
            }
        }
        default: {
           return  { ...state }
        }           
     }
 }