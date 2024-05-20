import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnos = [
    {
      no: 1,
      matricula: '2020001',
      nombre: 'Juan Pérez',
      carrera: 'Ingeniería en Computación',
      empresa: 'Empresa A',
      progreso: '75%',
    },
    {
      no: 2,
      matricula: '2020002',
      nombre: 'Ana García',
      carrera: 'Ingeniería en Diseño',
      empresa: 'Empresa B',
      progreso: '50%',
    },
    // Agrega más alumnos según sea necesario
  ];

  constructor() {}

  getAlumnosComputacion() {
    return this.alumnos.filter(
      (alumno) => alumno.carrera === 'Ingeniería en Computación'
    );
  }

  getAlumnoById(matricula: string) {
    return this.alumnos.find((alumno) => alumno.matricula === matricula);
  }
}