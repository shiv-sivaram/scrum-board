import React from 'react'
import { AppStore } from '../redux/store'
import { Provider } from 'react-redux'
import BoardSelector from './BoardSelector'
import BoardCreator from './BoardCreator'
import TicketPanel from './TicketPanel'

type AppProps = {
    store: AppStore
}

const App = (props: AppProps) => {
    console.log('render app')
    
    return (
        <span style={{float: "left"}}>
          <Provider store={props.store}>
            <BoardSelector />
            <BoardCreator />
            <TicketPanel />
          </Provider>
        </span>
    )
}

export default App
