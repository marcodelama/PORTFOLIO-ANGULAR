import { Component } from '@angular/core';
import type { NavbarOptions } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  activeTab: number = 0

  navbarOptions:NavbarOptions[] = [
    {title: 'Profile', value: 0},
    {title: 'Experience', value: 1},
    {title: 'Projects', value: 2},
    {title: 'Soft skills', value: 3},
    {title: 'Achievements', value: 4},
  ]
  
  setActiveTab(tab: number){
    this.activeTab = tab
  }
}
