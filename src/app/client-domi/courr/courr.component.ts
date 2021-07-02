import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import jspdf from 'jspdf';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';




export interface courr {
  Nom:string;
  DateRec:string;
  Categorie:string;
  


}
const ELEMENT_DATA: courr[] = [
  {Nom:'NeoXam',DateRec:"20/04/2021",Categorie:'Domiciliation'},
];
@Component({
  selector: 'app-courr',
  templateUrl: './courr.component.html',
  styleUrls: ['./courr.component.css']
})
export class CourrComponent {
  displayedColumns: string[] = ['Nom','DateRec','Categorie','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  


  @ViewChild(MatSort) sort: MatSort;
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  download(element){
    const doc= new jspdf( );
    doc.text('Exemple Courrier',10,10);
    doc.save('');
    Swal.fire({
      icon: 'success',
      title: 'Exemple Courrier a été téléchargé',
      showConfirmButton: false,
      timer: 2700
    })
  }

}
