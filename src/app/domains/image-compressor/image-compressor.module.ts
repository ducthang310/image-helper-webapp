import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCompressorComponent } from './image-compressor/image-compressor.component';
import { UiModule } from '../../shared/ui/ui.module';

@NgModule({
    declarations: [ImageCompressorComponent],
    exports: [
        ImageCompressorComponent
    ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class ImageCompressorModule { }
