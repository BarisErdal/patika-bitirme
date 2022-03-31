import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'lists',
    initialState: {
      listArr: [],
      cardArr:[],
      
    },
    reducers: {
      updateList(state, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
      },
      addList(state, action) {
        //ok
     state.boards.push(action.payload);
      },
      removeList(state, action) {
        //ok
      let indOfBoard =state.boards.findIndex((board)=> board.id == action.payload)
      state.boards.splice(indOfBoard,1);
      },

      getListById(state, action) {
       console.log("getListbyID")
      },
      setListArr(state, action) {
         //ok
        state.listArr = action.payload;
      },
      setCardArr(state, action) {
        //ok
       state.cardArr= action.payload;
     },
  


    },
  });
export const  listActions = listSlice.actions;

export default listSlice.reducer;