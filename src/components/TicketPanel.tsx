import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import * as Types from '../types'
import Ticket from './Ticket'
import CreateTicket from './CreateTicket'

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


    if (props.tickets.length > 0) {

        const ticketItems = props.tickets.map(ticket => {
            return <li key={ticket.id}> <Ticket ticket={ticket} boardId={props.boardId} /> </li>
        })

        ticketItems.unshift(
            <li key="createTicket"><CreateTicket boardId={props.boardId} /></li>
        )

        return <ul style={{listStyle: "none"}}> {ticketItems} </ul>
    } else {
        return (
            <div>
                <h3>No tickets on this board</h3>
                <CreateTicket boardId={props.boardId} />
            </div>
        )
    }
}

export default connect(mapState, mapDispatch)(TicketPanel)
