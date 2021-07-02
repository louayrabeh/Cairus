import { Component, OnInit, inject, Inject } from '@angular/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatDialogModule , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';



import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';
import {membre} from '../shared/membre';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {MembresService  } from "../membres/membres.service";


@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  
  constructor(
    public dialogRef: MatDialogRef<Dialog2Component>,
    public membresService:MembresService,
    private formBuilder: FormBuilder
  ) { }


  addbutton(data: any) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    this.membresService.addMembre(data).subscribe(
      (result) => {
        if (result) {
          Swal.fire({
            text: 'Client ajouté avec succés',
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

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required], 
      adresse: ['', Validators.required], 
      ville: ['', Validators.required], 
      gouvernorat: ['', Validators.required],
      code_postale: ['', Validators.required],
      cin: ['',[
                Validators.required,
                Validators.maxLength(8),
                Validators.minLength(8),
                Validators.pattern('[0-9]{8}'),
              ],], 
      num_tel: ['', [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.pattern('[0-9]{8}'),
      ],
    ],
      type: ['', Validators.required],
      date_de_naissance: ['',Validators.required], 






      
     

  } );
  }

  onchange(event:any)
   { console.log(event) }
    
   get email() {
    return this.registerForm.get('email');
  }
  get mdp() {
    return this.registerForm.get('mdp');
  }

  get nom() {
    return this.registerForm.get('nom');
  }
  get prenom() {
    return this.registerForm.get('prenom');
  }
  get cin() {
    return this.registerForm.get('cin');
  }
  get date_de_naissance() {
    return this.registerForm.get('date_de_naissance');
  }

  get adresse() {
    return this.registerForm.get('adresse');
  }
  get ville() {
    return this.registerForm.get('ville');
  }
  get gouvernorat() {
    return this.registerForm.get('gouvernorat');
  }
  get Zip() {
    return this.registerForm.get('Zip');
  }
  get num_tel() {
    return this.registerForm.get('num_tel');
  }
} ;

