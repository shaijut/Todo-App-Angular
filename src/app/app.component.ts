import { Component } from '@angular/core';

// 👇 This decorator defines metadata for the component
@Component({
  selector: 'app-root', // 👈 Custom HTML tag used in index.html to load this component
  templateUrl: './app.component.html', // 👈 External HTML template file for this component
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'todo-app';
}
