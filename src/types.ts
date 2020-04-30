export const RECEIVE_TICKETS = "RECEIVE_TICKETS"
export const RECEIVE_BOARDS = "RECEIVE_BOARDS"
export const RECEIVE_NEW_BOARD = "RECEIVE_NEW_BOARD"

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

export interface ReceiveTicketsAction {
    type: typeof RECEIVE_TICKETS
    tickets: Ticket[]
}

export interface ReceiveBoardsAction {
    type: typeof RECEIVE_BOARDS
    boards: Board[]
}

export interface CreateBoardAction {
    type: typeof RECEIVE_NEW_BOARD
    id: string
    name: string
}

export type BoardActionTypes = 
    ReceiveTicketsAction
    | ReceiveBoardsAction
    | CreateBoardAction
