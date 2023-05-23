import { Component } from '@angular/core';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  titulos =['id', 'nombre', 'apellido','email', 'acciones'];
  datos = [
    { id: 1, nombre: 'Sofka', apellido: 'Doe', email: 'hyh@gmail.com' },
    { id: 2, nombre: 'Sofka', apellido: 'Smith', email: 'hyh@gmail.com'},
    { id: 3, nombre: 'Sofka', apellido: 'Johnson', email: 'hyh@gmail.com' }
    // Agrega más datos según sea necesario
  ];

  onEditar(item: any) {
    // Lógica para la función de editar
    console.log('Editar', item);
    const url = 'https://www.google.com'; // Reemplaza con la URL correspondiente
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
