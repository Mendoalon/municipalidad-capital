import { Component,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApplicantsService } from '../../services/applicants.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  constructor(
    private applicantsService: ApplicantsService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

onConfirm(): void {
  console.log(this.data.email);
  
  this.applicantsService.disableOrEnableUser(this.data.email).subscribe(data2 => {
    console.log(data2);
    this.dialogRef.close('Usuario deshabilitado'); // Pasar el resultado como cadena de texto
  }, error => {
    console.log(error);
    this.dialogRef.close('Error al deshabilitar el usuario'); // Manejar el error y cerrar el modal con un mensaje
  });
}

  onCancel(): void {
    this.dialogRef.close();
  }
}
