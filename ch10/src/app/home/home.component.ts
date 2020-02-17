import { Component, OnInit } from '@angular/core';

import { TodoItem } from './../shared/todo-item';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
      { provide: TodoService, useClass: TodoService }
  ]
})
export class HomeComponent implements OnInit {

  todoItems: TodoItem[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.create({
      id: 1,
      value: 'Todo Item No.1',
      done: false
    });
    this.todoService.create({
      id: 2,
      value: 'Todo Item No.2',
      done: true
    });
    this.todoService.create({
      id: 3,
      value: 'Todo Item No.3',
      done: false
    });
    this.refreshList();
  }

  refreshList(){
      this.todoItems = this.todoService.all();
  }
  
  addTodo(text){
    this.todoService.create({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
    this.refreshList();
  }

  deleteItem(item : TodoItem){
    this.todoService.remove(item);
    this.refreshList();
  }

  toggleDoneItem(item: TodoItem){
    this.todoService.toggleDone(item);
    this.refreshList();
  }

}
