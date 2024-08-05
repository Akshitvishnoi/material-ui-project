import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
    Card: {
        display: "flex",
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
});
const PostCard = ({ post }) => {

    const Classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" herf='#'>
                <Card className={Classes.Card}>
                    <div className={Classes.cardDetails}>
                        <CardContent>
                            <Typography component='h2' variant='h5'>
                                {post.title}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {post.date}
                            </Typography>
                            <Typography variant='subtitle1' paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant='subtitle1' style={{ color: 'skyblue' }}>
                                continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia
                            className={Classes.cardMedia}
                            image={post.image}
                            title={post.imageTitle}
                        />
                    </Hidden>

                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard;