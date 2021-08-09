import Column from 'components/Column/Column'
import React from 'react'
import './BoardContent.scss'

function BoardContent(props) {
    return (
        <>
            <div className="board-content">
                <Column />
            </div>
        </>
    );
}

export default BoardContent;