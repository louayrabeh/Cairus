import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-num-dialog',
  templateUrl: './num-dialog.component.html',
  styleUrls: ['./num-dialog.component.css']
})
export class NumDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      
    }
    NumSucces(){
      Swal.fire(
        'Succès!',
        'Numéro de téléphone modifié avec succès!',
        'success'
      )
  
    }


  ngOnInit(): void {
  }

}
