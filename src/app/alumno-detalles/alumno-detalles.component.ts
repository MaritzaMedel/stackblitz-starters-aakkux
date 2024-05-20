import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from './alumno.service';


@Component({
  selector: 'app-alumno-detalles',
  templateUrl: './alumno-detalles.component.html',
  styleUrls: ['./alumno-detalles.component.css'],
})
export class AlumnoDetallesComponent implements OnInit {
  alumno: any;

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    const matricula = this.route.snapshot.paramMap.get('matricula');
    this.alumno = this.alumnoService.getAlumnoById(matricula);
  }
}