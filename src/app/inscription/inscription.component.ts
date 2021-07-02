import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  MaxLengthValidator,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembresService } from 'src/app/admin/membres/membres.service';
import { membre } from 'src/app/admin/shared/membre';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public membres!: membre[];

  shell!: any;
  registerForm!: FormGroup;
  logerror = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private membresService: MembresService,

  ) { }

  get f() { return this.registerForm.controls; }




  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(8)]],
      Confirmpassword: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],

    });

  }

  register(data: any) {

    this.submitted = true;
    var i = 0;
    const today = new Date();
    if (this.registerForm.invalid) {
      return;
    } else {
      var login = {
        email: data.email,
        mdp: data.mdp
      }




      data.date_de_naissance = ''
      data.adresse = ''
      data.ville = ''
      data.code_postale = ''
      data.sexe = ''
      data.num_tel = ''
      data.type = ''
      data.gouvernorat = ''
      data.inscription = '1/2'
      data.role = 'client';
      data.email = data.email.toLowerCase();
      if (today.getMonth() + 1 > 9) {
        data.dateinscription =
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate();


      }
      if (today.getMonth() + 1 <= 9) {
        data.dateinscription =
          today.getFullYear() +
          '0-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate();


      }
      this.membresService.getMembres().subscribe((result) => {

        result.forEach((element) => {
          if (element.email == data.email) {
            i++;
          }
        });
        console.log(i)
        if (i > 0) {
          Swal.fire({
            html: 'Cette adresse e-mail ou vote numero de CIN correspondent déja a un utilisateur',
            icon: 'info',

            showCloseButton: true,
          });
        }















        else {
          Swal.fire({
            html: 'Bienvenue a MINDUP.',
            icon: 'success',
            timer: 1500,
            showCloseButton: true,
          });

          this.membresService.addMembre(data).subscribe()
          this.http.post('http://localhost:3000/api/login', login, { withCredentials: true }).subscribe(
            (result) => {



              this.router.navigate(['ChoixCategorie']).then(() => {
                window.location.reload();
              })






            })




























        }


      });
    }



  }
}
