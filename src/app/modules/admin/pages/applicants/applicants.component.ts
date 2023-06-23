import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../../services/applicants.service';
import { Usuario } from '../../interfaces/usuario.intefaces';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent   implements OnInit{
  title: string [] = ['index', 'nombre', 'email', 'cuil','acciones'];
  data!: MatTableDataSource<Usuario>;
  totalElements!: number;
  pageSize!: number;
  pageIndex!: number;

  constructor(private apiService: ApplicantsService){
  }
  ngOnInit() {

    this.pageIndex = 0;
    this.pageSize = 5;
    this.loadData();
  }

  loadData() {
    this.apiService.allDevelopers(this.pageIndex, this.pageSize).subscribe(response => {
      this.data = new MatTableDataSource<Usuario>(response.content);
      this.totalElements = response.totalElements;
    });
  }

  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  editarUsuario(usuario: Usuario) {
    this.apiService.editarUsuario(usuario).subscribe(updatedUsuario => {
      // Lógica adicional después de editar el usuario
      console.log('Usuario editado:', updatedUsuario);
    });

    const url = 'http://localhost:4200/admin/applicants/:name'; // Reemplaza con la URL correspondiente
      window.open(url, '_blank');
  }

  eliminarUsuario(usuario: Usuario) {
    this.apiService.eliminarUsuario(usuario).subscribe(() => {
      // Lógica adicional después de eliminar el usuario
      console.log('Usuario eliminado:', usuario);
      this.loadData();
    });
  }

  onBuscar(value: string) {
    // Lógica para la función de búsqueda
    console.log('Buscar', value);
  }

}
