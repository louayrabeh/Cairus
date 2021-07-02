import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogHomeVidComponent } from '../dialog-home-vid/dialog-home-vid.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  DialogHomeVid(){
    const dialogRef = this.dialog.open(DialogHomeVidComponent, {
    });

  }

  ngOnInit(): void {
  }

}
