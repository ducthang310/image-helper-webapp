import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDownloaderComponent } from './image-downloader/image-downloader.component';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [ImageDownloaderComponent],
  exports: [
    ImageDownloaderComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class ImageDownloaderModule { }
