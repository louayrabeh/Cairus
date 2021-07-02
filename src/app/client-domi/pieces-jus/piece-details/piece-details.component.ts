import { Component, Input, OnInit } from '@angular/core';
import { PieceJusServService } from '../piece-jus-serv.service';
import{PieceMod} from '../piece-mod.model'
@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html',
  styleUrls: ['./piece-details.component.css']
})
export class PieceDetailsComponent implements OnInit {
  @Input() fileUpload: PieceMod;

  constructor(private uploadService: PieceJusServService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
