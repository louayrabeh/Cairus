import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'
import { membre } from '.././admin/shared/membre'
import { Emitters } from './Emitters'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  temp!:string
  shell!:any
  LoginForm!: FormGroup;
  logerror=false
  submitted = false;  
  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private router:Router,
    private SpinnerService: NgxSpinnerService
  ){}
  get f() {
    return this.LoginForm.controls;
  }
  infoclient: any
  ngOnInit(): void {
    this.http.get ('http://localhost:3000/api/user',{withCredentials:true}).subscribe(
      (result) => {
        Emitters.authEmitter.emit(true)
        this.infoclient=result

        if (this.infoclient.role=='admin' ){
          this.router.navigate(['home']).then(() => {
            window.location.reload();
          });
        }

        if ( this.infoclient.role=='expert' ){
          this.router.navigate(['Devis']).then(() => {
            window.location.reload();
          });
        } 
      
        if ( this.infoclient.role=='client' ){
          this.router.navigate(['Contrat']).then(() => {
            window.location.reload();
          });
        }


        
      },(error) => {
        Emitters.authEmitter.emit(false)
      }
    )
       
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp : ['', Validators.required],
 
    })
}

login(data:any) {
  this.submitted = true;

  if (this.LoginForm.invalid ) {

    return;
}

 data.email=data.email.toLowerCase()
this.http.post('http://localhost:3000/api/login',this.LoginForm.value,{withCredentials:true}).subscribe(
  (result) => {
    
    this.infoclient=result
    console.log(this.infoclient)
    if (this.infoclient.role=='admin' )
      {
        this.router.navigate(['home']).then(() => {
          window.location.reload();
        });
      }
    if ( this.infoclient.role=='expert' ) {
      this.router.navigate(['devis']).then(() => {
        window.location.reload();
      });
    }
    if ( this.infoclient.role=='client' ) {
      this.router.navigate(['HomeClientDomiciliation']).then(() => {
        window.location.reload();
      });
    }
   Emitters.authEmitter.emit(true)


  },
  (error) =>{
    this.logerror=true

  }
)
}

get email(){
return this.LoginForm.get('email');
}


get mdp(){
return this.LoginForm.get('mdp');
}



}
