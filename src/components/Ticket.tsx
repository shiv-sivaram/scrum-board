import React, { FunctionComponent, useState, ChangeEvent } from 'react'
import * as Types from '../types'
import '../css/Ticket.css'

export type TicketProps = {
    ticket: Types.Ticket
}

export const Ticket: FunctionComponent<TicketProps> = (props: TicketProps) => {

    const [name, setName] = useState(props.ticket.name)
    const [status, setStatus] = useState(props.ticket.status)
    const [description, setDescription] = useState(props.ticket.description)


    const handleChange = (setFn: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>): void => {
        setFn(event.target.value)
    }

    const handleUpdate = () => {
        console.log("update " + props.ticket.id)
    }
    
    const handleDelete = () => {
        console.log("delete " + props.ticket.id)
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
