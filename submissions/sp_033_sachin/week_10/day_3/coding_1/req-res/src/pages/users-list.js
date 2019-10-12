import React from "react";
import UsersList from '../components/users-list.component'

//material
import { Container,Grid, ButtonGroup, Button } from "@material-ui/core";

//redux
import { connect } from "react-redux";
import { fetchUsers, nextPage, previousPage } from "../redux/users-list/users-list.action";

class UsersListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading : true
        }

    }

    componentDidMount() {
        const {fetchUsers,page} = this.props;
        
        fetchUsers(page);

        this.setState({
            isLoading :false
        })
    }

    render () {
        const {page,data, isLoading, errorMessage,nextPage, previousPage} = this.props;
        console.log(data)
        return (
            <>
                <h1>Users List</h1>

                {
                    (this.state.isLoading)&&(isLoading)? 'Loading...' : (data?<UsersList data={data} />:'')

                }
                <br />
                <Container maxWidth='md' >
                    <Grid container justify="center">

                    <Grid item xs={4}>
                        <ButtonGroup fullWidth aria-label="full width outlined button group">
                        <Button onClick={()=>previousPage()}>Previous Page</Button>
                        <Button>Current Page : {page}</Button>
                        <Button onClick={()=>{
                            nextPage()
                        }}>Next Page</Button>
                        </ButtonGroup>
                    </Grid>

                    </Grid>
                </Container>
            </>
        )
    }

}

const mapStateToProps = ({usersList : {page,data, isLoading, errorMessage}}) => ({
    page,
    data, 
    isLoading,
    errorMessage
})

const mapDispatchToProps = dispatch => ({
    fetchUsers : (page) => dispatch(fetchUsers(page)),
    nextPage : () => dispatch(nextPage()),
    previousPage : () => dispatch(previousPage())
})

export default connect(mapStateToProps,mapDispatchToProps)(UsersListPage);

