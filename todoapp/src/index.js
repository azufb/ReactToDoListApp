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
  const [todos, setTodos] = useState([
    {
      text: "",
      onCompleted: false
    }
  ]);

  function addTodo(text) {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  function completeTodo(index) {
    const newTodos = [...todos];

    newTodos[index].onCompleted = true;

    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div class="todo-list">
        {todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
