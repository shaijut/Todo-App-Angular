// main.ts file
// 👆 Entry point of the Angular application — this is where Angular starts

// Imports a function to bootstrap the Angular app in the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root app module (must be exported in app.module.ts)
import { AppModule } from './app/app.module';


// 👇 Bootstraps the Angular app using the AppModule
// The optional config `{ ngZoneEventCoalescing: true }` improves performance by coalescing events
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err)); // 👈 Logs any errors during bootstrap
