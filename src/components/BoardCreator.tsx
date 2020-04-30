import React, { FunctionComponent, useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { createNewBoard } from '../redux/actions'
import { AppState } from '../types'

const mapDispatch = {
    createNewBoard: (name: string) =>
        createNewBoard(name)
}

type DispatchProps = {
    createNewBoard: (name: string) => Promise<void>
}

type OwnProps = {}

type Props = DispatchProps & OwnProps

const mapState = (state: AppState, ownProps: OwnProps) => {
    return {
        boards: state.boards
    }
}

const BoardCreator: FunctionComponent<Props> = (props: Props) => {

    const[boardName, setBoardName] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setBoardName(event.target.value)
    }

    const handleClick = () => {
        if (boardName.trim() !== '') {
            props.createNewBoard(boardName)
        }
        setBoardName('')
    }
 
    return (
        <span>
            <input
                type="text"
                value={boardName}
                onChange={handleChange}
            />
            <button onClick={handleClick}> Add Board </button>
        </span>
    )

}

export default connect(mapState, mapDispatch)(BoardCreator)
