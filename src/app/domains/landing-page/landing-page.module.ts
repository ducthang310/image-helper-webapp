import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ImageDownloaderModule } from '../image-downloader/image-downloader.module';
import { ImageCompressorModule } from '../image-compressor/image-compressor.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ImageDownloaderModule,
    ImageCompressorModule
  ]
})
export class LandingPageModule { }
