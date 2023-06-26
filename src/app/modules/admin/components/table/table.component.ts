import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../interfaces/usuario.intefaces';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() dataSource!: MatTableDataSource<Usuario>;
  @Input() title: string[] = [];
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() totalElements!: number;
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() buscar = new EventEmitter<string>();
  @Output() editar: EventEmitter<string> = new EventEmitter<string>();
  @Output() eliminar: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  getCurrentIndex(indexOnPage: number): number {
    return this.pageIndex * this.pageSize + indexOnPage + 1;
  }
  onPageChanged(event: PageEvent) {
    this.page.emit(event);
  }

  editarUsuario(email: string) {
    this.editar.emit(email);
  }

  eliminarUsuario(email: string) {
    this.eliminar.emit(email);
  }

  onBuscar(event: any) {
    this.buscar.emit(event.target.value);
  }
}

