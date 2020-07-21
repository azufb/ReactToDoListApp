import React, { Component } from 'react';
import './App.css';

class App extends Component {
  input = '';
  
  // イベントを発生させたオブジェクトへの参照。
  doChange(event) {
    this.input = event.target.value;
  }
  render () {
    return <div>
      <h1>ToDoList</h1>
      <label>
        <input type="text" onChange={this.doChange} />
      </label>
      <button type="submit">追加</button>
    </div>
  }
}

export default App;
