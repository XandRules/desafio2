import { MatGridList } from '@angular/material/grid-list';
import { AfterContentInit, Component, ViewChild, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  grid = {
    cols: '1',
    rowHeight: 1
  }

  gridByBreakpoint = {
    xl: {cols: 2, rowHeight: 400},
    lg: {cols: 2, rowHeight: 400},
    md: {cols: 3, rowHeight: 400},
    sm: {cols: 2, rowHeight: 400},
    xs: {cols: 1, rowHeight: 400},
  }

  constructor(private observableMedia: ObservableMedia) {}


  ngOnInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid = this.gridByBreakpoint[change.mqAlias];

      console.log( this.grid)
    });
  }

}
