import React from 'react';
import './App.css';
import Todo from './components/todo'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { Container, Grid, TextField , Fab, Paper} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MaterialTodo from './components/MaterialTodo';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoInputValue : '',
      todos : []
    }
  }

  handleTodoInput = (e) =>{
    e.preventDefault();
    this.setState({
      todoInputValue : e.target.value
    })
  }

  addTodo = () => {
    let newTodoValue = {
      value : this.state.todoInputValue,
      done : false
    };
    
    this.setState({
      todos : [...this.state.todos,newTodoValue]
    }) 
    
  }

  removeTodo = (index) =>{
    let arr = this.state.todos.filter((el,i)=>i!==parseInt(index));
    this.setState({
      todos : [...arr] 
    })
  }

  handleCheck = (index) => {
    console.log(index)
    let arr = this.state.todos;
    arr[index].done = (!arr[index].done);
    
    this.setState({
      todos : [...arr] 
    })
  }

  render(){
    
    let todoList = 'Add a Todo'
    let completed = '';
    if (this.state.todos.length !== 0) {
      todoList =  this.state.todos.filter(el=>el.done===false).map((todo,i)=><Todo remove={()=>{this.removeTodo(i)}} changeCheck={()=>(this.handleCheck(i))} key={i} data={todo} />)   
      completed =  this.state.todos.filter(el=>el.done===true).map((todo,i)=><Todo remove={()=>{this.removeTodo(i)}} changeCheck={()=>(this.handleCheck(i))} key={i} data={todo} />)   

    }    
    return (
      <>
      <div className="App">
        <div style={{padding:"5px"}}>
          {/* <button onClick={()=>{this.addTodo()}}>+</button> */}
          <Fab onClick={()=>{this.addTodo()}} color="primary" style={{margin:"0px 10px"}} aria-label="add">
            <AddIcon />
          </Fab>
          {/* <input type="text" value={this.state.todoInputValue} onChange={(e)=>{this.handleTodoInput(e)}} /> */}
          <TextField
            id="standard-name"
            label="Add a Todo"            
            value={this.state.todoInputValue}
            onChange={(e)=>{this.handleTodoInput(e)}}            
          />
        </div>
        <h3>Incomplete</h3>
        {todoList}
        <h3>Complete</h3>
        {completed}
      </div>
      <hr />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <h1>Material Todo</h1>
        
      </Grid>

      <Grid container direction="row" justify="center" alighItems="flex-start">    
        {/* <Paper>       */}
          <Grid item>
          
            <MaterialTodo todos={this.state.todos} changeCheck={(ind)=>{this.handleCheck(ind)}} remove={(index)=>{this.removeTodo(index)}}/>
          </Grid>
        {/* </Paper> */}
      </Grid>

      <hr />
      {/* experimenting with material ui */}

      <Button variant="contained" color="primary">
        Hello World
      </Button>
      {/* box is a div unless mentioned in component  */}
      <Box component="span" m={1}>
        xyx
        <Button />
      </Box>
      <Box color="text.primary" clone>
        <Button>change color</Button>
      </Box>
      <Box color="text.primary">
        {props => <Button {...props} />}
      </Box>
      <Container maxWidth="md">xyz</Container>
      <hr />
      <Container fixed>
      
        <Grid container spacing={3}>
          <Grid item xs={4} md={6}>
              xs 4 md 6
          </Grid>
          <Grid item xs={8} md={6}>
            xs 8 md 6
          </Grid>
          <Grid item md={6}>
            <Button variant="contained" style={{background:"orange",color:"white"}}>
              Primary
            </Button>
            <Button color="secondary" style={{marginLeft:"100px"}}>
              Secondary
            </Button>
            <Button variant="outlined" m={10}>
              Default
            </Button>
          </Grid>
        </Grid>

      </Container>
      </>
    )
  }
}

export default App;
