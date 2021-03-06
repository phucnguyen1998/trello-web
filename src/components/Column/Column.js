
import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'
import { mapOrder } from 'utilities/sort'
import Card from 'components/Card/Card'

function Column(props) {
  const { column, onCardDrop } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  return (
    <>
      <div className="column">
        <header className="column-drag-handle">{column.title}</header>
        <div className="card-list">
          <Container
            groupName="col"
            //onDropReady={p => console.log('Drop ready: ', p)}
            onDrop={dropResult => onCardDrop(column.id, dropResult)}
            getChildPayload={index => cards[index]}
            dragClass='card-ghost'
            dropClass='card-ghost-drop'

            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'cards-drop-preview'
            }}
            dropPlaceholderAnimationDuration={200}
          >
            {
              cards.map((card, index) => (
                <Draggable key={index.toString()}>
                  <Card card={card} />
                </Draggable>
              ))
            }
          </Container>
        </div>
        <footer>
          <div className="footer-action">
            <i className="fa fa-plus icon" />
            Add another card
          </div>
        </footer>
      </div>
    </>
  )
}

export default Column