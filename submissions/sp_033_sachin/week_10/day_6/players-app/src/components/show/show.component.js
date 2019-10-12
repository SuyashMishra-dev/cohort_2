import React from "react";
//Router
import { Link } from "react-router-dom";
//material
import { FormControl, InputLabel, Select ,Paper, Table, TableHead, TableCell, TableBody, TableRow, ButtonGroup,Button } from "@material-ui/core";
//redux
import { connect } from "react-redux";

class Show extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page : 1,
            countryFilter : 'all',
            sortBy : 'odi'
        }
    }

    setPage = (page) => {
        this.setState({
            page : page
        })
    }

    setCountryFilter = (e) => {
        this.setState({
            countryFilter : e.target.value
        })
    }

    setSortBy = (e) => {
        this.setState({
            sortBy : e.target.value
        })
    }

    render () {
        const {players,match,countries} = this.props;
        const {page,countryFilter, sortBy} = this.state;
        let displayPlayers = null;
        let items = [];
        if (players.length) {
            displayPlayers = [...players]
            displayPlayers=displayPlayers.filter((player)=>{
                if (countryFilter == 'all') {
                    return true
                } else {
                    return (player.country == countryFilter)
                }
            }).filter((el,i)=>{
                return (5*(page-1)<=i)&&(i<=page*5)
            } );
            for (let i = 1; i <= Math.floor(players.length/5)+1; i++) {
                                        
                items.push((<Button onClick={(e)=>this.setPage(i)}>{i}</Button>))                         
 
            }
            if (displayPlayers.length) {
                if(sortBy == 'odi'){
                    displayPlayers.sort((a,b)=>a.odi_score-b.odi_score)
                } else if (sortBy == 't20') {
                    displayPlayers.sort((a,b)=>a.t20_score-b.t20_score)
                } else if(sortBy == 'test') {
                    displayPlayers.sort((a,b)=>a.test_score-b.test_score)
                }
            }
        }
        console.log(displayPlayers)
        
        return (
            <div>
            {
                displayPlayers?(

                    <>  <hr />
                        <div>
                        <FormControl variant="outlined" style={{width:'50%'}}>                            
                            Country Filter
                            <Select       
                            native             
                            value={countryFilter}
                            onChange={this.setCountryFilter}
                            inputProps={{
                                name: 'country',                                
                            }}
                            >
                            <option value="all">All</option>
                            {
                                countries.map(country=>(<option value={country}>{country}</option>))
                            }
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" style={{width:'50%'}}>                            
                            Sort By
                            <Select       
                            native             
                            value={sortBy}
                            onChange={this.setSortBy}
                            inputProps={{
                                name: 'sort',                                
                            }}
                            >
                            <option value="odi">ODI</option>
                            <option value="test">Test</option>
                            <option value="t20">T20</option>
                            </Select>
                        </FormControl>
                        </div>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Country&nbsp;</TableCell>
                                        <TableCell align="right">ODI&nbsp;</TableCell>
                                        <TableCell align="right">TEST&nbsp;</TableCell>
                                        <TableCell align="right">T20&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {displayPlayers.length?displayPlayers.map(player => (
                                    <TableRow key={player.id}>
                                    <TableCell component="th" scope="row">
                                    <Link to={`${match.path}/${player.id}`}>{player.name}</Link>
                                    </TableCell>
                                    <TableCell align="right">{player.country}</TableCell>
                                    <TableCell align="right">{player.odi_score}</TableCell>
                                    <TableCell align="right">{player.test_score}</TableCell>
                                    <TableCell align="right">{player.t20_score}</TableCell>
                                    </TableRow>
                                )):'No Data To Display'}
                                </TableBody>
                            </Table>
                            <ButtonGroup fullWidth aria-label="full width outlined button group">
                                
                                {
                                    items
                                }
                            </ButtonGroup>
                        </Paper>
                    </>

                ) : 'No Players To Display'
            }
            
            </div>
        )
    }    

}

const mapStateToProps = ({players : {players},countries:{countries} }) => ({
    players,
    countries
})

export default connect(mapStateToProps)(Show)
