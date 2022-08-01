import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { tokensReducer } from './tokensReducer'

export const rootReduser = combineReducers({
    tokens: tokensReducer,
    app: appReducer
})