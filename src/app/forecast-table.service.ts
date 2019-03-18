import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastTableService {

  constructor(private http: HttpClient) { }

  /* Return an Observable of response body. */
  getForecastTable(asn: number) {
    return this.http.get('/api/asn_hijack_stats/' + asn);
  }
}
