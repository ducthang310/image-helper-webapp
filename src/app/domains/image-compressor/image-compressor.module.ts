import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCompressorComponent } from './components/image-compressor/image-compressor.component';
import { UiModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ImageCompressorComponent],
    exports: [
        ImageCompressorComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        FormsModule
    ]
})
export class ImageCompressorModule { }
