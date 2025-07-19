import { Component } from '@angular/core';

// 👇 This is the TODO list component — handles UI and logic for managing todos
@Component({
  selector: 'app-todo-list', // 👈 Custom HTML tag used in app.component.html
  templateUrl: './todo-list.component.html', // 👈 Points to this component’s HTML file
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  // 👇 Sample TODO list data stored locally (no API)
  todos = [
    { id: 1, title: 'Learn Angular Basics', completed: true },
    { id: 2, title: 'Build TODO App', completed: true },
    { id: 3, title: 'Push to GitHub 🚀', completed: false }
  ];

  newTodoTitle = ''; // ✅ Bound to the input field for new TODOs

  // 👇 Adds a new TODO item
  addTodo() {
    const trimmed = this.newTodoTitle.trim();
    if (trimmed) {
      this.todos.push({
        id: Date.now(),
        title: trimmed,
        completed: false
      });
      this.newTodoTitle = ''; // ✅ Clear input
    }
  }

   // 👇 Deletes a TODO item by ID
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }


}
