import React, { Component } from 'react';
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

  render = () => {
    
    return (
      <Board 
        name={this.state.currentBoard.name}
        swimLanes={this.state.currentBoard.swimLanes} />
    );
  }
}

export default App;
