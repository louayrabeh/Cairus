import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DevisService } from 'src/app/Expert/devis/devis.service';
import { MembresService } from 'src/app/admin/membres/membres.service';
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


@Component({
  selector: 'app-detailsdialog',
  templateUrl: './detailsdialog.component.html',
  styleUrls: ['./detailsdialog.component.css']
})
export class DetailsdialogComponent implements OnInit {
  shell:any;
  registerForm!: FormGroup;
  submitted = false;
  constructor(
    
    private membresService: MembresService,
    private devisService: DevisService,
    public dialogRef: MatDialogRef<DetailsdialogComponent>,
    private formBuilder: FormBuilder,
    private http:HttpClient,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log(data);
    }

    ngOnInit(): void {

      this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
        this.shell=result
      })
  
      this.registerForm = this.formBuilder.group({
        
        reponse: ['', Validators.required], 
  
  } );
   }
   
   addbutton(data: any) {

    /*  let user = {
        email : data.email ,
        name: "Oussama",
        
      }

      this.devisService.email(user).subscribe()
*/

     
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }   data.nom=this.data.nom
      data.prenom=this.data.prenom
      data.email=this.data.email
      data.description=this.data.description
      data.id_Client=this.data.id_Client
      let user = {
        email : data.email ,
        name: data.nom,
        reponse: data.reponse
        
      }

      this.devisService.email(user).subscribe()

      this.devisService.editDevis(data,this.data._id).subscribe(
      (result) => {
        if (result) {
          Swal.fire({
            text: 'Devis ajouté avec succés',
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

