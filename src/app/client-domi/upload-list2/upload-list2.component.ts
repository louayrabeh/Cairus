import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../services/video-service.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-list2',
  templateUrl: './upload-list2.component.html',
  styleUrls: ['./upload-list2.component.css']
})
export class UploadList2Component implements OnInit {
  fileUploads: any[];

  constructor(private uploadService: VideoServiceService) { }

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
