import { CREATE_TOKEN, FETCH_TOKENS } from "./types";

export function createToken(token){
    return{
        type: CREATE_TOKEN,
        payload: token
    }
}

export function fetchTokens(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=5')
        const json = await response.json()
        dispatch({
            type: FETCH_TOKENS,
            payload: json
        })
    }
}