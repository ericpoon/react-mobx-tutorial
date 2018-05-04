import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    const { finishedItems, unfinishedItems } = todoList;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div>
          <h1>Completed:</h1>
          {finishedItems.map(i => <p key={i.id} style={{ color: 'green' }}>{i.title}</p>)}
        </div>
        <div>
          <h1>To be done:</h1>
          {unfinishedItems.map(i => <p key={i.id} style={{ color: 'red' }}>{i.title}</p>)}
        </div>
      </div>
    );
  }
}
