import React from 'react'
import { summaryTicket as SummaryTicket } from './Ticket'
import * as Types from './types/Types'
import "./styles/SwimLane.css"
import "./styles/Ticket.css"

type SwimLaneProps = {
    status: string,
    tickets: Types.Ticket[],
    ticketDetailHandler: (id: string) => void
}

const SwimLane = (props: SwimLaneProps) => {

    const ticketsList = props.tickets.map(ticket => {
        return (
            <li key={ticket.id}>
                <SummaryTicket 
                    id={ticket.id}
                    name={ticket.name}
                    visible={ticket.visible}
                    onClick={() => props.ticketDetailHandler(ticket.id)}
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