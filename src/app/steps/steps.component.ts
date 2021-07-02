import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http'
import {MembresService  } from "../admin/membres/membres.service";
import { membre } from '../admin/shared/membre';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;
    model!:NgbDateStruct;
    isEditable = false;
    Choisir:boolean = true;
    visible:boolean = false;
    Monsieur: string="Monsieur"; 
    shell:any 
    resultat:any
    om!: String
    prenom!:String
    email!:String
    role!:String
    mdp!:String
    inscription!:String
    dateinscription!:String
    NomPrenom!:String

  
    constructor(
      private _formBuilder: FormBuilder,
      private http:HttpClient,
      private membresService:MembresService,
      private router:Router,
      ) {}
    get f() { return this.firstFormGroup.controls; }
    get ff() { return this.secondFormGroup.controls; }

 
    second ( ) 
    { 
    var form1 = this.firstFormGroup.value 
    var form2 = this.secondFormGroup.value
    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result)=> {
      this.shell=result
      
      
      this.inscription=this.shell.inscription
      this.dateinscription=this.shell.dateinscription
      form1.dateinscription=this.shell.dateinscription
      form1.inscription=this.shell.inscription
      form1.role=this.shell.role
      form1.mdp=this.shell.mdp
      form1.prenom=this.shell.prenom
      form1.nom= this.shell.nom
      form1.email = this.shell.email
      this.NomPrenom = this.shell.nom + ' ' + this.shell.prenom;

      form1.pack="pack 3"
      form1.inscription="2/2"
      
      let form = {...form1,...form2,}
      this.membresService.editMembre(form,this.shell._id).subscribe(
        (result) => {
          if (result) {
            Swal.fire({
              text: 'Votre compte a été créé avec succès',
              icon: 'success',
              showConfirmButton: false,
              timer: 1200,
            });
          } /*this.http
          .post(
            'http://localhost:3000/api/logout',
            {},
            { withCredentials: true }
          )*/
          this.router.navigate(['assistanceComp']).then(() => {
            window.location.reload();
          });
        },
        (error) => {}
      );
      /*clientservice.put(form,id)
      this.router.navigate(['login']).then(() => {
        window.location.reload();
      });*/
      console.log(form)
    } )
    
    
    }
    ngOnInit() {
      this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result)=> {
      this.resultat = result
      this.NomPrenom = this.resultat.nom + ' ' + this.resultat.prenom;

      console.log(this.resultat)
     
    } )
    
      this.firstFormGroup = this._formBuilder.group({
        forme_juridique: ['', Validators.required],
        nom_entreprise: ['', 
          Validators.required],
          residence: ['', 
          Validators.required
        ],
        residente: ['',
          Validators.required ],
          capital: ['', 
          Validators.required],
          activite: ['',
          Validators.required],

      });
      this.secondFormGroup = this._formBuilder.group({
      sexe: ['', Validators.required],
      adresse: ['', Validators.required], 
      ville: ['', Validators.required], 
      gouvernorat: ['', Validators.required],
      code_postale: ['', [Validators.required,Validators.pattern('[0-9]{4}')]],
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
      date_de_naissance: ['',Validators.required], 
      });
    }
    get NomEntreprise() {
      return this.firstFormGroup.get('NomEntreprise');
      }
  
      get ResFis() {
      return this.firstFormGroup.get('ResFis');
      }
      get Res() {
      return this.firstFormGroup.get('Res');
      }
      get Capital() {
      return this.firstFormGroup.get('Capital');
      }
      get Activ() {
      return this.firstFormGroup.get('Activ');
      }

     


}
