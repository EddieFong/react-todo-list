import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      arrayvar: [],
      newText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.state.value = event.target.value;
    this.setState(this.state);
  }

  handleSubmit(event) {
    let tempArrayvar = this.state.arrayvar.concat(this.state.value);
    let tempNewText = tempArrayvar.map((item, i) => {
      return <li key={i}>{item}</li>;})
   this.setState(
      {
        value: '',
        arrayvar: tempArrayvar,
        newText: tempNewText
      }
    )
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ToDo:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* {this.state.newText} */}
        {/* <hr></hr>         */}
        <TodoList newText={this.state.newText} />
      </div>
    );
  }
}

export default App;
