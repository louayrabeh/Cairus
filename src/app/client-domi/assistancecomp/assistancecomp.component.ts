import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevisdemandeComponent } from '../devisdemande/devisdemande.component';
import { QuestiondemandeComponent } from '../questiondemande/questiondemande.component';

@Component({
  selector: 'app-assistancecomp',
  templateUrl: './assistancecomp.component.html',
  styleUrls: ['./assistancecomp.component.css']
})
export class AssistancecompComponent{
  constructor(public dialog: MatDialog) {}
  demandeDevisDialog(): void {
    const dialogRef = this.dialog.open(DevisdemandeComponent, {
      width: '450px',
    });
}
demandeQuestionDialog(): void {
  const dialogRef = this.dialog.open(QuestiondemandeComponent, {
    width: '450px',
  });
}
}
