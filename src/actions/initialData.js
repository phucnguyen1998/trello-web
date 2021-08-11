export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnsOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do columns',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
          cards: [
            { id: 'card-1', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 1', cover: 'https://ss-images.saostar.vn/wwebp700/2019/02/02/4544869/ua.jpg' },
            { id: 'card-2', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 2', cover: null },
            { id: 'card-3', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 4', cover: null },
            { id: 'card-4', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 3', cover: null },
            { id: 'card-5', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 5', cover: null },
            { id: 'card-6', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 6', cover: null },
            { id: 'card-7', boardId: 'board-1', columnsId: 'column-1', title: 'Title of card 7', cover: null }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress columns',
          cardOrder: ['card-8', 'cards-9', 'cards-10'],
          cards: [
            { id: 'card-5', boardId: 'board-1', columnsId: 'column-2', title: 'Title of card 8', cover: null },
            { id: 'card-9', boardId: 'board-1', columnsId: 'column-2', title: 'Title of card 9', cover: null },
            { id: 'card-10', boardId: 'board-1', columnsId: 'column-2', title: 'Title of card 10', cover: null }

          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done columns',
          cardOrder: ['card-11', 'cards-12', 'cards-13'],
          cards: [
            { id: 'card-11', boardId: 'board-1', columnsId: 'column-3', title: 'Title of card 11', cover: null },
            { id: 'card-12', boardId: 'board-1', columnsId: 'column-3', title: 'Title of card 12', cover: null },
            { id: 'card-13', boardId: 'board-1', columnsId: 'column-3', title: 'Title of card 13', cover: null }
          ]
        }
      ]
    }
  ]
}