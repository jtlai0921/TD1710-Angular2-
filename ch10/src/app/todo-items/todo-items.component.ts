import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];
  @Output() toggleDoneItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(item : TodoItem){
    this.deleteItem.emit(item);
  }

  itemClick(item : TodoItem){
    this.toggleDoneItem.emit(item);
  }
}
