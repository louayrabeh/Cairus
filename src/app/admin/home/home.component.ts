import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MembresService  } from "../membres/membres.service";
import { membre } from '../shared/membre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public membres!:membre[];
  totalmembre!: number;



  constructor(
    private breakpointObserver: BreakpointObserver,
    private membresService:MembresService,
    private http:HttpClient,
    private router:Router,) {}

    today = new Date();
  currentmonth!: string;
  moismembre!: number;
  domi!: number;
  creation!:number;
  moisreservation!: number;
  moisdemande!: number;
  chiffre!: number;
  chiffre2!: number;
  shell: any;

  ngOnInit(): void {

    if (this.today.getMonth() + 1 < 10) {
      this.currentmonth = (
        this.today.getFullYear() +
        '-0' +
        (this.today.getMonth() + 1)
      ).toString();
    }
    if (this.today.getMonth() + 1 >= 10) {
      this.currentmonth = (
        this.today.getFullYear() +
        '-' +
        (this.today.getMonth() + 1)
      ).toString();
    }

    this.moismembre = 0;
    this.domi=0;
    this.creation=0;

    this.membresService.getMembres().subscribe((result) => {
      this.totalmembre = result.length;

      result.forEach((element) => {
        console.log(element.dateinscription)
        if (element.dateinscription.includes(this.currentmonth)) {
          this.moismembre++;

        }
      });
      result.forEach((element2) => {
        console.log(element2.type)
        if (element2.type=="Domiciliation") {
          this.domi++;

        }
      });
      result.forEach((element3) => {
        console.log(element3.type)
        if (element3.type=="Creation") {
          this.creation++;

        }
      });
    });


console.log(this.domi)
    console.log(this.moismembre);
     console.log(this.currentmonth);


  }
  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  
}
