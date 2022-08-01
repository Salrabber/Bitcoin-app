import {combineReducers} from 'redux'
import { tokensReducer } from './tokensReducer'

export const rootReduser = combineReducers({
    tokens: tokensReducer
})