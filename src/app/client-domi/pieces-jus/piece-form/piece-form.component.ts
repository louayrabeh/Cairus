import { Component, OnInit } from '@angular/core';
import { PieceJusServService } from '../piece-jus-serv.service';
import{PieceMod} from '../piece-mod.model';

@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.css']
})
export class PieceFormComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: PieceMod;
  percentage: number;

  constructor(private uploadService: PieceJusServService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined!;

    this.currentFileUpload = new PieceMod(file!);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
