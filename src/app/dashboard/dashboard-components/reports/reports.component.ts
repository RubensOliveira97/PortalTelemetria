import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

  topcards:topcard[];

  constructor() {

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }

}
