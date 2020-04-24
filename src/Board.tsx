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

    tickeDetailHandler = (id: string) => {

        

        this.setState({
            selectedTicket: {
                id: id,
                name: "Selected ticket name",
                visible: true,
                status: "To Do",
                description: "Some big description"
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