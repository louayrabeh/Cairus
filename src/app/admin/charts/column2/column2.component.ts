import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-column2',
  templateUrl: './column2.component.html',
  styleUrls: ['./column2.component.css']
})
export class Column2Component implements OnInit {

  myType = ChartType.ColumnChart

  data = [
     ['Avril',500],
     ['Mai',200],
     ['Juin',350]

  ];
  
  options = {
    width: 300,
    height :200,
    colors:['#30a5ff'],
    chartArea: {
      width: '80%',
      height:'80%'
    },
    animation: {
      duration: 1200,
      easing: 'inAndOut',
      startup: true,
      width: '100%',
      height:'100%'
  },
  legend: { position: 'right', maxLines: 3 },
  backgroundColor: { fill:'transparent' },
  textStyle: {
      fontName: 'Times-Roman',
      fontSize: 58,
      color: '#871b47',
    },

  };


  constructor() {}

  ngOnInit() {
    }
}

