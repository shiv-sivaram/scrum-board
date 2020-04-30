export const CREATE_TICKET = "CREATE_TICKET"
export const EDIT_TICKET = "EDIT_TICKET"
export const UPDATE_TICKET = "UPDATE_TICKET"
export const SELECT_BOARD = "SELECT_BOARD"
export const RECEIVE_BOARDS = "RECEIVE_BOARDS"

export const INITIAL_TICKET_STATUS = "To Do"

export interface AppState {

    boards: Board[]
    selectedBoard?: string
    tickets: Ticket[]
    selectedTicket?: string
}

export interface Board {
    id: string,
    name: string
}

export interface Ticket {
    id: string,
    name: string,
    description: string,
    status: string,
    visible: boolean
}

export interface BoardState {
    boards: Board[]
}

export interface SelectedBoardState {
    selectedBoard: string,
    tickets: Ticket[],
    selectedTicket?: string
}

export interface CreateTicketAction {
    type: typeof CREATE_TICKET
    name: string
    description: string
}

export interface EditTicketAction {
    type: typeof EDIT_TICKET
    id: string
}

export interface UpdateTicketAction {
    type: typeof UPDATE_TICKET
    id: string
    name: string
    status: string
    description: string
}

export interface SelectBoardAction {
    type: typeof SELECT_BOARD
    id: string
}

export interface ReceiveBoardsAction {
    type: typeof RECEIVE_BOARDS
    boards: Board[]
}

export type BoardActionTypes = CreateTicketAction
    | EditTicketAction
    | UpdateTicketAction
    | SelectBoardAction
    | ReceiveBoardsAction
