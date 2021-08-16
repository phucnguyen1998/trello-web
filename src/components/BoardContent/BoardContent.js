import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { isEmpty } from 'lodash'
import './BoardContent.scss'

import { mapOrder } from 'utilities/sort'
import { applyDrag } from 'utilities/dragDrop'
import Column from 'components/Column/Column'
import { initialData } from 'actions/initialData'

function BoardContent() {

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

  const onColumnDrop = (dropResult) => {
    let newCollumns = [...columns]
    newCollumns = applyDrag(newCollumns, dropResult)

    let newBoard = { ...board }
    newBoard.columnsOrder = newCollumns.map(c => c.id)
    newBoard.columns = newCollumns

    setColumns(newCollumns)
    setBoard(newBoard)
  }

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newCollumns = [...columns]

      let currentColumn = newCollumns.find(c => c.id === columnId)

      currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
      currentColumn.cardOrder = currentColumn.cards.map(i => i.id)

      setColumns(newCollumns)
    }
  }

  return (
    <>
      <div className="board-content">
        <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          getChildPayload={index => columns[index]}
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'columns-drop-preview'
          }}
        >
          {columns.map((column, index) => (
            <Draggable key={index.toString()}>
              <Column column={column} onCardDrop={onCardDrop} />
            </Draggable>
          ))}
        </Container>
        <div className='add-new-column'>
          <i className="fa fa-plus icon" />
          Add another column
        </div>
      </div>
    </>
  )
}

export default BoardContent