import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  myType = ChartType.AreaChart
  data = [
     

    ['',3],
    ['',20],
    ['',14],
    ['',20],
    ['',13],
    ['',40],
    ['',20],


  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    width: 800,
    height :170,
    colors:['#4cc2b0'],
    hAxis: {title: 'Mois'},
    vAxis: {maxValue: 50,title:'Nbre de domiciliation'},
    backgroundColor: { fill:'transparent' },
    chartArea:{width:'80%',height:'80%'},
    animation: {
      duration: 1200,
      easing: 'inAndOut',
      startup: true
  },
  legend:{title:'asfafaf'}

  };

  constructor() {}

  ngOnInit() {
    }
}
