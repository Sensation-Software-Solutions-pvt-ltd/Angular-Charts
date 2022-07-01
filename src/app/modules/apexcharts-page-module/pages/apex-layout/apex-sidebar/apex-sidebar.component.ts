import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apex-sidebar',
  templateUrl: './apex-sidebar.component.html',
  styleUrls: ['./apex-sidebar.component.css']
})
export class ApexSidebarComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

}
