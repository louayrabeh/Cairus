import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {membre} from '../shared/membre';
import Swal from 'sweetalert2';
import {MembresService  } from "../membres/membres.service";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  Form,
} from '@angular/forms';




@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log(data);
    }
   
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
