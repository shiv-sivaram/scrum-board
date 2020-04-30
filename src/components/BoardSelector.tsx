import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBoards } from '../redux/actions'
import { AppState, Board } from '../types'
import '../css/BoardSelector.css'


const mapDispatch = {
    fetchBoards: () => fetchBoards()
}

type DispatchProps = {
    fetchBoards: () => void
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

    if (props.boards.length > 0) {

        const selectOptions = props.boards.map(board => {
            return <option key={board.id} id={board.id}>{board.name}</option>
        })

        return (
            <div>
                <p>Select Board</p>
                <select>{selectOptions}</select>
            </div>
        )
    } else {
        return <h3>Please create a board</h3>
    }
};

export default connect(mapState, mapDispatch)(BoardSelector)
