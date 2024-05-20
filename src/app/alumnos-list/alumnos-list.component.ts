import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno-detalles/alumno.service';


@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css'],
})
export class AlumnosListComponent implements OnInit {
  alumnos: any[];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAlumnosComputacion();
  }
}
