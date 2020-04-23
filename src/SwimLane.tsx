import React from 'react'
import { Ticket } from './Ticket'
import { summaryTicket as SummaryTicket } from './Ticket'

export type SwimLaneProps = {
    status: string,
    tickets: Ticket[]
}

export const swimLane = (props: SwimLaneProps) => {

    const ticketsList = props.tickets.map(ticket => {
        return (
            <li key={ticket.id}>
                <SummaryTicket 
                    id={ticket.id}
                    name={ticket.name}
                    visible={ticket.visible}
                />
            </li>
        )
    })

    return (
        <div>
            <p>{props.status}</p>
            <ul>{ticketsList}</ul>
        </div>
    )
}

export default swimLane