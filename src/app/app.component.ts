import { Component } from '@angular/core';
import { Todo } from './todo/todo'
import {TodoDataService} from "./todo-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'todo';
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {

  }
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.getId)
  }
  toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  get Todos() {
    return this.todoDataService.getAllTodos();
  }
}
