import React, { FunctionComponent, useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { createTicket } from '../redux/actions'
import '../css/Ticket.css'

const mapDispatch = {
    createTicket: (boardId: string, name: string, description: string) =>
        createTicket(boardId, name, description),
}

type DispatchProps = {
    createTicket: (boardId: string, name: string, description: string) => Promise<void>
}

type TicketProps = {
    boardId: string
}

type Props = TicketProps & DispatchProps

const CreateTicket: FunctionComponent<Props> = (props: Props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const handleChange = (setFn: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>): void => {
        setFn(event.target.value)
    }

    const handleCreate = () => {
        if (name.trim() !== '') {
            props.createTicket(props.boardId, name, description)
            setName('')
            setDescription('')
        } else {
            alert ("Name is mandatory when creating a ticket")
        }
    }

    return (
        <div>
            <span>Name: </span>
            <input
                type="text"
                value={name}
                onChange={handleChange(setName)}
            />
            <span>Description: </span>
            <input
                type="text"
                value={description}
                onChange={handleChange(setDescription)}
            />
            <button onClick={handleCreate}> Create Ticket </button>
        </div>
    )
}

export default connect(undefined, mapDispatch)(CreateTicket)