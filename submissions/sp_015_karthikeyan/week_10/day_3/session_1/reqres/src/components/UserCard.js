import React from 'react';

import { Card, Image, Grid } from 'semantic-ui-react';

const UserCard = (props) => {
    return (
        <Grid.Column width={4} >
            <Card>
                <Image src={props.data.avatar} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{props.data.first_name} {props.data.last_name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>ID: {props.data.id}</span>
                  </Card.Meta>
                  <Card.Description>
                    {props.data.email}
                  </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default UserCard;