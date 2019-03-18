import { Component, OnInit } from '@angular/core';

import { AsnHijackStatsRequest } from '../asn-hijack-stats-request';

@Component({
  selector: 'app-forecast-form',
  templateUrl: './forecast-form.component.html',
  styleUrls: ['./forecast-form.component.css']
})
export class ForecastFormComponent implements OnInit {
  req = new AsnHijackStatsRequest('13796', 'all');
  tableContents = '';
  constructor() { }
  
  ngOnInit() {
  }

  loadTable() {
      this.tableContents += 'a';
  }
  get diagnostic() { return JSON.stringify(this.req); }

}
