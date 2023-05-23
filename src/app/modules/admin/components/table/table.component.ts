import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.intefaces';




const ELEMENT_DATA: Usuario[] = [
  {id: 1, nombre: 'Hydrogen', edad: 1.0079, sexo: 'H'},
  {id: 2, nombre: 'Helium', edad: 4.0026, sexo: 'He'},
  {id: 3, nombre: 'Lithium', edad: 6.941, sexo: 'Li'},
  {id: 4, nombre: 'Beryllium', edad: 9.0122, sexo: 'Be'},
  {id: 5, nombre: 'Boron', edad: 10.811, sexo: 'B'},
  {id: 6, nombre: 'Carbon', edad: 12.0107, sexo: 'C'},
  {id: 7, nombre: 'Nitrogen', edad: 14.0067, sexo: 'N'},
  {id: 8, nombre: 'Oxygen', edad: 15.9994, sexo: 'O'},
  {id: 9, nombre: 'Fluorine', edad: 18.9984, sexo: 'F'},
  {id: 10,nombre: 'Neon', edad: 20.1797, sexo: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() titulos!: string[];
  @Input() datos!: any[];
  @Output() editar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();
  @Output() buscar = new EventEmitter<string>();

  onEditar(item: any) {
    this.editar.emit(item);
  }

  onEliminar(item: any) {
    this.eliminar.emit(item);
  }

  onBuscar(event: any) {
    this.buscar.emit(event.target.value);
  }
  

}

