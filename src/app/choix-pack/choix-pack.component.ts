import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-pack',
  templateUrl: './choix-pack.component.html',
  styleUrls: ['./choix-pack.component.css']
})
export class ChoixPackComponent implements OnInit {
  personalInformation: any;

  submitted: boolean = false;

  constructor( private router: Router) { }

  ngOnInit() { 
  }

  nextPage() {
     
          this.router.navigate(['steps/seat']);
          return;
  }
}
