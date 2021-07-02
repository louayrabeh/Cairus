import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  myType = ChartType.ColumnChart

  data = [
     ['Avril',2],
     ['Mai', 4],
     ['Juin',8]

  ];
  options = {
    width: 300,
    height :200,
    colors:['#a6a6a6'],
    vAxis : {title:'Membres'},
    chartArea: {
      width: '80%',
       height:'80%'
    },
    animation: {
      duration: 1200,
      easing: 'inAndOut',
      startup: true
  },
  backgroundColor: { fill:'transparent' },
  };


  constructor() {}

  ngOnInit() {
    }
}
