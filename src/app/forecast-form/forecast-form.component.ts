import { Component, OnInit } from '@angular/core';

import { AsnHijackStatsRequest } from '../asn-hijack-stats-request';

@Component({
  selector: 'app-forecast-form',
  templateUrl: './forecast-form.component.html',
  styleUrls: ['./forecast-form.component.css']
})
export class ForecastFormComponent implements OnInit {
  req = new AsnHijackStatsRequest('13796', 'all');
  constructor() { }
  
  ngOnInit() {
  }

  doThing() {
    console.log(this.req);
  }
  get diagnostic() { return JSON.stringify(this.req); }

}