import { observable, computed, autorun, when, reaction } from 'mobx';

class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;

  constructor(t) {
    this.title = t;
  }
}

class TodoList {
  @observable todos = [];

  @computed get finishedTodos() {
    return this.todos.filter(todo => todo.finished);
  }

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

const todoList = new TodoList();

autorun(() => {
  console.log('Tasks left:', todoList.unfinishedTodoCount);
});

autorun(() => {
  console.log('Total:', todoList.todos.length);
});

autorun(() => {
  console.log('Finished:', todoList.finishedTodos.map(todo => todo.id + ': ' + todo.title));
});

todoList.todos.push(
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
);

todoList.todos[0].finished = true;

// only triggered once
when(() => todoList.unfinishedTodoCount === 0, () => console.log('You have finished all tasks.'));

todoList.todos[0].finished = false;
todoList.todos[1].finished = true;
todoList.todos[0].finished = true;

reaction(() => todoList.unfinishedTodoCount, unfinishedTodoCount => {
  console.log("Unfinished:", unfinishedTodoCount);
});

todoList.todos[0].finished = false;
todoList.todos[0].finished = true;
