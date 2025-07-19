import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 👇 Define app-level routes here
// Currently empty, but can be used to add paths like '/about', '/todo', etc.
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 👈 Registers the routes at the root level of the app
  exports: [RouterModule] // 👈 Makes RouterModule available throughout the app
})
export class AppRoutingModule { } // 👈 App's main routing module — imported in AppModule
