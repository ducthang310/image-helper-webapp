import { Component } from '@angular/core';

interface ZippedItem {
  state: 'none' | 'processing' | 'done';
  url?: string;
}

@Component({
  selector: 'app-image-downloader',
  templateUrl: './image-downloader.component.html',
  styleUrls: ['./image-downloader.component.scss']
})
export class ImageDownloaderComponent {
  zippedItems: ZippedItem[];

  constructor() {
    this.zippedItems = [
      {state: 'none'}, {state: 'processing'}, {state: 'done'}
    ];
  }
}
