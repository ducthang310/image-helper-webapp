import { Component, OnInit } from '@angular/core';
import { ResponseHelperService } from '../../../../shared/helpers/response-helper.service';
import { CompressorService } from '../../services/compressor.service';

@Component({
  selector: 'app-image-compressor',
  templateUrl: './image-compressor.component.html',
  styleUrls: ['./image-compressor.component.scss']
})
export class ImageCompressorComponent implements OnInit {

  constructor(
    private compressorService: CompressorService,
    private responseHelper: ResponseHelperService
  ) { }

  compress(): void {
    //
  }

  ngOnInit(): void {
  }

}
