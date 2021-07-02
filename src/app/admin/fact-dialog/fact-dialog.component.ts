import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fact-dialog',
  templateUrl: './fact-dialog.component.html',
  styleUrls: ['./fact-dialog.component.css']
})
export class FactDialogComponent implements OnInit {

  constructor() { }
  model:NgbDateStruct;
  ngOnInit(): void {
  }
  FactureAlert(){
    Swal.fire(
      'Succès!',
      'Facture ajoutée avec succès!',
      'success'
    )
  }
}
