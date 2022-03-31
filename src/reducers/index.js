import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./auth";
import boardsReducer from "./boards";
import listReducer from "./listSlice";

const store = configureStore({
  reducer: {
    
    auth: authReducer,
    boards: boardsReducer,
    lists: listReducer
  },
});
export default store;
