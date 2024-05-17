import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { ApiComponent } from './api/api.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
];
