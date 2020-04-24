import React from 'react'
import { summaryTicket as SummaryTicket } from './Ticket'
import * as Types from './types/Types'
import "./styles/SwimLane.css"
import "./styles/Ticket.css"

type SwimLaneProps = {
    status: string,
    tickets: Types.Ticket[],
    ticketDetailHandler: (id: string, status: string) => void
}

const SwimLane = (props: SwimLaneProps) => {

    const ticketsList = props.tickets.map(ticket => {
        return (
            <li key={ticket.id}>
                <SummaryTicket 
                    id={ticket.id}
                    name={ticket.name}
                    visible={ticket.visible}
                    status={ticket.status}
                    onClick={() => props.ticketDetailHandler(ticket.id, ticket.status)}
                />
            </li>
        )
    })

    return (
        <li className="SwimLaneItem">
            <p>{props.status}</p>
            <ul className="Ticket">{ticketsList}</ul>
        </li>
    )
}

export default SwimLane