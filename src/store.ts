import { Store, AnyAction, createStore } from 'redux'
import * as Types from './types'
import { reducer } from './reducers'

export interface AppStore extends Store<Types.AppState, AnyAction> { }

export function getStore(): AppStore {
    return createStore(reducer)
}