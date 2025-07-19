import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo-list/todo-list.component';


@NgModule({
  declarations: [TodoListComponent], // ✅ Declare your component(s) here — part of this module
  imports: [
    CommonModule,  // ✅ Needed for Angular directives like *ngIf, *ngFor
    FormsModule    // ✅ Enables two-way binding with [(ngModel)] in forms
  ],
  exports: [
    TodoListComponent // ✅ Export so it can be used in AppModule (via <app-todo-list>)
  ]
})
export class TodoModule { } // 👈 Feature module that encapsulates TODO-related functionality
