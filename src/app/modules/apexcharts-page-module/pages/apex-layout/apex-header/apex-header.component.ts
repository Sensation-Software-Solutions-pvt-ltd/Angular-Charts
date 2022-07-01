import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-apex-header',
  templateUrl: './apex-header.component.html',
  styleUrls: ['./apex-header.component.css']
})
export class ApexHeaderComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
  }

  showHideMenu() {
    this._sharedService.showHideMenu();
  }

}
