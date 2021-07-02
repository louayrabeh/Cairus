import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-ajoutevent',
  templateUrl: './ajoutevent.component.html',
  styleUrls: ['./ajoutevent.component.css']
})
export class AjouteventComponent implements OnInit {
  faCoffee =faCoffee;
  model:NgbDateStruct;

  ajoutSucces(){
    Swal.fire(
      'Succès!',
      'Évènement ajouté avec succès!',
      'success'
    )

  }
  constructor() { }

  ngOnInit(): void {
  }

}
