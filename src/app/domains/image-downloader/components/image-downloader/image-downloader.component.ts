import { Component } from '@angular/core';
import { RequestParamsToDownload } from '../../interfaces';
import { DownloaderService } from '../../services/downloader.service';
import { AbstractControlDirective } from '@angular/forms';
import { ResponseHelperService } from '../../../../shared/helpers/response-helper.service';
import { ToastrService } from 'ngx-toastr';
import { Captain } from '../../../../shared/utilities/captain';

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
        Captain.downLoadFile(res, 'application/zip');
        requestedItem.state = 'done';
      }, errorResponse => {
        this.responseHelper.showErrorMessages(errorResponse);
        requestedItem.state = 'none';
      });
  }

  remove(index: number): void {
    this.requestedItems.splice(index, 1);
  }
}
