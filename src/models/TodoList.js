import { computed, observable } from 'mobx';

export default class TodoList {
  @observable items = [];

  @computed get finishedItems() {
    return this.items.filter(todo => todo.done);
  }

  @computed get unfinishedItems() {
    return this.items.filter(todo => !todo.done);
  }
}
