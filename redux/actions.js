import { CREATE_TOKEN, FETCH_TOKENS, SHOW_LOADER, HIDE_LOADER } from "./types";

export function createToken(token){
    return{
        type: CREATE_TOKEN,
        payload: token
    }
}

export function showLoader(){
    return{
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return{
        type: HIDE_LOADER
    }
}

export function fetchTokens(){
    return async dispatch => {
        dispatch(showLoader())
        // const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=5')
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const json = await response.json()
        setTimeout(() => {
            dispatch({
                type: FETCH_TOKENS,
                payload: json
            })
            dispatch(hideLoader())
        }, 1000)
    }
}