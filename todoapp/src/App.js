import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = '';

  constructor(props) {
    super(props);
    this.state = {
      newTodo: [],
      todos: []
    };
    this.doChange = this.doChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // イベントを発生させたオブジェクトへの参照。
  doChange(event) {
    this.input = event.target.value;
  }

  handleClick() {
    this.setState({
      newTodo: [this.input],
      todos:this.todos.concat(this.newTodo)
    });
  }

  render () {
    return <div>
      <h1>ToDoList</h1>
      <label>
        <input type="text" onChange={this.doChange} />
      </label>
      <button type="submit" onClick={this.props.handleClick}>追加</button>
    </div>
  }
}

export default App;
