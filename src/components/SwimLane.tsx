import React, { FunctionComponent } from 'react'
import * as Types from '../types'

type SwimLaneProps = {
    name: string
    tickets: Types.Ticket[]
}

const SwimLane: FunctionComponent<SwimLaneProps> = (props: SwimLaneProps) => {

    const handleClick = (ticketId: string) => {
        console.log("Selected " + ticketId)
    }

    const ticketsList = props.tickets.map(ticket => {
        return(
            <li key={ticket.id}>
                <button onClick={() => handleClick(ticket.id)}>
                    <p>{ticket.name}</p>
                    <p>{ticket.description}</p>
                </button>
            </li>
        )
    })
    return (
        <div>
            <p>{props.name}</p>
            <ul>
                {ticketsList}
            </ul>
        </div>
    )
}

export default SwimLane