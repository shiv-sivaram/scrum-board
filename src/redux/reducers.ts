import * as Types from '../types'
import { produce } from 'immer'

const initialState: Types.AppState = {

    boards: [],
    tickets: []
}

function receiveTickets(state: Types.AppState, tickets: Types.Ticket[]): Types.AppState {

    return produce(state, (draft: Types.AppState) => {
        draft.tickets = tickets
        return draft
    })
}

function getBoards(state: Types.AppState, boards: Types.Board[]): Types.AppState {

    return produce(state, (draft: Types.AppState) => {
        draft.boards = boards
        return draft
    })
}

function receiveNewBoard(state: Types.AppState, id: string, name: string): Types.AppState {

    return produce(state, (draft: Types.AppState) => {
        const board: Types.Board = {id, name}
        draft.boards.push(board)
        return draft
    })
}

function receiveTicketUpdate(state: Types.AppState, ticket: Types.Ticket): Types.AppState {

    return produce(state, (draft: Types.AppState) => {

        let existingTicket = draft.tickets.find(tkt => tkt.id === ticket.id)
        existingTicket = ticket
        return draft
    })
}

function receiveTicketDelete(state: Types.AppState, ticketId: string): Types.AppState {

    return produce(state, (draft: Types.AppState) => {
        draft.tickets = draft.tickets.filter(ticket => ticket.id !== ticketId)
        return draft
    })
}

export function reducer(
    state = initialState,
    action: Types.BoardActionTypes
): Types.AppState {

    switch (action.type) {
        case Types.RECEIVE_TICKETS:
            return receiveTickets(state, action.tickets)

        case Types.RECEIVE_BOARDS:
            return getBoards(state, action.boards)

        case Types.RECEIVE_NEW_BOARD:
            return receiveNewBoard(state, action.id, action.name)

        case Types.RECEIVE_TICKET_UPDATE:
            return receiveTicketUpdate(state, action.ticket)

        case Types.RECEIVE_TICKET_DELETE:
            return receiveTicketDelete(state, action.id)
        default:
            return state
    }
}
