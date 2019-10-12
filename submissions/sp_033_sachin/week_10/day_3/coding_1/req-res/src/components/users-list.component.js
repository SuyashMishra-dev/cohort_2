import React from 'react'
import UsersListItem from './users-list-item.component'

//material
import { Container, Grid } from "@material-ui/core";

const UsersList = ({data}) => {

    return (
        <>
            <Container maxWidth='sm'>
            <Grid container spacing={3}>
                {data.map(d=><UsersListItem data={d} />)}
            </Grid>
            </Container>
        </>
    )
}

export default UsersList;