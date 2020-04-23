import React, { Component } from 'react'

import { SwimLaneProps, swimLane as SwimLane } from './SwimLane'

type BoardProps = {
    name: string
}

type BoardState = {
    swimLanes: SwimLaneProps[]
}

class Board extends Component<BoardProps, BoardState> {

    state: BoardState = {
        swimLanes: [
            {
                status: "To Do",
                tickets: [
                    {
                        id: "1",
                        name: "Test 1",
                        status: "To Do",
                        description: "Test 1 description",
                        visible: true
                    },
                    {
                        id: "2",
                        name: "Test 2",
                        status: "To Do",
                        description: "Test 2 description",
                        visible: true
                    }
                ]
            },
            {
                status: "In Progress",
                tickets: [
                    {
                        id: "11",
                        name: "Test 11",
                        status: "In Progress",
                        description: "Test 11 description",
                        visible: true
                    }
                ]
            }
        ]
    }

    render = () => {

        const lanes = this.state.swimLanes.map(lane => {
            return (
                <SwimLane 
                    status={lane.status}
                    tickets={lane.tickets}
                />
            )
        })
        return (
            <div>
                {lanes}
            </div>
        )
    }
}

export default Board