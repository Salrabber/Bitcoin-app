import { CREATE_TOKEN } from "./types";

export function createToken(token){
    return{
        type: CREATE_TOKEN,
        payload: token
    }
}