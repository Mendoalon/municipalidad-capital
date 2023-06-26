import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.intefaces';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { CompaniesService } from '../../services/companies.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  title: string [] = ['index', 'name', 'email', 'cuil','state', 'shares'];
  data!: MatTableDataSource<Usuario>;
  totalElements!: number;
  pageSize!: number;
  pageIndex!: number;

  
  constructor(private apiService: CompaniesService){
  }
  ngOnInit() {

    this.pageIndex = 0;
    this.pageSize = 5;
    this.loadData();
  }

  loadData() {
    this.apiService.allCompanies(this.pageIndex, this.pageSize).subscribe(response => {
      this.data = new MatTableDataSource<Usuario>(response.content);
      this.totalElements = response.totalElements;
    });
  }

  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  editarUsuario(email: String) {
    this.apiService.editarUsuario(email).subscribe(updatedUsuario => {
      // Lógica adicional después de editar el usuario
      console.log('Usuario editado:', updatedUsuario);
    });


      const url = 'http://localhost:4200/admin/company/:name'; // Reemplaza con la URL correspondiente
      window.open(url, '_blank');
  }

  eliminarUsuario(email: String) {
    this.apiService.disableOrEnableUser(email).subscribe(() => {
      // Lógica adicional después de eliminar el usuario
      console.log('Usuario eliminado:', email);
      this.loadData();
    });
  }


  onEditar(item: any) {
    // Lógica para la función de editar
    console.log('Editar', item);
    const url = 'https://www.google.com'; // Reemplaza con la URL correspondiente
    window.open(url, '_blank');
    
  }

  onBuscar(value: string) {
    // Lógica para la función de búsqueda
    console.log('Buscar', value);
  }

}
