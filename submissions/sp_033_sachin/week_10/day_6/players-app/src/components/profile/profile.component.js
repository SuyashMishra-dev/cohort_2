import React from "react";

//material
import { Card, CardContent, Typography } from "@material-ui/core";
//redux
import { connect } from "react-redux";
import { fetchApi } from "../../redux/numbers-api/numbers.actions";

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount () {
        const {players,match:{params:{id}},fetchApi} = this.props;
        let player = players.filter(player=>player.id==id)[0];
        if (player) {
            let total = parseInt(player.odi_score)+parseInt(player.t20_score)+parseInt(player.test_score);
            if (total) {
                fetchApi(total);
            }    
        }
        
    }

    render () {
        
        const {players,match:{params:{id}},data,error,isLoading} = this.props;
        const player = players.filter(player=>player.id==id)[0];
        
        return (
            <div>
                {
                    player?(
                    <>
                        <Card>
                        <CardContent>
                            
                            <Typography variant="h5" component="h2">
                                {player.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {player.country}                                
                            </Typography>
                            <Typography variant="body2" component="p">
                            ODI : {player.odi_score}
                            <br />
                            TEST : {player.test_score}
                            <br />
                            T20 : {player.t20_score}
                            <br />
                            TOTAL : {player.odi_score+player.test_score+player.t20_score}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                "{isLoading?'loading...':data}"
                            </Typography>
                        </CardContent>
                        
                        </Card>

                    </>):'Player Not Present'
                }
            </div>
        )
    }
}


const mapStateToProps = ({players : {players}, numbersApi:{isLoading,data,error} }) => ({
    players,
    data,
    error,
    isLoading
})

const mapDispatchToProps = dispatch =>({
    fetchApi : (num) => dispatch(fetchApi(num)), 
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
