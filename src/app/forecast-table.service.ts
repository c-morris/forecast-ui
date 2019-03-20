import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastTableService {

  constructor(private http: HttpClient) { }

  /* Return an Observable of response body. */
  getForecastTable(asn) {
    return this.http.get('/asn_hijack_stats/' + asn + '/all/');
  }
}
