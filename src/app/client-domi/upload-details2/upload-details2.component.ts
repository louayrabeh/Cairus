import { Component, Input, OnInit } from '@angular/core';
import { VidUpload } from '../models/vid-upload.model';
import { VideoServiceService } from '../services/video-service.service';

@Component({
  selector: 'app-upload-details2',
  templateUrl: './upload-details2.component.html',
  styleUrls: ['./upload-details2.component.css']
})
export class UploadDetails2Component implements OnInit {
  @Input() fileUpload: VidUpload;

  constructor(private uploadService: VideoServiceService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

}
