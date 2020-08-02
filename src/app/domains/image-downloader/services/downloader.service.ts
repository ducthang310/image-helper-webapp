import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { RequestParamsToDownload } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(
    private http: HttpClient,
    private cfs: ConfigService,
    ) { }

  download(data?: RequestParamsToDownload): Observable<any> {
    return this.http.post<any>(this.cfs.getUrl(this.cfs.api.download, null, false), data, {
      responseType: 'arraybuffer' as 'json'});
  }
}
