import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import * as Types from '../types'
import { ApiClient } from '../api/ApiClient'
import * as Constants from '../constants'

export function receiveTickets(tickets: Types.Ticket[]): Types.BoardActionTypes {
    return {
        type: Types.RECEIVE_TICKETS,
        tickets
    }
}

export function receiveBoards(boards: Types.Board[]): Types.BoardActionTypes {
    return {
        type: Types.RECEIVE_BOARDS,
        boards
    }
}

export function receiveNewBoard(id: string, boardName: string): Types.BoardActionTypes {
    return {
        type: Types.RECEIVE_NEW_BOARD,
        id,
        name: boardName
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

export const createNewBoard = (name: string) => {

    console.log("Waiting to create a new board " + name)

    return async function (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => Types.AppState,
        { apiClient }: { apiClient: ApiClient }
    ): Promise<void> {

        console.log("Creating a new board " + name)
        let response
        try {

            response = await apiClient.createBoard(Constants.ORGANISATION_ID, name)
            if (response.result) {
                dispatch(receiveNewBoard(response.result.id, response.result.name))
            } else if (response.error) {
                throw response.error
            } else {
                throw new Error('Undefined error')
            }
        } catch (error) {
            throw error
        }
    }
}

export const fetchTickets = (boardId: string) => {
    return function (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => Types.AppState,
        { apiClient }: { apiClient: ApiClient }
    ) {
        return apiClient.getTickets(Constants.ORGANISATION_ID, boardId).then((result) => {
            if (result.result) {
                dispatch(receiveTickets(result.result))
            }
            else if (result.error) throw result.error
        })
    }
}