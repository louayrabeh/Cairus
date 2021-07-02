import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { AjouteventComponent } from '../ajoutevent/ajoutevent.component';
declare let $: any;
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent{
   
  calendarOptions: CalendarOptions = {
    selectable:true,  
    editable: true,
    initialView: 'dayGridMonth',
    
    /*dateClick: this.handleDateClick.bind(this),*/
    events: [
      { title: 'Debut contrat A85859', date: '2021-06-06',color:'blue'},
      { title: ' Visioconférence Ahmed Kazez', date: '2021-06-11',color:'red' },
      { title: 'Debut contrat A85878', date: '2021-06-13' },
      { title: ' Visioconférence Nour Namouchi', date: '2021-06-09',color:'pink'  },
      { title: ' Visioconférence Yosr Ayadi', date: '2021-06-09',color:'purple' },
      { title: 'Fin contrat A85859', date: '2021-06-09',color:'blue' },
      { title: 'Fin contrat A85878', date: '2021-07-13' },
    
    ],

  };
  constructor(public dialog: MatDialog) {}
  ajoutEventDialog(): void {
    const dialogRef = this.dialog.open(AjouteventComponent, {
      width: '300px',
      height:'450px',
    });

}
/* handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  */




  
  

}
