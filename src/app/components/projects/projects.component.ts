import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Stack } from '../../interfaces/Stack.interfaces';
import type { Tech } from '../../interfaces/Tech.interfaces';
import { Title } from '@angular/platform-browser';
import type { Project } from '../../interfaces/Project.interfaces';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  activeTab: Number = 0

  stackOptions: Stack[] = [
    { title: 'Frontend', icon: 'fa-code' },
    { title: 'Backend', icon: 'fa-server' },
    { title: 'FullStack', icon: 'fa-desktop' },
  ];
  
  projects: Project[] = [
    {
      id: 1,
      title: 'GetByte S.A.C.',
      description: 'Desarrollo de un sistema de gestión de ventas y clientes para una empresa de tecnología.',
      date: '10/07/2023 - 12/12/2023',
      imageUrl: '/img/LogoBregma.png',
      demoImage: 'https://via.placeholder.com/200x120?text=GetByte+Demo',
      techs: [
        { id: 1, title: 'React', url: 'https://cdn.worldvectorlogo.com/logos/react-1.svg' },
        { id: 2, title: 'PrimeReact', url: 'https://camo.githubusercontent.com/0371e755907bb28c084d89d21ccf68f7dbd95e1658dc37468b0bac80fe8c50f4/68747470733a2f2f7777772e7072696d6566616365732e6f72672f77702d636f6e74656e742f75706c6f6164732f323031372f30392f7072696d6572656163742d7472616e73706172656e742d3235302e706e67' },
        { id: 3, title: 'Laravel', url: 'https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png' },
        { id: 4, title: 'MySQL Wokbench', url: 'https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png' }
      ],
      stack: [
        { title: 'Frontend', icon: 'fa-code' },
      ],
      demoUrl: 'https://getbyte.com/demo'
    },
    {
      id: 2,
      title: 'GetByte S.A.C.',
      description: 'Desarrollo de un sistema de gestión de ventas y clientes para una empresa de tecnología.',
      date: '10/07/2023 - 12/12/2023',
      imageUrl: '/img/LogoBregma.png',
      demoImage: 'https://via.placeholder.com/200x120?text=GetByte+Demo',
      techs: [
        { id: 1, title: 'React', url: 'https://cdn.worldvectorlogo.com/logos/react-1.svg' },
        { id: 2, title: 'PrimeReact', url: 'https://camo.githubusercontent.com/0371e755907bb28c084d89d21ccf68f7dbd95e1658dc37468b0bac80fe8c50f4/68747470733a2f2f7777772e7072696d6566616365732e6f72672f77702d636f6e74656e742f75706c6f6164732f323031372f30392f7072696d6572656163742d7472616e73706172656e742d3235302e706e67' },
        { id: 3, title: 'Laravel', url: 'https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png' },
        { id: 4, title: 'MySQL Wokbench', url: 'https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png' }
      ],
      stack: [
        { title: 'Frontend', icon: 'fa-code' },
      ],
      demoUrl: 'https://getbyte.com/demo'
    },
  ];

  setActiveTab(tab: number) {
    this.activeTab = tab
  }
}
