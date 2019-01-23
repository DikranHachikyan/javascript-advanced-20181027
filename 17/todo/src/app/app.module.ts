import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent      } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemsService  } from './model/todo-items.service';
import { TodoRoutingModule } from './todo-routing/todo-routing.module';
import { RemovedTodoItemsComponent } from './removed-todo-items/removed-todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RemovedTodoItemsComponent
  ],
  imports: [
    BrowserModule,
    TodoRoutingModule
  ],
  providers: [TodoItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
