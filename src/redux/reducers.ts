import * as Types from '../types'
import { produce } from 'immer'

const initialState: Types.AppState = {

    boards: [],
    tickets: []
}

function createTicket(state: Types.AppState, action: Types.CreateTicketAction): Types.AppState {

    // TODO: Call GraphQL to create a ticket
    const ticket: Types.Ticket = {
        id: `${Date.now()}`,
        name: action.name,
        description: action.description,
        status: Types.INITIAL_TICKET_STATUS,
        visible: true
    }

    return produce(state, (draft: Types.AppState) => {
        draft.tickets.push(ticket)
        return draft
    })
}

function editTicket(state: Types.AppState, ticketId: string): Types.AppState {

    return produce(state, (draft: Types.AppState) => {
        draft.selectedTicket = ticketId
        return draft
    })
}

function updateTicket(state: Types.AppState, action: Types.UpdateTicketAction): Types.AppState {

    return produce(state, (draft: Types.AppState) => {

        // Arrays.find returns a reference
        const ticket: Types.Ticket = draft.tickets.find(ticket => ticket.id === action.id)!
        if (ticket.name !== action.name ||
                ticket.description !== action.description ||
                ticket.status !== action.status
           ) {
               // TODO: Call GraphQL to update a ticket
               ticket.name = action.name
               ticket.description = action.description
               ticket.status = action.status
        }
        return draft
    })
}

function updateSelectedBoard(state: Types.AppState, boardId: string): Types.AppState {

    // TODO: Fetch tickets for the selected board here
    const tickets: Types.Ticket[] = []

    return produce(state, (draft: Types.AppState) => {

        draft.selectedBoard = boardId
        draft.tickets = tickets
        draft.selectedTicket = undefined
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

export function reducer(
    state = initialState,
    action: Types.BoardActionTypes
): Types.AppState {

    switch (action.type) {
        case Types.CREATE_TICKET:
            return createTicket(state, action)

        case Types.EDIT_TICKET:
            return editTicket(state, action.id)

        case Types.UPDATE_TICKET:
            return updateTicket(state, action)

        case Types.SELECT_BOARD:
            return updateSelectedBoard(state, action.id)

        case Types.RECEIVE_BOARDS:
            return getBoards(state, action.boards)

        case Types.RECEIVE_NEW_BOARD:
            return receiveNewBoard(state, action.id, action.name)

        default:
            return state
    }
}
