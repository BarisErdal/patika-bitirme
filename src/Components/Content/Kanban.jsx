import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useForm from "../../hooks/useForm";
import { Card, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getById, update } from "../../service/board";
import DoneIcon from "@mui/icons-material/Done";
import { list as getListByBoardId } from "../../service/list/index";
import { listActions } from "../../reducers/listSlice";
import CustomList from "./CustomList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Kanban = () => {
  const { boardId } = useParams();
  const [boardTitle, setBoardTitle] = useState("");
  const form = useForm();
  const [boardTitleMod, setBoardTitleMod] = useState(false);

  const dispatch = useDispatch();
  const listsArr = useSelector((state) => state.lists.listArr);

  useEffect(() => {
    getById(Number(boardId)).then((resp) => {
      setBoardTitle(resp.data.title);
      form.patchState({ title: resp.data.title });
    });
  }, []);

  useEffect(() => {
    getListByBoardId(boardId).then((resp) => {
      dispatch(listActions.setListArr(resp.data));
    });
  }, []);

  const handleClick = () => {
    if (boardTitle !== form.values.title) {
      update(boardId, form.values).then((resp) => {
        setBoardTitle(resp.data.title);
        setBoardTitleMod(false);
      });
    } else {
      setBoardTitleMod(false);
    }
  };

  const [items, setItems] = useState(listsArr);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    /*    const temporaryArr= Array.from(itemsArr)
    const [itemToMoved] = prev.splice(result.source.index, 1);
    prev.splice(result.destination.index, 0, itemToMoved); */

    const [itemToMoved] = listsArr.splice(result.source.index, 1);
    listsArr.splice(result.destination.index, 0, itemToMoved);
    dispatch(listActions.setListArr(listsArr));

    setItems((prev) => {
      //const temporaryArr= Array.from(itemsArr)
      const [itemToMoved] = prev.splice(result.source.index, 1);
      prev.splice(result.destination.index, 0, itemToMoved);
      return prev;
    });

    //const temporaryArr= Array.from(itemsArr)
  };

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Link to={"/"}>
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                Boards
              </Typography>
            </Link>

            {boardTitleMod ? (
              <Stack
                direction="row"
                sx={{ backgroundColor: "white", color: "black" }}
              >
                <TextField
                  name="title"
                  defaultValue={boardTitle}
                  sx={{ border: 0 }}
                  onChange={form.handleChange}
                ></TextField>
                <IconButton onClick={handleClick}>
                  <DoneIcon />
                </IconButton>
              </Stack>
            ) : (
              <div
                onClick={() => {
                  setBoardTitleMod(true);
                }}
              >
                {boardTitle}
              </div>
            )}

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="ilkDnD">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ backgroundColor: "wheat" }}
            >
              {listsArr.map((item, index) => (
                <Draggable
                  key={item.id}
                  index={index}
                  draggableId={`lists_id_${item.id}`}
                >
                  {(provided) => (
                    <Card
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.title}
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Kanban;

/* 

<DragDropContext onDragEnd={onDragEnd}>
<Droppable droppableId="allCols">
 {(provided) => (
   <div
     ref={provided.innerRef}
   style={{height:"90%"}}
   > 
     {listsArr.map((list, i) => {
       return (
         <CustomList
           listName={list.title}
           cardArr={list.cards}
           key={list.id}
           boardId={boardId}
           index={i}
           listId={list.id}
         />
       );
     })}
     {provided.placeholder}
     <form autoComplete="off">
       <input
         maxLength="20"
         type="text"
         name="newCol"
         placeholder="Add a new column"
       />
     </form>
   </div>
 )}
</Droppable>
</DragDropContext> */
