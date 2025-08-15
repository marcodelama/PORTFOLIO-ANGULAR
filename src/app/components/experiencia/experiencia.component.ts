import { Component } from '@angular/core';

interface Experiencia {
  institucion: string;
  puesto: string;
  fecha: string;
  tareas: string[];
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      institucion: 'Universidad Nacional de Ingenieria',
      puesto: 'Analista Programador Fullstack',
      fecha: 'Febrero - Actualidad',
      tareas: [
        'Develop high-quality.',
        'Optimize applications performance and scalability.',
        'Develop management web apps.',
        'Develop and integration face recognition and other web services.',
        'Build system structure applying software models (use case, class diagrams, database diagrams, etc).',
        'Database manage and build apps.',
        'Migrate PHP projects to Vuexy (template).'
      ]
    },
    {
      institucion: 'Otra Empresa',
      puesto: 'Desarrollador Backend',
      fecha: 'Enero - 2023',
      tareas: [
        'Diseñar APIs REST.',
        'Optimizar consultas SQL.',
        'Implementar autenticación JWT.',
        'Integrar sistemas externos.'
      ]
    }
  ];
}
