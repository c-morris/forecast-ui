import { Component, OnInit } from '@angular/core';

import { AsnHijackStatsRequest } from '../asn-hijack-stats-request';
import { ForecastTableService } from '../forecast-table.service';
import * as $ from 'jquery';

//const bootstrap = require('bootstrap');

@Component({
  selector: 'app-forecast-form',
  templateUrl: './forecast-form.component.html',
  styleUrls: ['./forecast-form.component.css']
})
export class ForecastFormComponent implements OnInit {
  private tableResponse: any = {};
  private policies: any = {};
  private parentIfStubAS: string = '';
  private req = new AsnHijackStatsRequest('13796', 'all');
  public objKeys = Object.keys;
  tableContents = '';
  constructor(private forecastTableService: ForecastTableService) { }
  
  ngOnInit() {
      // enable bootstrap tooltips (globally)
      // enabling them globally is probably not ideal
      // TODO: find out how to enable them only in this component
      // wait this isn't necessary at all
      //$(function () {
      //      $('[data-toggle="tooltip"]').tooltip()
      //})
  }

  /** Writes the table to the page.
    */
  writeTable() {
      // should probably find a cleaner way of doing this...
      this.policies = this.tableResponse[Object.keys(this.tableResponse)[0]];
      this.parentIfStubAS = this.policies.parent_if_stub_as;
      delete this.policies.parent_if_stub_as;
  }

  /** Load the table from the API using the forecast-table service.
    */
  loadTable(asn: number) {
      this.forecastTableService.getForecastTable(this.req.asn)
        .subscribe((data) => {
    	  this.tableResponse = data;
          this.writeTable();});
  }
  
  // debug function to print the request
  get diagnostic() { return JSON.stringify(this.req); }

}
