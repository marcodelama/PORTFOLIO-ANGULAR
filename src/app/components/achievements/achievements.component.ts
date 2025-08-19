import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Achievements } from '../../interfaces/Achievements.interface';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsComponent {
  viewCertificate(ruta: string) {
    console.log('View certificate:', ruta);
  }

  achievements: Achievements[] = [
    {
      id: 1,
      title: 'Certificado de programación en Python Intermedio',
      description: 'Descripción',
      date: 'Junio - Julio del 2025',
      image: 'img/python_certified.png',
      university: 'UNIVERSIDAD NACIONAL DE INGENIERÍA',
      office: 'OFICINA DE TECNOLOGÍAS DE LA INFORMACIÓN',
      program: 'Programa de Inclusión Tecnológica PIT - 2025'
    },
    {
      id: 2,
      title: 'Certificado de programación en Python Intermedio',
      description: 'Descripción',
      date: 'Junio - Julio del 2025',
      image: 'img/python_certified.png',
      university: 'UNIVERSIDAD NACIONAL DE INGENIERÍA',
      office: 'OFICINA DE TECNOLOGÍAS DE LA INFORMACIÓN',
      program: 'Programa de Inclusión Tecnológica PIT - 2025'
    },
    {
      id: 3,
      title: 'Certificado de programación en Python Intermedio',
      description: 'Descripción',
      date: 'Junio - Julio del 2025',
      image: 'img/python_certified.png',
      university: 'UNIVERSIDAD NACIONAL DE INGENIERÍA',
      office: 'OFICINA DE TECNOLOGÍAS DE LA INFORMACIÓN',
      program: 'Programa de Inclusión Tecnológica PIT - 2025'
    },
    {
      id: 4,
      title: 'Certificado de programación en Python Intermedio',
      description: 'Descripción',
      date: 'Junio - Julio del 2025',
      image: 'img/python_certified.png',
      university: 'UNIVERSIDAD NACIONAL DE INGENIERÍA',
      office: 'OFICINA DE TECNOLOGÍAS DE LA INFORMACIÓN',
      program: 'Programa de Inclusión Tecnológica PIT - 2025'
    }
  ];

}
