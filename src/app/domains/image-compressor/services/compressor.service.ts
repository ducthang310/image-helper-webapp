import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompressorService {

  constructor(
    private http: HttpClient,
    private cfs: ConfigService,
  ) { }

  compress(data: FormData): Observable<any> {
    return this.http.post(this.cfs.getUrl(this.cfs.api.compress, null, false), data, {
      responseType: 'arraybuffer'});
  }
}
