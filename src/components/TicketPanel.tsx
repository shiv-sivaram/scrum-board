import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import * as Types from '../types'
import EditTicket from './EditTicket'
import CreateTicket from './CreateTicket'
import { TICKET_STATUSES } from '../constants'
import SwimLane from './SwimLane'

const mapDispatch = {
}

type DispatchProps = {
}

type StateProps = {
    tickets: Types.Ticket[]
    boardId: string
}

type OwnProps = {}

type Props = DispatchProps & StateProps & OwnProps

const mapState = (state: Types.AppState, ownProps: OwnProps) => {
    return {
        boardId: state.selectedBoard!,
        tickets: state.tickets
    }
}

const TicketPanel: FunctionComponent<Props> = (props: Props) => {

    // const swimLanes = TICKET_STATUSES.map(status => {

    //     const filteredTickets = props.tickets.filter(ticket => ticket.status === status)
    //     return (
    //         <SwimLane name={status} tickets={filteredTickets} />
    //     )
    // })

    if (props.tickets.length > 0) {

        const ticketItems = props.tickets.map(ticket => {
            return <li key={ticket.id}> <EditTicket ticket={ticket} boardId={props.boardId} /> </li>
        })

        ticketItems.unshift(
            <li key="createTicket"><CreateTicket boardId={props.boardId} /></li>
        )

        return (
            <div>
                {/* <div>{swimLanes}</div> */}
                <ul style={{listStyle: "none"}}> {ticketItems} </ul>
            </div>
        )
    } else {
        return (
            <div>
                {/* <div>{swimLanes}</div> */}
                <CreateTicket boardId={props.boardId} />
            </div>
        )
    }
}

export default connect(mapState, mapDispatch)(TicketPanel)
