import { observable } from 'mobx';

export default class Todo {
  id = Math.random();
  @observable title;
  @observable done;

  constructor(title) {
    this.title = title;
  }
}
