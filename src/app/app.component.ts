import { Component, Input } from '@angular/core';
import { Todo } from './todo/todo'
import {TodoDataService} from "./todo-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  @Input()
  public newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {

  }
  public addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  public removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.getId)
  }
  public toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  public get Todos() {
    return this.todoDataService.getAllTodos();
  }
}
