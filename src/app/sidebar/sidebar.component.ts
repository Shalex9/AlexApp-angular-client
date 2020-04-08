import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public menuItems: any[];
  ngOnInit() {
    // $.getScript('../../assets/js/sidebar-moving-tab.js');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
