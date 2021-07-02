import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-courrier-add',
  templateUrl: './courrier-add.component.html',
  styleUrls: ['./courrier-add.component.css']
})
export class CourrierAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CourrierAddComponent>) { }

  ngOnInit(): void {
  }
  register(){
    Swal.fire(
      'Succès!',
      'Courrier envoyé avec succès!',
      'success'
    )
    this.dialogRef.close();}
    
}
