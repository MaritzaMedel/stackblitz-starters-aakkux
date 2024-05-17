import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GestionHorasComponent } from './app/gestion-horas/gestion-horas.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
//import { PlatziComponent } from './app/platzi/platzi.component';
import { HomeComponent } from './app/home/home.component';
import { MateriasComponent } from './app/materias/materias.component';
import { MenuComponent } from './app/menu/menu.component';
import {
  provideRouter,
  RouterOutlet,
  RouterLinkActive,
  RouterLink,
  withComponentInputBinding,
} from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GestionHorasComponent,
    HomeComponent,
    MateriasComponent,
    MenuComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  //templateUrl: 'main.html',
  template: `
  <app-menu></app-menu>
  <!--<app-gestion-horas></app-gestion-horas>
  -<app-materias></app-materias>
<app-platzi></app-platzi>-->`,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
  ],
});
