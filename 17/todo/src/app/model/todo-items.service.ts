import { Injectable }     from '@angular/core';
import { TodoItem }       from './todo-item';
import { Observable, of } from 'rxjs';

const todoItems:TodoItem[] = [
    {"id":1,"title":"Gratitude list – 5 things you are grateful for", "completed":false},
    {"id":2,"title":"Start the day with your WHY.", "completed":false},
    {"id":3,"title":"Fresh green juice", "completed":false},
    {"id":4,"title":"Write 500 words", "completed":true},
    {"id":5,"title":"Review the day and check in with the next few days", "completed":true},
    {"id":6,"title":"Clear desk ready for a fresh day tomorrow!", "completed":false}
];

const removedItems:TodoItem[] = [];

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  constructor() { }

  getTodoItems():Observable<TodoItem[]>{
    return of(todoItems);
  }

  toggleCompleted(id:number):void{
    todoItems.map( (item)=>{
      if( item.id === id){
        item.completed = !item.completed;
      }
    });
  }

  removeItem(id:number):void{
    let index = todoItems.findIndex( (item)=>item.id === id);
    if( index > -1){
      todoItems.splice(index,1);
    }
  }

  addNewTodo(item:TodoItem):void{
    todoItems.unshift(item);
  }
}
