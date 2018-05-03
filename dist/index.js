'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _desc2, _value2, _class3, _descriptor3;

var _mobx = require('mobx');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Todo = (_class = function Todo(t) {
  _classCallCheck(this, Todo);

  this.id = Math.random();

  _initDefineProp(this, 'title', _descriptor, this);

  _initDefineProp(this, 'finished', _descriptor2, this);

  this.title = t;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'title', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'finished', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
var TodoList = (_class3 = function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    _initDefineProp(this, 'todos', _descriptor3, this);
  }

  _createClass(TodoList, [{
    key: 'finishedTodos',
    get: function get() {
      return this.todos.filter(function (todo) {
        return todo.finished;
      });
    }
  }, {
    key: 'unfinishedTodoCount',
    get: function get() {
      return this.todos.filter(function (todo) {
        return !todo.finished;
      }).length;
    }
  }]);

  return TodoList;
}(), (_descriptor3 = _applyDecoratedDescriptor(_class3.prototype, 'todos', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class3.prototype, 'finishedTodos', [_mobx.computed], Object.getOwnPropertyDescriptor(_class3.prototype, 'finishedTodos'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'unfinishedTodoCount', [_mobx.computed], Object.getOwnPropertyDescriptor(_class3.prototype, 'unfinishedTodoCount'), _class3.prototype)), _class3);


var todoList = new TodoList();

(0, _mobx.autorun)(function () {
  console.log('Tasks left:', todoList.unfinishedTodoCount);
});

(0, _mobx.autorun)(function () {
  console.log('Total:', todoList.todos.length);
});

(0, _mobx.autorun)(function () {
  console.log('Finished:', todoList.finishedTodos.map(function (todo) {
    return todo.id + ': ' + todo.title;
  }));
});

todoList.todos.push(new Todo('Get Coffee'), new Todo('Write simpler code'));

todoList.todos[0].finished = true;

// only triggered once
(0, _mobx.when)(function () {
  return todoList.unfinishedTodoCount === 0;
}, function () {
  return console.log('You have finished all tasks.');
});

todoList.todos[0].finished = false;
todoList.todos[1].finished = true;
todoList.todos[0].finished = true;

(0, _mobx.reaction)(function () {
  return todoList.unfinishedTodoCount;
}, function (unfinishedTodoCount) {
  console.log("Unfinished:", unfinishedTodoCount);
});

todoList.todos[0].finished = false;
todoList.todos[0].finished = true;