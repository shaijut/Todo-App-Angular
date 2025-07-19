// ✅ app.module.ts file
// This is the root module of the Angular app.
// It tells Angular how to assemble the app by declaring components and importing other modules.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './features/todo/todo.module'; // ✅ Import feature module

// 👇 @NgModule is a decorator that marks this class as an Angular module
// It takes a metadata object to define the module's building blocks
@NgModule({
  declarations: [
    AppComponent // 👈 Root component of the app
  ],
  imports: [
    BrowserModule,     // 👈 Enables app to run in a browser
    AppRoutingModule,  // 👈 Handles routing for main app views
    HttpClientModule,
    TodoModule         // 👈 Feature module that contains the TODO functionality
  ],
  providers: [],        // 👈 Add services here if needed (none for now)
  bootstrap: [AppComponent] // 👈 Launch the app with this root component
})
export class AppModule { } 
// 👆 AppModule is Root Angular module that ties everything together
// `export` is required so main.ts can import this and bootstrap the app
