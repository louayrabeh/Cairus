import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import jspdf from 'jspdf';
import Swal from 'sweetalert2';

export interface factures {
  Id:number;
  DateRec:string;
  Categorie:string;
  

}
const ELEMENT_DATA: factures[] = [
  {Id:1, DateRec:"20/04/2021",Categorie:'Domiciliation'},
/*  {Id:2, DateRec:"25/04/2021",Categorie:'Domiciliation'},*/

 

];


@Component({
  selector: 'app-home-client-domi',
  templateUrl: './home-client-domi.component.html',
  styleUrls: ['./home-client-domi.component.css']
})
export class HomeClientDomiComponent {

  displayedColumns: string[] = ['Id', 'DateRec','Categorie'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  download(){
    const doc= new jspdf( );
    doc.text('some text here',10,10);
    doc.save('');
    Swal.fire({
      icon: 'success',
      title: 'Votre fichier a été téléchargé',
      showConfirmButton: false,
      timer: 2700
    })
  }
}

