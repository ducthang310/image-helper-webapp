import { Component, OnInit } from '@angular/core';
import { ResponseHelperService } from '../../../../shared/helpers/response-helper.service';
import { CompressorService } from '../../services/compressor.service';

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
        this.downLoadFile(res, 'application/zip');
      }, errorResponse => {
        this.responseHelper.showErrorMessages(errorResponse);
      });
  }

  downLoadFile(data: any, type: string): void {
    const blob = new Blob([data], {type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }

  ngOnInit(): void {
  }

}
