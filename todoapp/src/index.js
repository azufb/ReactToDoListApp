import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Todo({todo, index, completeTodo, removeTodo}) {

  return (
    <div className="todo" style={{textDecoration: todo.onCompleted ? 'line-through' : ""}}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>完了</button>
        <button onClick={() => removeTodo(index)}>削除</button>
      </div>
    </div>
    );
}

function TodoForm({addTodo}) {
  const [value,setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if(!value) return;

    addTodo(value);

    setValue("");

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value}
      onChange={event => setValue(event.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([]);

  // 追加したタスクの総数求める
  const [totals, setTotals] = useState(0);

  // 現在残っているタスクの総数求める
  const [count, setCount] = useState(0);

  // 完了したタスクの数求める
  const [compCount, setComps] = useState(0);

  function addTodo(text) {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
    setCount(newTodos.length);
    setTotals(newTodos.length);
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].onCompleted = true;
    setTodos(newTodos);
    setComps(compCount + 1);
    setCount(((newTodos.length) - parseInt(compCount))-1);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setCount((newTodos.length) - parseInt(compCount));
    setTotals(newTodos.length);
  }

  return (
    <div className="app">
      <table>
        <tr>
          <th>残り</th>
          <td>{count}個</td>
          <th>完了</th>
          <td>{compCount}個/{totals}</td>
        </tr>
      </table>
      <div class="todo-list">
        {todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          count={count}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
