import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-apex-layout',
  templateUrl: './apex-layout.component.html',
  styleUrls: ['./apex-layout.component.css']
})
export class ApexLayoutComponent implements OnInit {
  isShowMenu = false;
  constructor(private _sharedService: SharedService) {
    this._sharedService.showHideMenuSubject$.subscribe(res => {
      this.isShowMenu=(!this.isShowMenu);
    })
  }
  ngOnInit(): void {

  }
}
