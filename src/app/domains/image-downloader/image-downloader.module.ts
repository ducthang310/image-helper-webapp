import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDownloaderComponent } from './components/image-downloader/image-downloader.component';
import { UiModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImageDownloaderComponent],
  exports: [
    ImageDownloaderComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ]
})
export class ImageDownloaderModule { }
