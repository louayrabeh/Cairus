import { Component, OnInit } from '@angular/core';
import { VidUpload } from '../models/vid-upload.model';
import { VideoServiceService } from '../services/video-service.service';

@Component({
  selector: 'app-upload-form2',
  templateUrl: './upload-form2.component.html',
  styleUrls: ['./upload-form2.component.css']
})
export class UploadForm2Component implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: VidUpload;
  percentage: number;

  constructor(private uploadService: VideoServiceService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined!;

    this.currentFileUpload = new VidUpload(file!);
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
