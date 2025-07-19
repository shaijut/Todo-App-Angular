import { Component } from '@angular/core';
import { TodoService, Todo } from '../../todo.service';
import { FeedbackService } from '../../../../shared/feedback.service';
import { LoaderService } from '../../../../shared/loader.service';
import { Observable } from 'rxjs';

// 👇 This is the TODO list component — handles UI and logic for managing todos
@Component({
  selector: 'app-todo-list', // 👈 Custom HTML tag used in app.component.html
  templateUrl: './todo-list.component.html', // 👈 Points to this component’s HTML file
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  // 👇 Sample TODO list data stored locally (no API)
  todos: Todo[] = [];
  newTodoTitle = ''; // ✅ Bound to the input field for new TODOs
  editingTodoId: number | null = null;
  editingTitle: string = '';
  feedbackMessage$!: Observable<{ type: 'success' | 'error'; message: string; } | null>;
  loading$: Observable<boolean>;

  constructor(private todoService: TodoService,
    private feedbackService: FeedbackService,
    private loaderService: LoaderService
  ) {
    this.feedbackMessage$ = this.feedbackService.getMessage();
    this.loading$ = this.loaderService.loading$;
  }

  ngOnInit(): void {
    this.loaderService.show();
    this.todoService.getTodos().subscribe({
      next: (data) => {
        //console.log('API responded:', data);
        this.todos = data;
        this.loaderService.hide();
      },
      error: (err) => {
        //console.error('API error:', err);
        this.feedbackService.showMessage('error', '❌ Failed to load todos');
        this.loaderService.hide();
      },
    });
  }

  // 👇 Adds a new TODO item
  addTodo() {
    const trimmed = this.newTodoTitle.trim();
    if (!trimmed) return;

    const newTodo = {
      title: trimmed,
      isCompleted: false
    };

    this.todoService.addTodo(newTodo).subscribe({
      next: (createdTodo) => {
        this.todos.push(createdTodo);
        this.newTodoTitle = '';
        this.feedbackService.showMessage('success', 'Todo Added ✅');
      },
      error: () => {
        this.feedbackService.showMessage('error', '❌ Failed to add todo');
      }
    });
  }


  // 👇 Deletes a TODO item by ID
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.feedbackService.showMessage('success', 'Deleted ✅');
      },
      error: () => this.feedbackService.showMessage('error', '❌ Delete failed'),
    });
  }

  startEditing(todo: Todo) {
    this.editingTodoId = todo.id;
    this.editingTitle = todo.title;
  }

  saveEdit(todo: Todo) {
    const trimmed = this.editingTitle.trim();
    if (!trimmed || trimmed === todo.title) {
      this.cancelEdit();
      return;
    }

    const updated = { ...todo, title: trimmed };
    this.todoService.updateTodo(updated).subscribe({
      next: (updatedTodo) => {
        this.todos = this.todos.map(t => t.id === updatedTodo.id ? updatedTodo : t);
        this.feedbackService.showMessage('success', 'Updated ✅');
        this.cancelEdit();
      },
      error: () => {
        this.feedbackService.showMessage('error', '❌ Update failed');
        this.cancelEdit();
      },
    });
  }

  toggleCompleted(todo: Todo) {
    const updated = { ...todo, isCompleted: !todo.isCompleted };
    this.todoService.updateTodo(updated).subscribe({
      next: (updatedTodo) => {
        this.todos = this.todos.map(t => t.id === updatedTodo.id ? updatedTodo : t);
        this.feedbackService.showMessage('success',
          updatedTodo.isCompleted ? 'Marked complete ✅' : 'Marked incomplete ⏪');
      },
      error: () => {
        this.feedbackService.showMessage('error', '❌ Toggle failed');
      }
    });
  }

  cancelEdit() {
    this.editingTodoId = null;
    this.editingTitle = '';
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }

  filter: 'all' | 'active' | 'completed' = 'all';

  get filteredTodos(): Todo[] {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(t => !t.isCompleted);
      case 'completed':
        return this.todos.filter(t => t.isCompleted);
      default:
        return this.todos;
    }
  }


}
