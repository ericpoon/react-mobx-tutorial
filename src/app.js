import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './models/TodoList';
import Todo from './models/Todo';
import TodoListComponent from './components/TodoList';

const todoList = new TodoList();

setInterval(() => {
  todoList.items.push(new Todo(Math.random()));
}, 1200);

setInterval(() => {
  const randomIdx = Math.ceil(Math.random() * todoList.items.length) - 1;
  todoList.items[randomIdx].done = true;
}, 1500);

ReactDOM.render(
  <TodoListComponent todoList={todoList} />,
  document.getElementById('root'),
);
