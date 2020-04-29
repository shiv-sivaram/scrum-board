import * as Types from './types'

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