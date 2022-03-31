import React from "react";
import { Card, CardContent, CardActionArea, Stack, Box } from "@mui/material";
import { Typography, Grid } from "@mui/material";
import { Draggable, Droppable} from "react-beautiful-dnd";

const CustomList = ({ listName, order, cardArr, index,listId }) => {
  return (
    <Draggable draggableId={`list_${listId}`} index={index} key={index}>
        {(provided) => (
        
         
 <div     {...provided.draggableProps}

 ref={provided.innerRef}
 sx={{ borderStyle:"solid", borderColor:"blue",borderRadius:"2%",backgroundColor:"wheat",maxWidth:"200px"}}>
 <Typography variant="h6" textAlign="center">{listName}</Typography>
 <br />

 
 {cardArr.map((card, index) => (
<Draggable key={card.id} index={index} draggableId={card.id}>
 {(provided) => (
     <Stack direction="column"
     {...provided.draggableProps}
     {...provided.dragHandleProps}
     ref={provided.innerRef}   >
   <Card
  
   sx={{
     width: 150,
     height: 150,
     marginRight: "1rem",
     marginBottom: "1rem",
   }}
   key={card.id}
 >
   <CardActionArea sx={{ height: "100%" }}>
     <CardContent>
       <Typography
         gutterBottom
         variant="h6"
         component="div"
         textAlign="center"
       >
         {card.title}
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
 </Stack>
 )}
</Draggable>
))}
</div> 


          )}
   
     </Draggable>
  );
};

export default CustomList;





