import { Component, OnInit } from '@angular/core';
import { Alumno, ListaAlumnos } from '../gestion-horas/gestion-horas.component';


@Component({
  selector: 'app-alumno-detalles',
  templateUrl: './alumno-detalles.component.html',
  styleUrls: ['./alumno-detalles.component.css'],
})
export class AlumnoDetallesComponent {
  alumnos: ListaAlumnos[]=[];

  constructor(
    private alumno: Alumno,
  ) {}

  getAlumno(): void {
    
  }
}