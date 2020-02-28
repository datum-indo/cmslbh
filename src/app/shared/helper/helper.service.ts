import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(public http: HttpClient) {}

  downloadFile(id: string): Observable<Blob> {
    return this.http.get(`http://${window.location.hostname}:3000/files/` + id, { responseType: 'blob' });
  }
}
