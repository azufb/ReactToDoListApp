import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = '';

  // イベントを発生させたオブジェクトへの参照。
  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      newTodo: [this.input]
    });
  }

  render () {
    return <div>
      <h1>ToDoList</h1>
      <label>
        <input type="text" onChange={this.doChange} />
      </label>
      <button type="submit" onClick={this.doSubmit}>追加</button>
    </div>
  }
}

export default App;
