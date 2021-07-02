import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';
import {devis} from 'src/app/admin/shared/devis';
import { MatDialogRef } from '@angular/material/dialog';

import {DevisService  } from "src/app/Expert/devis/devis.service";
import { threadId } from 'node:worker_threads';


@Component({
  selector: 'app-devisdemande',
  templateUrl: './devisdemande.component.html',
  styleUrls: ['./devisdemande.component.css']
})
export class DevisdemandeComponent implements OnInit {
  shell:any;
  registerForm!: FormGroup;
  submitted = false;


  constructor(
    private http:HttpClient,
    public dialogRef: MatDialogRef<DevisdemandeComponent>,
    public devisService:DevisService,
    private formBuilder: FormBuilder

  ) { }
  ngOnInit(): void {

    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
      this.shell=result
      
    })

    this.registerForm = this.formBuilder.group({
      
      description: ['', Validators.required],
      
      
     
     

  } );

 
  
      }




      addbutton(data: any) {
        this.submitted = true;
        if (this.registerForm.invalid) {
          return;
      }data.id_Client=this.shell._id
      data.nom=this.shell.nom
      data.prenom=this.shell.prenom
      data.email=this.shell.email
        this.devisService.addDevis(data).subscribe(
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
