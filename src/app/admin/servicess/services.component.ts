import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pack1DialogComponent } from '../pack1-dialog/pack1-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Service1Service  } from "./service1.service";
import { service1 } from '../shared/service1';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public services1!:service1[];
  dataSource!: MatTableDataSource<service1>;
  Nom:string;
  Prix:number;
  Description:string;
  shell:any;
  data:any;
  test1!:string

  constructor(
    public dialog: MatDialog,
    private service1Service:Service1Service,
    private http:HttpClient,
    private router:Router,) {}

  pack1Dialog(): void {



    this.service1Service.getService1().subscribe((services1:service1[])=>{
      this.data=services1
      
      const dialogRef = this.dialog.open(Pack1DialogComponent, {
        width: '650px',
        height:'420px',
        data:this.data
        
        
      
      });
  
  });
    

}
pack2Dialog(): void {
  const dialogRef = this.dialog.open(Pack1DialogComponent, {
    width: '650px',
    height:'420px',
    data:{
      Nom:'Month Pass',
      Prix:200,
      Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sapien sit amet nulla auctor hendrerit eget et lacus. Phasellus facilisis sapien quis purus lobortis posuere vel et leo. Praesent eget scelerisque lacus, et volutpat dolor. Praesent eget ornare erat. Donec vulputate libero quis massa maximus porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In fringilla sodales risus, a fermentum est bibendum ac. Vivamus urna urna, vehicula ut dui facilisis, vestibulum consequat urna. Morbi eleifend, dui id scelerisque tristique, nisl tortor dictum mi, at tincidunt magna lorem maximus elit.  '
    }
  
  });

}
pack3Dialog(): void {
  const dialogRef = this.dialog.open(Pack1DialogComponent, {
    width: '650px',
    height:'420px',
    data:{
      Nom:'Pack Etudiant',
      Prix:300,
      Description:'Mauris pretium tristique mollis. Quisque tristique cursus gravida. Vestibulum leo ipsum, commodo et porta sit amet, gravida consectetur tortor. Nullam finibus ut risus vel vestibulum. Mauris nec libero quis arcu lobortis viverra. Sed consectetur diam a dictum tristique. Phasellus a malesuada augue, sit amet convallis enim. Nulla nec pretium justo. Donec et purus nec justo eleifend fermentum sed ut tellus. Nunc quis libero est. Nam at fermentum nisi. Quisque aliquet non dui ultricies dictum.  '
    }
  
  });

}
ngOnInit(): void {

  this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
  this.shell=result
  if ( this.shell.role =='client') {
    
    this.router.navigate(['Tuto'])
  }
  else 
  if ( this.shell.role =='expert') {
    
    this.router.navigate(['devis'])
  }




},  (error) =>{
  this.router.navigate(['login'])

})


  this.service1Service.getService1().subscribe((services1:service1[])=>{
    this.data=services1
    console.log(this.data[0].nom)
    this.test1=this.data[0].nom

});
}

}
