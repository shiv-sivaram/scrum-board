import { Observable } from 'apollo-boost'
import * as Types from '../types'

export type ApiClientResult<T> = {
    error?: Error;
    result?: T;
}

export interface ApiClient {
    getBoards: (organisationId: string) => Promise<ApiClientResult<Types.Board[]>>
    // getTickets: (id: string) => Promise<ApiClientResult<Types.Ticket[]>>
    // createTicket: () => Promise<ApiClientResult<Types.Ticket>>
    // updateTicket: () => Promise<ApiClientResult<Types.Ticket>>
}
