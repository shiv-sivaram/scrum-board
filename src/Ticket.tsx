import React, { Component, ChangeEvent } from 'react'
import './styles/Ticket.css'

type SummaryTicketProps = {
    id: string,
    name: string,
    visible: boolean,
    status: string,
    onClick: (id: string, status: string) => void
}

export const summaryTicket = (props: SummaryTicketProps) => {

    if (props.visible) {
        return (
            <div
             className="TicketItem"
             onClick={() => props.onClick(props.id, props.status)}
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
          <EditableText text={props.name!} />
          <p>{props.status}</p>
          <EditableText text={props.description!} />
        </div>
      );
    } else {
        return <div />
    }
}

type EditableTextProps = {
    text: string,
}

type EditableTextState = {
    isEditing: boolean,
    text: string
}

class EditableText extends Component<EditableTextProps, EditableTextState> {

    state: EditableTextState = {
        isEditing: false,
        text: this.props.text
    }

    editTextHandler = () => this.setState({isEditing: true})
    finishedEditingHandler = () => this.setState({isEditing: false})

    textChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value})
    }

    render = () => {
        if (this.state.isEditing) {
            return(
                <span>
                    <input 
                        defaultValue={this.state.text} 
                        onChange={this.textChangedHandler}
                    />
                    <button onClick={this.finishedEditingHandler}>Save</button>
                </span>
            )
        } else {
            return (
                <p onClick={this.editTextHandler}>
                    {this.state.text}
                </p>
            )
        }
    }
}