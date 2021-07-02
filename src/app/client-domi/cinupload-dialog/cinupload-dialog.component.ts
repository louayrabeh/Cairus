import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cinupload-dialog',
  templateUrl: './cinupload-dialog.component.html',
  styleUrls: ['./cinupload-dialog.component.css']
})
export class CINUploadDialogComponent {

  PieceSucces(){
    Swal.fire(
      'Succès!',
      'Pièces justificatives ajoutées avec succès!',
      'success'
    )

  }
}
