import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailsdialogComponent } from '../detailsdialog/detailsdialog.component';


import { DonnerdialogComponent } from '../donnerdialog/donnerdialog.component';

import {DevisService  } from "src/app/Expert/devis/devis.service";

import { devis } from 'src/app/admin/shared/devis';
import { mergeMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  displayedColumns: string[] = ['Nom', 'Prenom', 'Email','Type','actions'];
  public deviss!:devis[];
  dataSource!: MatTableDataSource<devis>;
  public errorMsg!: String;
  Nom!: string;
  shell:any

  @ViewChild(MatSort) sort: MatSort;
  


  ngOnInit(): void {
    
    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
      this.shell=result
      if ( this.shell.role =='client') {
        
        this.router.navigate(['Tuto'])
      }
      else 
      if ( this.shell.role =='admin') {
        
        this.router.navigate(['membres'])
      }




    },  (error) =>{
      this.router.navigate(['login'])

    })
    
    this.devisService.getDevis().subscribe((deviss:devis[])=>{
    this.deviss=deviss;
    
    
      
    this.dataSource=new MatTableDataSource(deviss);
    });
  }

  
  
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public dialog: MatDialog,
    private devisService:DevisService,
    private http:HttpClient,
    private router:Router,) {}
  

  DetailsDialog(selectedDevis): void {
    const dialogRef = this.dialog.open(DetailsdialogComponent, {
      width: '450px',
      data: selectedDevis
    });
  
}
DonnerDialog(): void {
  const dialogRef = this.dialog.open(DonnerdialogComponent, {
    width: '450px',
  });

}
}
