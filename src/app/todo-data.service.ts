import { Injectable } from '@angular/core';
import { Todo } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo : Todo) : TodoDataService {
    if(!todo.getId) {
      todo.setId = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  deleteTodoById(id : number) : TodoDataService {
    this.todos = this.todos.filter(todo => todo.getId !== id);
    return this;
  }
  updateTodoById(id: number, values: Object = {}) : Todo {
    let todo = this.getTodoById(id);
    if(!todo) {
      return null;
    } 
      Object.assign(todo, values);
      return todo;
  }

  getTodoById(id: number) : Todo {
    return this.todos.filter(todo => todo.getId == id).pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updateTodo = this.updateTodoById(todo.getId, {
      complete: !todo.isComplete
    });
    return updateTodo;
  }
}
