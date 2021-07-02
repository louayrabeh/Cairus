import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questiondemande',
  templateUrl: './questiondemande.component.html',
  styleUrls: ['./questiondemande.component.css']
})
export class QuestiondemandeComponent implements OnInit {

  constructor() { }
  questionSucces(){
    Swal.fire(
      'Succès!',
      'Renseignement envoyée avec succès!',
      'success'
    )
  }
  ngOnInit(): void {
  }

}
