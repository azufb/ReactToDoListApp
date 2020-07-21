import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return <div>
      <h1>ToDoList</h1>
      <label>
        <input type="text" />
      </label>
      <button type="submit">追加</button>
    </div>
  }
}

export default App;
