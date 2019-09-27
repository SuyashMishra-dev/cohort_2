import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { cyan } from '@material-ui/core/colors';
import purple from '@material-ui/core/colors/purple';
import Display from './Display'

const prpl = purple['A200'];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemvalue: '',
      names_arr: [],
      flag: false,
      isCheck: false
    }
  }

  handleChange = (itmval) => {

    this.setState({
      itemvalue: itmval.target.value
    })

  }

  handleClick = () => {
    let obj = {
      val: this.state.itemvalue,
      check: false
    }

    this.setState({
      names_arr: [...this.state.names_arr, obj],
    })
    // console.log(this.state.names_arr)
  }

  handleDelete = (ind) => {

    this.state.names_arr.splice(ind, 1)
    this.setState({
      flag: true
    })

    console.log("hi delete")
  }

  handleCheck = (index) => {

    console.log(index)
    let newelem = this.state.names_arr.map((ele, i) => {
      if (index == i) {
        ele.check = !ele.check
      }
      return ele
    })
    this.setState({
      names_arr: newelem
    })

  }
  render() {
    return (
      <div className="row ">

        <AppBar position="static" >
          <div className="row offset-2 border col-xl-10">
            <InputBase className="col-xl-4 mr-4" onChange={(e) => this.handleChange(e)} value={this.state.itemvalue}></InputBase>

            <Fab color="secondary" >
              <AddIcon onClick={() => this.handleClick()}></AddIcon>
            </Fab>
          </div>
        </AppBar>
        <div className="container">

          <Display deletebtn={this.handleDelete} check={this.handleCheck} flg={this.state.flag} names={this.state.names_arr} />
        </div>

      </div>

    )
  }
}

export default App;