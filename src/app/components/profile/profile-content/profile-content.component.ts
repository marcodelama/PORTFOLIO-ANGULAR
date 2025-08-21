import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Link, Skill } from '../../../interfaces/Perfil.interface';


@Component({
  selector: 'profile-content',
  imports: [NgFor, NgClass],
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContentComponent {
  links: Link[] = [
    {
      icon: 'fa-brands fa-linkedin',
      name: 'LinkedIn',
      label: 'https://www.linkedin.com/in/ejemplo/',
      url: 'https://www.linkedin.com/in/ejemplo/',
    },
    {
      icon: 'fa-brands fa-github',
      name: 'GitHub',
      label: 'https://github.com/ejemplo',
      url: 'https://github.com/ejemplo',
    },
    {
      icon: 'fa-brands fa-gitlab',
      name: 'GitLab',
      label: 'https://gitlab.com/ejemplo',
      url: 'https://gitlab.com/ejemplo',
    },
  ];

  skills: Skill[] = [
    { id: 1, name: 'React', icon: 'fa-brands fa-react', label: 'REACT', color: 'text-cyan-400' },
    { id: 2, name: 'Vue', icon: 'fa-brands fa-vuejs', label: 'VUE', color: 'text-green-500'},
    { id: 3, name: 'Laravel', icon: 'fa-brands fa-laravel', label: 'LARAVEL', color: 'text-red-500'},
    { id: 4, name: 'Node.js', icon: 'fa-brands fa-node-js', label: 'NODE', color: 'text-green-600'},
    { id: 5, name: 'Angular', icon: 'fa-brands fa-angular', label: 'ANGULAR', color: 'text-red-600' },
    { id: 6, name: 'SQL Developer', icon: 'fa-solid fa-database', label: 'SQL DEVELOPER', color: 'text-blue-500'},
  ];
}