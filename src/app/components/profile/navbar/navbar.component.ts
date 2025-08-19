import { Component, HostListener } from '@angular/core';
import type { NavbarOptions } from '../../../interfaces/Navbar.interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent {
  activeTab: number = 0;
  scrolled: boolean = false;

  navbarOptions: NavbarOptions[] = [
    { title: 'Profile', value: 0, sectionId: 'profile' },
    { title: 'Experience', value: 1, sectionId: 'experience' },
    { title: 'Projects', value: 2, sectionId: 'projects' },
    { title: 'Skills', value: 3, sectionId: 'skills' },
    { title: 'Achievements', value: 4, sectionId: 'achievements' },
  ];

 @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20; 
  }

  setActiveTab(tab: number, sectionId: string) {
    this.activeTab = tab;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
