import { CREATE_TOKEN, FETCH_TOKENS } from "./types"

const initialState ={
    tokens: [],
    fetchTokens: []
}

export const tokensReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_TOKEN:
            return {...state, tokens: [...state.tokens, action.payload]}
        case FETCH_TOKENS:
            return{...state, fetchTokens: action.payload}
        default: return state
    }
}