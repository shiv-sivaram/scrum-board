import React from 'react'
import './styles/Ticket.css'

type SummaryTicketProps = {
    id: string,
    name: string,
    visible: boolean,
    onClick: (id: string) => void
}

export const summaryTicket = (props: SummaryTicketProps) => {

    if (props.visible) {
        return (
            <div
             className="TicketItem"
             onClick={() => props.onClick(props.id)}
            >
                <p>ID: {props.id}</p>
                <p>{props.name}</p>
            </div>
        )
    } else {
        return <div />
    }
}

type DetailedTicketProps = {
    id?: string,
    name?: string,
    visible?: boolean,
    status?: string,
    description?: string
}

export const detailedTicket = (props: DetailedTicketProps) => {

    if (props.id !== null && props.visible) {
      return (
        <div>
          <p>{props.id}</p>
          <p>{props.name}</p>
          <p>{props.status}</p>
          <p>{props.description}</p>
        </div>
      );
    } else {
        return <div />
    }
}
