import React from 'react'
import { Card, CardContent, CardActionArea } from '@mui/material';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Board = ({title, membersArr, boardId, onDelete}) => {


  return (

    <Card sx={{ width: 150, height: 150, marginRight: "1rem", marginBottom:"1rem" }}>
    <CardActionArea sx={{height: "80%"}}>
    <Link to={`/${boardId}`}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      </Link>
    
    </CardActionArea>
   
    <Button size="small" color="primary" onClick={()=>{onDelete(boardId)}}>
        Sil
      </Button>

    
 <Button size="small" color="primary" >
        Members
      </Button>


   
  </Card>



  )
}

export default Board