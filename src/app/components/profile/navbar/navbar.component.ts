import { Component } from '@angular/core';
import type { NavbarOptions } from '../../../interfaces/gif.interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  activeTab: number = 0

  navbarOptions:NavbarOptions[] = [
    {title: 'Profile', value: 0, route: ''},
    {title: 'Experience', value: 1, route: '/experience' },
    {title: 'Projects', value: 2, route: ''},
    {title: 'Soft skills', value: 3, route: ''},
    {title: 'Achievements', value: 4, route: ''},
  ]
  
  setActiveTab(tab: number){
    this.activeTab = tab
  }
}
