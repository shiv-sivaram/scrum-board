import * as Types from './types'
import { produce } from 'immer'


const initialState: Types.AppState = {
    boards: [{
        id: "1",
        name: "One"
    }],
    selectedBoardId: "1",
    tickets: []
}

function createTicket(state: Types.AppState, action: Types.CreateTicketAction): Types.AppState {

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
               ticket.name = action.name
               ticket.description = action.description
               ticket.status = action.status
        }
        return draft
    })
}

function updateSelectedBoard(state: Types.AppState, boardId: string): Types.AppState {

    // Fetch tickets for the selected board here
    const tickets: Types.Ticket[] = []

    return produce(state, (draft: Types.AppState) => {

        draft.selectedBoardId = boardId
        draft.tickets = tickets
        draft.selectedTicket = undefined
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

        default:
            return state
    }
}
