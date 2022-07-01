import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-high-chart-layout',
  templateUrl: './high-chart-layout.component.html',
  styleUrls: ['./high-chart-layout.component.css']
})
export class HighChartLayoutComponent implements OnInit {

  isShowMenu = false;
  constructor(private _sharedService: SharedService) {
    this._sharedService.showHideMenuSubject$.subscribe(res => {
      this.isShowMenu=(!this.isShowMenu);
    })
  }
  ngOnInit(): void {

  }

}
