import { Component} from '@angular/core';
import { Alumno, ListaAlumnos } from '../gestion-horas/gestion-horas.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css'],
})
export class AlumnosListComponent {
  lista!:ListaAlumnos;
  alumnos:Alumno[] =[];
  public listado:FormGroup;
  public listadoForm:FormControl=new FormControl();
 
 constructor(private la: FormBuilder){
   this.listado=this.la.group({
     no:['',Validators.required],
     nombre:['',Validators.required],
     matricula:['',Validators.required],
     carrera:['',Validators.required],
     empresa:['',Validators.required],
     progreso:['',Validators.required],
   });
 
 }
  obtenerListado(){
      this.alumnos=this.lista.getAlumnos();
  }

  
}
