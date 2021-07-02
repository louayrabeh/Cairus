import { Component, OnInit } from '@angular/core';
import { ChartType, Row } from "angular-google-charts";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  myType = ChartType.PieChart;
  

  data = [
     ['Pack1', 4,],
     ['Pack2', 6,],
     ['Pack3', 10,],
  ];
   options = {
    colors : ['#ff4081','#536dfe','#ffc260'],
    pieHole: 0.4,
    backgroundColor: { fill:'transparent' },
    legend:{alignment:'center'},
    chartArea: {
      height: "100%",
      width: "100%",
  },
  animation: {
    duration:1200,
    easing: 'inAndOut',
    startup: true
},
 

  };

  

  constructor() {}

  ngOnInit() {
    }
}
