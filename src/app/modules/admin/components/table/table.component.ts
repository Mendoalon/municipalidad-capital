import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.intefaces';


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

