import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCompressorComponent } from './image-compressor/image-compressor.component';

@NgModule({
    declarations: [ImageCompressorComponent],
    exports: [
        ImageCompressorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ImageCompressorModule { }
