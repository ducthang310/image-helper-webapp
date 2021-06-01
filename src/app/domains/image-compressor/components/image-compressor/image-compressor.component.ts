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
  loading: boolean;

  constructor(
    private compressorService: CompressorService,
    private responseHelper: ResponseHelperService
  ) { }

  compress(event: Event): void {
    const target: any = event.target;
    if (!target.files || !target.files.length) {
      return;
    }

    const data = new FormData();
    data.append('images', target.files[0]);
    this.loading = true;
    this.compressorService.compress(data)
      .subscribe(res => {
        this.loading = false;
        setTimeout(() => {
          Captain.downLoadFile(res, 'application/zip');
        }, 0);
      }, errorResponse => {
        this.loading = false;
        this.responseHelper.showErrorMessages(errorResponse);
      });
  }

  ngOnInit(): void {
  }

}
