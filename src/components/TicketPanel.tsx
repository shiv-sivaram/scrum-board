import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import * as Types from '../types'
import Ticket from './Ticket'

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
            return <li key={ticket.id}> <Ticket ticket={ticket} boardId='fds' /> </li>
        })

        return <ul style={{listStyle: "none"}}> {ticketItems} </ul>
    } else {
        return <h3>No tickets on this board</h3>
    }
}

export default connect(mapState, mapDispatch)(TicketPanel)
