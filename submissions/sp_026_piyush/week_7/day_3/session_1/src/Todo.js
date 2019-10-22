import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      finished: false,
      toDoList: [],
      check: false
    };
  }

  toggleFinished = element => {
    console.log(element);
    this.setState({});
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleOnClick = event => {
    this.setState({
      value: this.state.value,
      finished: this.state.finished,
      toDoList: [
        ...this.state.toDoList,
        { value: this.state.value, finished: this.state.finished }
        // [this.state.value, this.state.finished]
      ]
    });
  };

  render() {
    var counter = 0;
    // console.log(this.state);
    return (
      <div>
        <fieldset>
          <legend>Enter an item and click Add to add to todo</legend>
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
          <button onClick={e => this.handleOnClick(e)}>Add</button>
        </fieldset>
        <ul>
          {this.state.toDoList
            .filter(element => element.finished === this.state.check)
            .map(element => (
              // <li key={counter++} onClick={e => this.toggleFinished(e)}>
              //   {element.value}
              // </li>
              <li
                key={counter++}
                onClick={() => (element.finished = !element.finished)}
              >
                {element.value}
              </li>
            ))}
        </ul>
        <br />
        <ul>
          {this.state.toDoList
            .filter(element => element.finished === true)
            .map(element => (
              // <li key={counter++} onClick={e => this.toggleFinished(e)}>
              //   {element.value}
              // </li>
              <s>
                <li
                  key={counter++}
                  onClick={() => (element.finished = !element.finished)}
                >
                  {element.value}
                </li>
              </s>
            ))}
        </ul>
        {/* <ul>
          {this.state.toDoList
            .filter(element => element.finished === false)
            .map(element => (
              // <li key={counter++} onClick={e => this.toggleFinished(e)}>
              //   {element.value}
              // </li>
              <s>
                <li key={counter++} onClick={e => this.toggleFinished(e)}>
                  {element.value}
                </li>
              </s>
            ))}
        </ul> */}
      </div>
    );
  }
}

export default Todo;
