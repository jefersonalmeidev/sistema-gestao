import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // ← Nome correto do componente
import { routes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, { providers: [provideRouter(routes, withComponentInputBinding())]})
  .catch(err => console.error(err));
