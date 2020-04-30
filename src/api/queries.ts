import { gql } from 'apollo-boost';

export const queryOrgBoardsGql = gql`
query organisation($organisationId: ID!) {
    organisation(organisationId: $organisationId) {
      id
      name
      boards {
        id
        name
      }
    }
  }
`
export const mutationPutBoardGql = gql`
    mutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {
        putBoard(organisationId: $organisationId, boardId: $boardId, input: $input) {
        id
        name
        }
    }
`
export const queryBoardGql = gql`
    query board($organisationId: ID!, $boardId: ID!) {
        board(organisationId: $organisationId, boardId: $boardId) {
        tickets {
            id
            name
            description
            status
            visible    
        }  
        }
    }
`

export const putTicketGql = gql`
    mutation putTicket($organisationId: ID!, $boardId: ID!, $ticketId: ID $input: TicketInput!) {
        putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: $ticketId, input: $input) {
        id
        name
        description
        status
        visible
        }
    }
`
export const deleteTicketGql = gql`
    mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
        deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
        id
        name
        description
        status
        visible
        }
    }
`