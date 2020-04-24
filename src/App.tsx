import React, { Component, ChangeEvent } from 'react';
import Board from './Board'
import * as Types from './types/Types'
import './App.css';

type AppState = {
  boards: Types.Board[]
  currentBoard: Types.Board
}
type AppProps = {

}

class App extends Component<AppProps, AppState> {

  state: AppState = {
    boards: Types.dummyData,
    currentBoard: Types.dummyData[0]
  }

  boardSelectedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const updatedBoard: Types.Board = this.state.boards.find(
      board => board.name === event.target.value
    )!
    this.setState({currentBoard: updatedBoard})
  }

  render = () => {
    
    const boards = this.state.boards.map(board => {
      return (
        <option value={board.name}>{board.name}</option>
      )
    })

    const availableStatuses = this.state.currentBoard.swimLanes.map(lane => lane.status)

    return (
      <div>
        Select board: <select onChange={this.boardSelectedHandler}>{boards}</select>
        <Board 
          name={this.state.currentBoard.name}
          swimLanes={this.state.currentBoard.swimLanes}
          availableStatuses={availableStatuses}
        />
      </div>
    );
  }
}

export default App;
