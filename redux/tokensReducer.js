import { CREATE_TOKEN } from "./types"

const initialState ={
    tokens: [],
    upTime: []
}

export const tokensReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_TOKEN:
            return {...state, tokens: [...state.tokens, action.payload]}
        default: return state
    }
}