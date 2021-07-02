import { Component, OnInit } from '@angular/core';
import { PieceJusServService } from '../piece-jus-serv.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-piece-list',
  templateUrl: './piece-list.component.html',
  styleUrls: ['./piece-list.component.css']
})
export class PieceListComponent implements OnInit {
  fileUploads: any[];

  constructor(private uploadService: PieceJusServService) { }

  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
}
