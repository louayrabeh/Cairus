import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-secretariat',
  templateUrl: './secretariat.component.html',
  styleUrls: ['./secretariat.component.css']
})
export class SecretariatComponent implements OnInit {
  opened: boolean;
  mode = new FormControl('over');
  constructor() { }

  ngOnInit(): void {
  }

}
