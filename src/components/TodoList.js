import React, { Component } from 'react'

export default class TodoList extends Component {
  state = {newText: this.props.newText}

  render() {
    return (
      <div>
        {this.props.newText}
        <hr></hr>
        {this.state.newText}
      </div>
    )
  }
}
