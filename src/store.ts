import { Store, AnyAction, applyMiddleware, createStore } from 'redux'
import * as Types from './types'
import { reducer } from './reducers'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { ApiClient } from './api/ApiClient';

export interface Services {
    apiClient: ApiClient
}

export interface AppStore extends Store<Types.AppState, AnyAction> { 
    dispatch: ThunkDispatch<Types.AppState, Services, AnyAction>
}

export function getStore(apiClient: ApiClient): AppStore {
    return createStore(reducer,
        applyMiddleware(thunkMiddleware.withExtraArgument({ apiClient }))
    )
}