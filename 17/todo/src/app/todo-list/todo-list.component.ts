import { Component, OnInit } from '@angular/core';

import { TodoItem }          from '../model/todo-item';
import { TodoItemsService }  from '../model/todo-items.service';
 
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items:TodoItem[];
    
  constructor(private todoItemsService:TodoItemsService) {
    console.log('list component constructor');
  }

  ngOnInit() {
    console.log('list component on init');
    this.items = this.todoItemsService.getTodoItems();
  }

  toggleCompleted(id:number):void{
    console.log(`toggle completed ${id}`)
    this.todoItemsService.toggleCompleted(id);
  }

  removeItem(id:number):void{
    this.todoItemsService.removeItem(id);
  }

  addNewTodoItem(el:any):void{
    //console.log(el);
    if( el.value.trim().length > 0 ){
        let newTodo:TodoItem = new TodoItem(this.items.length +1, el.value);
        this.todoItemsService.addNewTodo(newTodo);
        el.value = '';
    }
  }
}
