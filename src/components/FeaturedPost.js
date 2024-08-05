import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  card: {
    
    padding: "35px 25px ",
  }
});

const FeaturedPost = () => {
 const ClassNames = useStyles();

  return (
    <Card className={ClassNames.Card}>
      <CardActionArea>
        <CardMedia 
        component="img"
        height={"300"}
        image='https://wallpapergod.com/images/hd/nature-1600X1200-wallpaper-fpcm5sagzgv3rlyz.jpeg'
        alt='nature'
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            Nature
          </Typography>
          <Typography variant="subtitle2" color={"text.secondary"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aspernatur soluta vero ratione odit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga fugiat explicabo laboriosam quidem ipsam!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FeaturedPost