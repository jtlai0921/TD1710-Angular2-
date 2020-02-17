import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from './../shared/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];

  @Output() deleteTodoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemClick(item) {
    item.done = !item.done;
  }

  delete(item) {
    this.deleteTodoEvent.emit(item);
  }

}
