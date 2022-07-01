import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-high-chart-sidebar',
  templateUrl: './high-chart-sidebar.component.html',
  styleUrls: ['./high-chart-sidebar.component.css']
})
export class HighChartSidebarComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

}
