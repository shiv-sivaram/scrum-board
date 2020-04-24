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
    availableStatuses?: string[],
    description?: string,
    ticketEditedHandler: (property: string) => (text: string) => void
}

type DetailedTicketState = {
}

export class detailedTicket extends Component<DetailedTicketProps, DetailedTicketState> {

  render = () => {
  
    if (this.props.id !== null && this.props.visible) {
      return (
        <div>
          <p>{this.props.id}</p>
          <EditableText
            text={this.props.name!}
            onSave={this.props.ticketEditedHandler("name")}
          />
          <StatusElement
            selected={this.props.status!}
            available={this.props.availableStatuses!}
            onChange={this.props.ticketEditedHandler("status")}
          />
          <EditableText
            text={this.props.description!}
            onSave={this.props.ticketEditedHandler("description")}
          />
        </div>
      );
    } else {
      return <div />;
    }
  };
}

type EditableTextProps = {
    text: string,
    onSave: (text: string) => void
}

type EditableTextState = {
    isEditing: boolean,
}

class EditableText extends Component<EditableTextProps, EditableTextState> {

    state: EditableTextState = {
        isEditing: false
    }

    editTextHandler = () => this.setState({isEditing: true})
    finishedEditingHandler = () => this.setState({isEditing: false})

    textChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onSave(event.target.value)
    }

    render = () => {
        if (this.state.isEditing) {
            return(
                <span>
                    <input 
                        defaultValue={this.props.text} 
                        onChange={this.textChangedHandler}
                    />
                    <button onClick={this.finishedEditingHandler}>Save</button>
                </span>
            )
        } else {

            const textStyle = {
                cursor: "pointer",
                color: "#2554C7"
            }

            return (
                <p style={textStyle} onClick={this.editTextHandler}>
                    {this.props.text}
                </p>
            )
        }
    }
}

type StatusElementType = {
    available: string[],
    selected: string,
    onChange: (text: string) => void
}

type StatusElementState = {
}

class StatusElement extends Component<StatusElementType, StatusElementState> {

    selectChangedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        this.props.onChange(event.target.value)
    }

    render = () => {
        const statusOptions = this.props.available.map(opt => {
            return <option value={opt}>{opt}</option>
        })

        return(
            <select
                value={this.props.selected}
                onChange={this.selectChangedHandler}
            >
                {statusOptions}
            </select>
        )
    }
}