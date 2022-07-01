import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-high-chart-header',
  templateUrl: './high-chart-header.component.html',
  styleUrls: ['./high-chart-header.component.css']
})
export class HighChartHeaderComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
  }

  showHideMenu() {
    this._sharedService.showHideMenu();
  }

}
