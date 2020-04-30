import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import * as Types from './types'
import { ApiClient } from './api/ApiClient'
import * as Constants from './constants'

export function createTicket(name: string, description: string): Types.BoardActionTypes {
    return {
        type: Types.CREATE_TICKET,
        name,
        description
    }
}

export function editTicket(ticketId: string): Types.BoardActionTypes {
    return {
        type: Types.EDIT_TICKET,
        id: ticketId
    }
}

export function updateTicket(ticketId: string, name: string, description: string, status: string): Types.BoardActionTypes {
    return {
        type: Types.UPDATE_TICKET,
        id: ticketId,
        name,
        description,
        status
    }
}

export function selectBoard(boardId: string): Types.BoardActionTypes {
    return {
        type: Types.SELECT_BOARD,
        id: boardId
    }
}

export function receiveBoards(boards: Types.Board[]): Types.BoardActionTypes {
    return {
        type: Types.RECEIVE_BOARDS,
        boards
    }
}

export const fetchBoards = () => {
    return function (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => Types.AppState,
        { apiClient }: { apiClient: ApiClient }
    ) {
        return apiClient.getBoards(Constants.ORGANISATION_ID).then((result) => {
            if (result.result) {
                dispatch(receiveBoards(result.result))
            }
            else if (result.error) throw result.error
        })
    }
}