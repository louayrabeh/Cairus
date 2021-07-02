import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import { Emitters } from 'src/app/login/Emitters';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mindup';
  loggedin = false
  expert = false 
  admin = false
  client = false
  hidesidebar = false 

  A=false; 
  infoclient !: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http:HttpClient,
    private router: Router,
    ) {}

  ngOnInit ( ) { 
    
    Emitters.authEmitter.subscribe((auth:boolean)=> { 
      this.loggedin=auth
    })
    
    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result)=> {
    this.loggedin=true
    this.infoclient=result;
    if ( this.infoclient.inscription =='1/2') {
      this.hidesidebar = true 
  } 
console.log(this.infoclient.role)
    if (this.infoclient.role=='admin' ){
      this.admin=true;



    }

    if ( this.infoclient.role=='expert' ){
      this.expert = true;

    }
    
  
    if ( this.infoclient.role==='client' ){
      this.client = true;
      console.log(this.client)

    } 
  
  


    },(error)=> { 
      this.loggedin=false
  
    })
   
  
    



  }

 logout() {
    Swal.fire({
      title: 'Etes-vous sur ?',
      html: 'Voulez-vous vraiement vous deconnecter ?',

      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      showCloseButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Deconnexion',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .post(
            'http://localhost:3000/api/logout',
            {},
            { withCredentials: true }
          )
          .subscribe(() => {
            this.loggedin = false;
          });
        this.router.navigate(['login']).then(() => {
          window.location.reload();
        });
      }
    });
  }




}


