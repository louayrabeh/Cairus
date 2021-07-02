import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import {Service1Service  } from "../servicess/service1.service";
import { service1 } from '../shared/service1';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';
@Component({
  selector: 'app-pack1-dialog',
  templateUrl: './pack1-dialog.component.html',
  styleUrls: ['./pack1-dialog.component.css']
})
export class Pack1DialogComponent implements OnInit {
  submitted = false;
  registerForm!: FormGroup;



  constructor(
    public dialogRef: MatDialogRef<Pack1DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private service1Service:Service1Service,
    ) {
      
    }
   
  onNoClick(): void {
    this.dialogRef.close();
  }
  Pack1Succes(){
    Swal.fire(
      'Succès!',
      'Modification enregistrée avec succès!',
      'success'
    )
  }
  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
        
      nom: ['', Validators.required], 

} );
  }
  addbutton(data: any) {

    console.log(this.data)
    console.log(this.data[0]._id)
    /*  let user = {
        email : data.email ,
        name: "Oussama",
        
      }

      this.devisService.email(user).subscribe()
*/

     
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }  /**  data.nom=this.data.nom*/
      
  

      this.service1Service.editService1(this.data,this.data[0]._id).subscribe(
      (result) => {
        if (result) {
          Swal.fire({
            text: 'Demande de Devis ajouté avec succés',
            icon: 'success',
            showConfirmButton: false,
            timer: 1200,
          });
          this.dialogRef.close();
        }
      },
      (error) => {}
    );
    
  }
  get f() { return this.registerForm.controls; }
  onchange(event:any)
   { console.log(event) }

}
