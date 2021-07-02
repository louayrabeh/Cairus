import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  myType = ChartType.BarChart
  data =[
    ['Avril',25,],
    ['Mai',20],
    ['Juin',30],

  ];

  options = {
    width: 310,
    height :220,
    hAxis: {maxValue:40,title:'Entreprises'},
    vAxis :{title:'Mois'},
    backgroundColor: { fill:'transparent'},
    chartArea:{width:'80%',height:'80%'},
    colors:['#a98afb'],
    animation: {
      duration: 1200,
      easing: 'inAndOut',
      startup: true
  }

  };


  constructor() {}

  ngOnInit() {
    }
}
