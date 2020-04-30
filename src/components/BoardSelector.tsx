import React, { FunctionComponent, useEffect, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { fetchBoards, fetchTickets } from '../redux/actions'
import { AppState, Board } from '../types'
import '../css/BoardSelector.css'

const mapDispatch = {
    fetchBoards: () => fetchBoards(),
    fetchTickets: (boardId: string) => fetchTickets(boardId)
}

type DispatchProps = {
    fetchBoards: () => void
    fetchTickets: (boardId: string) => void
}

type StateProps = {
    boards: Board[]
}

type OwnProps = {}

type Props = DispatchProps & StateProps & OwnProps

const mapState = (state: AppState, ownProps: OwnProps) => {
    return {
        boards: state.boards
    }
}

const BoardSelector: FunctionComponent<Props> = (props: Props) => {

    useEffect(() => {
        props.fetchBoards()
    }, [])

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        props.fetchTickets(event.target.value)
    }
 
    if (props.boards.length > 0) {

        // Prepopulate tickets of the first board
        props.fetchTickets(props.boards[0].id)
        const selectOptions = props.boards.map(board => {
            return <option key={board.id} value={board.id}>{board.name}</option>
        })

        return (
            <div>
                <p>Select Board</p>
                <select onChange={handleChange}>{selectOptions}</select>
            </div>
        )
    } else {
        return <h3>Please create a board</h3>
    }
};

export default connect(mapState, mapDispatch)(BoardSelector)
