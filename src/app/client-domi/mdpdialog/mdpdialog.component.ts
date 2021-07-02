import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import {MembresService  } from 'src/app/admin/membres/membres.service';
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
  selector: 'app-mdpdialog',
  templateUrl: './mdpdialog.component.html',
  styleUrls: ['./mdpdialog.component.css']
})
export class MDPDialogComponent implements OnInit {
  show: boolean;
  shell:any;
  reglagesForm!: FormGroup;
  submitted = false;


  constructor(
    public dialogRef: MatDialogRef<MDPDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data:any,
    private http:HttpClient,
    private membresService:MembresService,
    private formBuilder: FormBuilder


    ) {
      this.show = false;
    }
    
    
    addbutton(data: any) {

      this.submitted = true;
      if (this.reglagesForm.invalid) {
        return;
    }   data.nom=this.data.nom
    console.log(this.shell.nom)
        data.prenom=this.data.prenom
        data.email=this.data.email
        data.role=this.data.role
        data.cin=this.data.cin 
        data.mdp=this.data.mdp
        data.date_de_naissance=this.data.date_de_naissance 
        data.adresse=this.data.adresse  
        data.ville=this.data.ville 
        data.code_postale=this.data.code_postale
        data.sexe=this.data.sexe
        data.num_tel=this.data.num_tel
        data.type=this.data.type
        data.gouvernorat=this.data.gouvernorat
        data.dateinscription=this.data.dateinscription

     
      
     
        
  
        this.membresService.editMembre(data,this.shell._id).subscribe(
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
    get f() { return this.reglagesForm.controls; }
  onchange(event:any)
   { console.log(event) }

    
    password() {
      this.show = !this.show;
  }
 
  
  ngOnInit(): void {
    
    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
      this.shell=result
      console.log(this.shell.mdp)
    })


    
    this.reglagesForm = this.formBuilder.group({
      
      mdp: ['', Validators.required],
      
 
      

  } );

    
  }
  

}
