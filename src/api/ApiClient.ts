import { Observable } from 'apollo-boost'
import * as Types from '../types'

export type ApiClientResult<T> = {
    error?: Error;
    result?: T;
}

export interface ApiClient {
    getBoards: (organisationId: string) => Promise<ApiClientResult<Types.Board[]>>
    createBoard: (organisationId: string, name: string) => Promise<ApiClientResult<Types.Board>>

    getTickets: (organisationId: string, boardId: string) => Promise<ApiClientResult<Types.Ticket[]>>
}
