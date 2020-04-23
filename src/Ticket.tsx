import React from 'react'

type SummaryTicketProps = {
    id: string,
    name: string,
    visible: boolean
}

export const summaryTicket = (props: SummaryTicketProps) => {

    if (props.visible) {
        return (
            <div>
                <p>{props.id}</p>
                <p>{props.name}</p>
            </div>
        )
    } else {
        return <div />
    }
}

export type Ticket = {
    id: string,
    name: string,
    visible: boolean,
    status: string,
    description: string
}

export const detailedTicket = (props: Ticket) => {

    if (props.visible) {
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
