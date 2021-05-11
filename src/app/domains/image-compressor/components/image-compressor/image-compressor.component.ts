import { Component, OnInit } from '@angular/core';
import { ResponseHelperService } from '../../../../shared/helpers/response-helper.service';
import { CompressorService } from '../../services/compressor.service';
import { Captain } from '../../../../shared/utilities/captain';

@Component({
  selector: 'app-image-compressor',
  templateUrl: './image-compressor.component.html',
  styleUrls: ['./image-compressor.component.scss']
})
export class ImageCompressorComponent implements OnInit {
  zipFile: File;

  constructor(
    private compressorService: CompressorService,
    private responseHelper: ResponseHelperService
  ) { }

  compress(): void {
    const data = new FormData();
    data.append('file', this.zipFile);
    this.compressorService.compress(data)
      .subscribe(res => {
        Captain.downLoadFile(res, 'application/zip');
      }, errorResponse => {
        this.responseHelper.showErrorMessages(errorResponse);
      });
  }

  ngOnInit(): void {
  }

}
