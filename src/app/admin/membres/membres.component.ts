import { Component,ViewChild,Inject} from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import * as $ from 'jquery';

import {MembresService  } from "./membres.service";
import { membre } from '../shared/membre';
import { mergeMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css'],
  
})
export class MembresComponent{
  
  displayedColumns: string[] = ['nom', 'prenom', 'num_tel', 'email','type','cin','actions'];
  public membres!:membre[];
  dataSource!: MatTableDataSource<membre>;
  public errorMsg!: String;
  Nom!: string;
  shell:any


  constructor(
    public dialog: MatDialog,
    private membresService:MembresService,
    private http:HttpClient,
    private router:Router,
    ) {}


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


      this.membresService.getMembres().subscribe((membres:membre[])=>{
      this.membres=membres;
      
      this.dataSource=new MatTableDataSource(membres);
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  openDialog(selectedItem:any): void {
    const dialogRef = this.dialog.open(Dialog1Component, {
      width: '650px',
      height:'570px',
      data:selectedItem
    });

}
dialogadd(): void {
  const dialogRef = this.dialog.open(Dialog2Component);
    this.dialog.afterAllClosed
      .pipe(mergeMap(() => this.membresService.getMembres()))
      .subscribe(
        (membres: membre[]) => {
          this.membres = membres;
          this.dataSource = new MatTableDataSource(membres);
        },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        }
      );

dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
});
}

Delete(selectedItem: any){
  Swal.fire({
    title: 'Etes-vous sûr?',
    text: "Cette action est irréversible!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#0190c8',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Supprimer ce membre !'
  }).then((result) => {
    if (result.isConfirmed) {
      this.membresService.deleteMembres(selectedItem._id).pipe(mergeMap(() => this.membresService.getMembres())).subscribe(
        (membres: membre []) => {
          this.membres=membres;
          this.dataSource= new MatTableDataSource(membres);
        },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        }
  
      );
      Swal.fire(
        'Deleted!',
        'Ce membre a été supprimé.',
        'success'
      )
    }
  })
}


}
