
import React from "react";
import { addPlayer } from '../redux/action'
import { connect } from "react-redux";
var data=[];
var details=JSON.parse(localStorage.getItem("players"))
if(details==null){

}
else{
    data=[...details]
}


class Create extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: "",
            T20score: "",
            odiscore: "",
            testscore: "",
            selectedcountry: "",
        }
    }
    handleChange = e => {
        e.preventDefault();
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        alert('Form Submitted')
               let obj = {
            player: this.state.player,
            T20score: this.state.T20score,
            odiscore: this.state.odiscore,
            testscore: this.state.testscore,
            selectedcountry: this.state.selectedcountry,
        
        };
        data.push(obj)
        this.props.add(obj);
        localStorage.setItem('players',JSON.stringify(data))
    };

    render() {
        console.log(this.props, "state = ", this.state);
        return (
            <div style={{ padding: 100 }}>
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <div class="form-group ">
                        <select name="selectedcountry" value={this.state.selectedcountry} onChange={e => { this.handleChange(e) }} class="form-control">
                            <option>Choose Country..</option>
                            <option value="India">India</option>
                            <option value="England">England</option>
                            <option value="Australia">Australia</option>
                            <option value="WestIndies">WestIndies</option>
                            <option value="Srilanka">Srilanka</option>
                            <option value="Pakisthan" >Pakisthan</option>
                            <option value="Afghanisthan">Afghanisthan</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="newZealand">newZealand</option>
                            <option value="Netharlands">Netharlands</option>
                        </select>
                    </div>
                    <div class="form-group">

                        <label for="formGroup Enter Player Name">Player Name</label>
                        <input class="form-control" name="player" value={this.state.player} onChange={e => { this.handleChange(e); }}
                            type="text" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupEnter T20 Score">T20 score</label>
                        <input class="form-control" name="T20score" value={this.state.code} onChange={e => { this.handleChange(e); }}
                            type="text" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupEnter ODI Score">ODI Score</label>
                        <input class="form-control" name="odiscore" value={this.state.odiscore} onChange={e => { this.handleChange(e); }}
                            type="text" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupEnter Test Score">Test Score</label>
                        <input class="form-control" name="testscore" value={this.state.testscore} onChange={e => { this.handleChange(e); }}
                            type="text" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     console.log("map State called ");
//     return {

//         orderList: state.orderList
//     };
// };
const mapDispatchToProps = dispatch => {
    console.log("map Dispatcher ");
        return {
        add: item => dispatch(addPlayer(item))
    };
};

export default connect(
null,
    mapDispatchToProps
)(Create);
