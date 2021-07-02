import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
export interface PeriodicElement {
  Prenom: string;
  Nom: string;
  Email: string;
  Question:string;
  Date:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {Nom:"Bzainia", Prenom: 'Oussama', Email: 'aaaa@gmail.com',Date:'20/04/2021',Question:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a neque ac lectus ornare imperdiet ac viverra magna. Quisque a aliquet eros. Proin urna orci, tincidunt non risus eu, varius dapibus magna. Duis aliquam metus sit amet urna auctor cursus et vitae odio. In ipsum massa, posuere in lorem vel, ullamcorper aliquam velit. Maecenas augue eros, finibus id augue eget, placerat volutpat ante. In malesuada mauris et purus ullamcorper bibendum. Etiam a eleifend lectus, at pharetra urna. '},
  {Nom:"Guizani", Prenom: 'Malek',  Email: 'bbbbb@gmail.com',Date:'21/04/2021',Question:'Morbi ac quam sed nibh scelerisque tempus sit amet et augue. Proin leo odio, varius nec mattis eget, suscipit sed tortor. Proin imperdiet, felis at dictum placerat, est dolor ornare leo, a semper nisi metus fringilla elit. Donec id metus in arcu maximus fermentum. Ut eu eros ligula. Sed in velit et tellus tempus dictum. Donec vel ornare quam'}

];
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  displayedColumns: string[] = ['Nom', 'Prenom', 'Email','Date','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort) sort: MatSort;
  
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) {}

    questionDialog(selectedQuestion): void {
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      width: '480px',
      height:'650px',
      data: selectedQuestion
    });
  
}

  


}
