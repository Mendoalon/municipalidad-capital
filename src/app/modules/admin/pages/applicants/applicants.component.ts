import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantsService } from '../../services/applicants.service';
import { Usuario } from '../../interfaces/usuario.intefaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent   implements OnInit{
  title: string[] = ['index', 'name', 'email', 'cuil', 'state', 'shares'];
  applicanst!: MatTableDataSource<Usuario>;
  totalElements!: number;
  pageSize!: number;
  pageIndex!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApplicantsService, private dialog: MatDialog) {}

    ngOnInit() {
    this.pageIndex = 0;
    this.pageSize = 5;
    this.loadData();
  }

  loadData() {
    this.apiService.allDevelopers(this.pageIndex, this.pageSize).subscribe(response => {
      this.applicanst = new MatTableDataSource<Usuario>(response.content);
      this.totalElements = response.totalElements;
      this.applicanst.paginator = this.paginator; // Agrega esta línea para asociar el paginador al dataSource
    });
  }
  

  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  editarUsuario(email: string) {
    this.apiService.editarUsuario(email).subscribe(updatedUsuario => {
      // Realiza acciones adicionales después de editar el usuario si es necesario
    });

    const url = 'http://localhost:4200/admin/applicants/:name'; // Reemplaza con la URL correspondiente
    window.open(url, '_blank');
  }

  eliminarUsuario(email: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { email }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Usuario deshabilitado') {
        this.loadData(); // Actualizar los datos después de deshabilitar el usuario
      } else if (result === 'Error al deshabilitar el usuario') {
        // Mostrar un mensaje de error, si es necesario
      }
    });
  }

  onBuscar(value: string) {
    // Lógica para la función de búsqueda
    console.log('Buscar', value);
  }

}
