import { Component } from '@angular/core';
import { RequestParamsToDownload } from '../../interfaces';
import { DownloaderService } from '../../services/downloader.service';
import { AbstractControlDirective } from '@angular/forms';
import { ResponseHelperService } from '../../../../shared/helpers/response-helper.service';
import { ToastrService } from 'ngx-toastr';

interface RequestedItem {
  state: 'none' | 'processing' | 'done';
  url?: string;
}

@Component({
  selector: 'app-image-downloader',
  templateUrl: './image-downloader.component.html',
  styleUrls: ['./image-downloader.component.scss']
})
export class ImageDownloaderComponent {
  requestedItems: RequestedItem[] = [];
  params: RequestParamsToDownload = {
    url: 'https://placeimg.com/1440/720',
    number: 5,
    prefix: null
  };
  submitted: boolean;

  constructor(
    private downloaderService: DownloaderService,
    private responseHelper: ResponseHelperService,
    private toastr: ToastrService
  ) {
  }

  checkInputError(input: AbstractControlDirective): boolean {
    return input.invalid && (input.dirty || input.touched || this.submitted);
  }

  download(form: AbstractControlDirective): void {
    if (form.invalid) {
      this.toastr.error('Please check the required fields');
      return;
    }

    const requestedItem: RequestedItem = {
      state: 'processing'
    };
    this.requestedItems.push(requestedItem);
    this.downloaderService.download(this.params)
      .subscribe(res => {
        this.downLoadFile(res, 'application/zip');
        requestedItem.state = 'done';
      }, errorResponse => {
        this.responseHelper.showErrorMessages(errorResponse);
        requestedItem.state = 'none';
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

  remove(index: number): void {
    this.requestedItems.splice(index, 1);
  }
}
