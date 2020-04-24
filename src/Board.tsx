import React, { Component } from 'react'
import SwimLane from './SwimLane'
import { detailedTicket as DetailedTicket } from './Ticket'
import './styles/SwimLane.css'
import * as Types from './types/Types'

type BoardProps = {
    name: string,
    swimLanes: Types.SwimLane[]
}

type BoardState = {
    selectedTicket?: Types.Ticket
}

class Board extends Component<BoardProps, BoardState> {

    state: BoardState = {
        selectedTicket: undefined
    }

    tickeDetailHandler = (id: string, status: string) => {

        const targetLane = this.props.swimLanes.find(lane => lane.status === status)!
        const targetTicket = targetLane.tickets.find(ticket => ticket.id === id)!

        this.setState({
            selectedTicket: {
                id: id,
                name: targetTicket.name,
                visible: targetTicket.visible,
                status: targetTicket.status,
                description: targetTicket.description
            }
        })
    }

    render = () => {

        const lanes = this.props.swimLanes.map(lane => {
            return (
                <SwimLane 
                    status={lane.status}
                    tickets={lane.tickets}
                    ticketDetailHandler={this.tickeDetailHandler}
                />
            )
        })

        return (
          <ul className="SwimLane">
            {lanes}
            <li>
              <DetailedTicket
                id={this.state.selectedTicket?.id}
                name={this.state.selectedTicket?.name}
                visible={this.state.selectedTicket?.visible}
                status={this.state.selectedTicket?.status}
                description={this.state.selectedTicket?.description}
              />
            </li>
          </ul>
        );
    }
}

export default Board