import React, { FunctionComponent, useState, ChangeEvent } from 'react'
import * as Types from '../types'
import { connect } from 'react-redux'
import { updateTicket, deleteTicket } from '../redux/actions'
import '../css/Ticket.css'

const mapDispatch = {
    updateTicket: (boardId: string, ticket: Types.Ticket) =>
        updateTicket(boardId, ticket),
    
    deleteTicket: (ticketId: string) =>
        deleteTicket(ticketId)
        
}

type DispatchProps = {
    updateTicket: (boardId: string, ticket: Types.Ticket) => Promise<void>
    deleteTicket: (ticketId: string) => Promise<void>
}

type TicketProps = {
    boardId: string,
    ticket: Types.Ticket
}

type Props = TicketProps & DispatchProps

const Ticket: FunctionComponent<Props> = (props: Props) => {

    const [name, setName] = useState(props.ticket.name)
    const [status, setStatus] = useState(props.ticket.status)
    const [description, setDescription] = useState(props.ticket.description)


    const handleChange = (setFn: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>): void => {
        setFn(event.target.value)
    }

    const handleUpdate = () => {
        
        props.updateTicket(props.boardId, {
            id: props.ticket.id,
            name,
            status,
            description,
            visible: true
        })
    }
    
    const handleDelete = () => {
        console.log("Delete " + props.ticket.id)
        props.deleteTicket(props.ticket.id)
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleChange(setName)}
            />
            <input
                type="text"
                value={status}
                onChange={handleChange(setStatus)}
            />
            <input
                type="text"
                value={description}
                onChange={handleChange(setDescription)}
            />
            <button onClick={handleUpdate}> Update </button>
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default connect(undefined, mapDispatch)(Ticket)