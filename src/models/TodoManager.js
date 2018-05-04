import { action } from 'mobx';
import Todo from './Todo';
import TodoList from './TodoList';

export default class TodoManager {
  todoList = new TodoList();

  @action
  addTodo = () => {
    this.todoList.items.push(new Todo(Math.random()));
  };

  @action
  finishTodo = () => {
    const randomIdx = Math.ceil(Math.random() * this.todoList.items.length) - 1;
    this.todoList.items[randomIdx].done = true;
  };
}
