import { Component, OnInit } from '@angular/core';
import { Alumno, ListaAlumnos } from '../gestion-horas/gestion-horas.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alumno-detalles',
  templateUrl: './alumno-detalles.component.html',
  styleUrls: ['./alumno-detalles.component.css'],
})
export class AlumnoDetallesComponent {
 public alumno!: Alumno;
 public detalles:FormGroup;
 public detallesForm:FormControl=new FormControl();

constructor(private fb: FormBuilder){
  this.detalles=this.fb.group({
    nombre:['',Validators.required],
    matricula:['',Validators.required],
    semestre:['',Validators.required],
    empresa:['',Validators.required],
    horas:['',Validators.required],
  });
}
  obtenerDatosAlumno(){
    this.alumno.getNombre();
    this.alumno.getMatricula();
    this.alumno.getSemestre();
    this.alumno.getEmpresa();
    this.alumno.getHorasServicio();
  }





}