import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let newTodo;
    this.state= {
      newTodo: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }


  // イベントを発生させたオブジェクトへの参照。
  doChange(event) {
    this.input = event.target.value;
  }
  

  doSubmit(event) {
    this.setState({
      newTodo: this.input
    });
    event.preventDefault();
  }

  render() {
    return <div>
      <form onSubmit={this.doSubmit}>
        <label>
          <input type="text" onChange={this.doChange} />
        </label>
        <input type="submit" value="追加"/>
      </form>
      <Tasks>
        <div>{this.state.newTodo}</div>
      </Tasks>
    </div>
  }
}

class Tasks extends Component {
  render() {
    let content = this.props.children;
    let task = [];
    task.push(content);
    let list = task.map((value) => (
      <li>{value}</li>)
    );
    return <div>
      <ul>{list}</ul>
    </div>
  }
}

export default App;
