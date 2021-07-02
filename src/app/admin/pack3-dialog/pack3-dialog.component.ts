import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pack3-dialog',
  templateUrl: './pack3-dialog.component.html',
  styleUrls: ['./pack3-dialog.component.css']
})
export class Pack3DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Pack3DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      
    }
   
  onNoClick(): void {
    this.dialogRef.close();
  }
  Pack3Succes(){
    Swal.fire(
      'Succès!',
      'Modification enregistrée avec succès!',
      'success'
    )
  }
  ngOnInit(): void {
  }

}
