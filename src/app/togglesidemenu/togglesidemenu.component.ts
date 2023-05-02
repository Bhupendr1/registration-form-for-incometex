import { Component, OnInit,ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-togglesidemenu',
  templateUrl: './togglesidemenu.component.html',
  styleUrls: ['./togglesidemenu.component.scss']
})
export class TogglesidemenuComponent implements OnInit {
  showFiller = false;
  showNestedMenu = false;
  showSubNestedMenu = false;
  navList = [
    {
      heading: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      pages: []
    },
    {
      heading: 'Main Heading',
      icon: 'settings',
      link: '/settings',
      pages: [
        {
          title: 'Subpage',
          link: '/settings/advanced',
          icon: ''
        }
      ]
    }
  ]
  toggleNestedMenu() {
    this.showNestedMenu = !this.showNestedMenu;
    if (!this.showNestedMenu) {
      this.showSubNestedMenu = false;
    }
  }

  toggleSubNestedMenu() {
    this.showSubNestedMenu = !this.showSubNestedMenu;
  }
  panelOpenState = false;
  @ViewChild('select') select!: ElementRef;
  selected :string="active";
  constructor() { }

  ngOnInit(): void {
  }

  togglesidebar() {
    
    if(this.selected==="active"){
    document.getElementById('sidebar')?.classList.add('toggler');
    document.getElementById('sidebarbtn')?.classList.add('toggle-sidebar-btn_toggle');
    this.selected="inactive";
    }
    else{
    document.getElementById('sidebar')?.classList.remove('toggler');
    document.getElementById('sidebarbtn')?.classList.remove('toggle-sidebar-btn_toggle');
    this.selected="active";
    }
    // console.log(width);

  }
}
