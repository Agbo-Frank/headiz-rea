

export function getError(errorMsg, status){
    return {
        type: 'GET_ERROR',
        payload: {errorMsg, status}
    }
}
export function clearError(){
    return {
        type: 'CLEAR_ERROR'
    }
}