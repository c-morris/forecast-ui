import { Component, OnInit } from '@angular/core';

import { AsnHijackStatsRequest } from '../asn-hijack-stats-request';
import { ForecastTableService } from '../forecast-table.service';

@Component({
  selector: 'app-forecast-form',
  templateUrl: './forecast-form.component.html',
  styleUrls: ['./forecast-form.component.css']
})
export class ForecastFormComponent implements OnInit {
  private tableResponse: any = {};
  private policies: any = {};
  private req = new AsnHijackStatsRequest('13796', 'all');
  public objKeys = Object.keys;
  tableContents = '';
  constructor(private forecastTableService: ForecastTableService) { }
  
  ngOnInit() {
  }

  writeTable() {
      this.policies = this.tableResponse[Object.keys(this.tableResponse)[0]];
  }

  loadTable(asn: number) {
      this.forecastTableService.getForecastTable(this.req.asn)
        .subscribe((data) => {
    	  this.tableResponse = data;
          this.writeTable();});
  }
  get diagnostic() { return JSON.stringify(this.req); }

}
