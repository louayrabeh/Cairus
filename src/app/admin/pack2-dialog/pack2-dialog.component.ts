import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pack2-dialog',
  templateUrl: './pack2-dialog.component.html',
  styleUrls: ['./pack2-dialog.component.css']
})
export class Pack2DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Pack2DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      
    }
    Pack2Succes(){
      Swal.fire(
        'Succès!',
        'Modification enregistrée avec succès!',
        'success'
      )
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
