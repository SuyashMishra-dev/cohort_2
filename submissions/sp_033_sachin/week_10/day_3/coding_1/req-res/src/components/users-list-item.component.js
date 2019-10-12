import React from 'react'

//material
import { Grid, Card, CardActionArea, CardMedia, CardActions, Typography ,Button, CardContent, } from "@material-ui/core";

const UsersListItem = ({data:{id,email,first_name,last_name,avatar}}) => {
    console.log(avatar)
    return (
        <>
            <Grid item xs={6}>
                <Card>
                    <CardActionArea>
                        {/* <CardMedia                        
                        image={avatar}
                        title="Contemplative Reptile"
                        /> */}
                        <img
                            src={avatar}
                            style={{
                                height:'100px',
                                textAlign:'center'
                            }}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {first_name+' '+last_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {email}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
        </>
    )
}

export default UsersListItem;