import { Component, OnInit } from '@angular/core';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { MDPDialogComponent } from '../mdpdialog/mdpdialog.component';
import { NumDialogComponent } from '../num-dialog/num-dialog.component';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/storage';
import { CINUploadDialogComponent } from '../cinupload-dialog/cinupload-dialog.component';

import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {MembresService  } from 'src/app/admin/membres/membres.service';
import { membre } from 'src/app/admin/shared/membre';



@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {
  nom!: string;
  
  num_tel!: number;
  email!: string;
  cin!:number;
  adresse!:string;
  date_de_naissance!:string;
  mdp!:string;
  NomSoc!:string;
  type!:string;
  AdresseRex!:string;
  NomPrenom!: string;


  public membres!:membre[];
  dataSource!: MatTableDataSource<membre>;
  public errorMsg!: String;
  shell:any
  cont=Array()

  constructor(
    public dialog: MatDialog,
    private membresService:MembresService,
    private http:HttpClient,
    private router:Router,
    
    ) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
      this.shell=result
      this.NomPrenom = this.shell.nom + ' ' + this.shell.prenom;
    })
      

      this.membresService.getMembres().subscribe((membres:membre[])=>{
      this.membres=membres;
      this.membres.forEach(element => {
        if ( element._id == this.shell._id)
        this.cont.push(element)


  
  
          
       })
  
  
      }); 
      
      this.dataSource=new MatTableDataSource(this.cont);

  
      }
    


  
  EmailDialog(){
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      width: '400px',
      height:'195px',
      data:{
        Email:"abcde@gmail.com"
      }
    });

  }
  MDPDialog(){
    const dialogRef = this.dialog.open(MDPDialogComponent, {
      width: '500px',
      height:'350px',
      data:{MDP:"12345678"},
    });

  }
  NumDialog(){
    const dialogRef = this.dialog.open(NumDialogComponent, {
      width: '400px',
      height:'195px',
      data:{
        Num:"22113351"
      },
      panelClass: ['animate__animated','animate__backInDown']
    });
  }
  
  CINUploadDialog(){
    const dialogRef = this.dialog.open(CINUploadDialogComponent, {
      width: '390px',
      height:'360px',
      panelClass: ['animate__animated','animate__backInDown']
    });
  }
  
}
