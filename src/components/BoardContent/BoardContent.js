import Column from 'components/Column/Column'
import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import './BoardContent.scss'

import { mapOrder } from 'utilities/sort'

import { initialData } from 'actions/initialData'

function BoardContent(props) {

    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const boardFromDb = initialData.boards.find(board => board.id === 'board-1')
        if (boardFromDb) {
            setBoard(boardFromDb)

            setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnsOrder, 'id'))
        }
    }, [])

    if (isEmpty(board)) {
        return <div className="not-found">
            Board not found!
        </div>
    }

    return (
        <>
            <div className="board-content">
                {columns.map((column, index) => <Column key={index.toString()} column={column} />)}

            </div>
        </>
    );
}

export default BoardContent;