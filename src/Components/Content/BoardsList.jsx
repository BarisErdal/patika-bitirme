import React,{useEffect} from 'react'


import { Card, CardContent, CardActionArea } from '@mui/material';
import { Typography, Grid} from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { boardsActions } from "../../reducers/boards";
import { destroy, list as getBoards, create } from "../../service/board/index";
import Board from "./Board";
import { useNavigate } from 'react-router-dom';


const BoardsList = () => {
    
    const dispatch = useDispatch();
    const boardsArr = useSelector((state) => state.boards.boards);
    let navigate = useNavigate(); 
  
    useEffect(() => {
      getBoards().then((resp) => {
        if (resp.status === 200) {
          dispatch(boardsActions.setBoardList(resp.data));
        }
        console.log("boardlar", resp.data);
      });
    }, []);


const deleteHandler = (boardId) => {
  destroy(boardId).then(resp=>{
    if(resp.status===200) {
      dispatch(boardsActions.removeBoard(Number(boardId)))
    }
  })

}

const addBoardHandler = (e) => {
  
create({title: "Untitled_Board" }).then(resp=>{
  if(resp.status===200){
    
  dispatch(boardsActions.addBoard(resp.data));
  navigate(`/${resp.data.id}`)
  }


})

}

  return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh', maxWidth: '100%' }}
      > 
              {boardsArr.map((board) => ( 
                <Board
                  key={board.id}
                  title={board.title}
                  membersArr={board.members} 
                  boardId={board.id}
                  onDelete={deleteHandler}  
                />      
              ))}


        
      {/* <Board key={"add_new_board"} title={"untitled_board"} />   */}
      <Card sx={{ width: 150, height: 150, marginRight: "1rem", marginBottom:"1rem" }}
      key="add_board_box">
    <CardActionArea sx={{height: "100%"}} onClick={addBoardHandler}>
    
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" textAlign="center">
          Add New Board
        </Typography>
      </CardContent>
     
    
    </CardActionArea>
    </Card>







         </Grid>  
    );
      
        };

export default BoardsList