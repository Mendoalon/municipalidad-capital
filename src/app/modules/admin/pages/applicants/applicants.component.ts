import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../../services/applicants.service';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  titulos = ['id', 'name', 'surname', 'emailAddress', 'gender', 'status', 'acciones'];
  datos: any;

  constructor(private _applicantsService: ApplicantsService){
  }
  ngOnInit(): void {
   this._applicantsService.findAllDevelopers().subscribe(data => {
    this.datos = data;
   })
  }

  


  
  

  onEditar(item: any) {
    // Lógica para la función de editar
    console.log('Editar', item);
    const url = 'http://localhost:4200/admin/applicants/:name'; // Reemplaza con la URL correspondiente
    window.open(url, '_blank');
  }

  onEliminar(item: any) {
    // Lógica para la función de eliminar
    console.log('Eliminar', item);
  }

  onBuscar(value: string) {
    // Lógica para la función de búsqueda
    console.log('Buscar', value);
  }

}
