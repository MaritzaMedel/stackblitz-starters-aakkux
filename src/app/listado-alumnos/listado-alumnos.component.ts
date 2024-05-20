import { Component, OnInit } from '@angular/core';
import { Alumno } from '../gestion-horas/gestion-horas.component';


@Component({
  selector: 'app-alumnos-list',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class listadoAlumnos implements OnInit {
  alumnos: any[] | undefined;

  constructor(private alumnoService: Alumno) { }

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumnos();
  }
}

