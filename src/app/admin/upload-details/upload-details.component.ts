import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from '../models/file-upload.model';
import { VideoUploadService } from '../services/video-upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload: FileUpload;

  constructor(private uploadService: VideoUploadService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
