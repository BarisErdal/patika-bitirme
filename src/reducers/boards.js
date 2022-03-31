import { createSlice } from '@reduxjs/toolkit';

const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
      boards: [],
      members: [],
      selectedTitle:"default",
    },
    reducers: {
      updateBoard(state, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
      },
      addBoard(state, action) {
        //ok
     state.boards.push(action.payload);
      },
      removeBoard(state, action) {
        //ok
      let indOfBoard =state.boards.findIndex((board)=> board.id == action.payload)
      state.boards.splice(indOfBoard,1);
      },

      getBoardById(state, action) {
       console.log("getBoardbyID")
      },
      setBoardList(state, action) {
         //ok
        state.boards = action.payload;
      },

      getTitle(state, action) {
       const indOf = state.boards.findIndex(board=> board.id === Number(action.payload))
       state.selectedTitle=state.boards[indOf].title;
      }



    },
  });
export const  boardsActions = boardsSlice.actions;

export default boardsSlice.reducer;