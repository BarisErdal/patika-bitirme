import React, { useEffect } from "react";

import Kanban from "./Kanban";
import { Routes,Route} from "react-router-dom";
import BoardsList from "./BoardsList";


const Boards = () => {
 
  return (
 
<div>
  

<Routes>
<Route path="/" element={<BoardsList />}/>
<Route path="/:boardId" element={<Kanban />} />

  </Routes>


  </div>
  );
};

export default Boards;
