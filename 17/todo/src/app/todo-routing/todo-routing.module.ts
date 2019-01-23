import { NgModule }            from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { TodoListComponent }   from '../todo-list/todo-list.component';
import { RemovedTodoItemsComponent  }   from '../removed-todo-items/removed-todo-items.component';

const routes:Routes = [
     {path:'list', component:TodoListComponent}
   , {path:'removed', component: RemovedTodoItemsComponent}
   , {path:'**', redirectTo:'/list'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
