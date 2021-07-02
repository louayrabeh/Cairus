import { Component, OnInit } from '@angular/core';
import { CourrierAddComponent } from '../../courrier-add/courrier-add.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-courrier-upload-main',
  templateUrl: './courrier-upload-main.component.html',
  styleUrls: ['./courrier-upload-main.component.css']
})
export class CourrierUploadMainComponent{

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  DialogCourrier(): void {
    const dialogRef = this.dialog.open(CourrierAddComponent, {
      width: '650px',
      height:'370px'
    });

}
alert(){
  Swal.fire({
    text: 'Courrier envoyé avec succés',
    icon: 'success',
    showConfirmButton: false,
    timer: 1200,
  });
}

}