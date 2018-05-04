import React from 'react';
import ReactDOM from 'react-dom';
import { configure, action } from 'mobx';
import TodoManager from './models/TodoManager'
import TodoListComponent from './components/TodoList';

configure({ enforceActions: true });

const todoManager = new TodoManager();

setInterval(() => {
  todoManager.addTodo();
}, 1200);

setInterval(() => {
  todoManager.finishTodo();
}, 1500);

ReactDOM.render(
  <TodoListComponent todoList={todoManager.todoList} />,
  document.getElementById('root'),
);
