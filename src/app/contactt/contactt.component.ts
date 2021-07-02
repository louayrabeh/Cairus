import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/Expert/devis/devis.service';
import Swal from 'sweetalert2';
import { ContacttService } from './contactt.service';



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
  selector: 'app-contactt',
  templateUrl: './contactt.component.html',
  styleUrls: ['./contactt.component.css']
})
export class ContacttComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private contacttService: ContacttService,
    private devisService: DevisService


  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        
      nom: ['', Validators.required], 
      email: ['', Validators.required], 

      sujet: ['', Validators.required], 

      reponse: ['', Validators.required], 


} );
  }

  addbutton() {

    /*  let user = {
        email : data.email ,
        name: "Oussama",
        
      }

      this.devisService.email(user).subscribe()
*/
let user = {
  email : "malek.guizani@etudiant-fst.utm.tn" ,
  name: "malek",
  reponse: "dddddd"
  
}

 this.devisService.email(user).subscribe()
     
    
      /*let user = {
        email : "malek.guizani@etudiant-fst.utm.tn" ,
        name: "Malek",
        
        
      }

      this.contacttService.email(user).subscribe()*/
      Swal.fire({
        text: 'Question ajouté avec succés',
        icon: 'success',
        showConfirmButton: false,
        timer: 1200,
      });

      
  }
  get f() { return this.registerForm.controls; }
  onchange(event:any)
   { console.log(event) }

}
