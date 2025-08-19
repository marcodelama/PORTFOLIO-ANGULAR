import { Component } from '@angular/core';

interface Experiencia {
  institucion: string;
  puesto: string;
  fecha: string;
  tareas: string[];
  logo: string;
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      institucion: 'Universidad Nacional de Ingenieria',
      puesto: 'Analista Programador Fullstack',
      fecha: 'Febrero - Actualidad',
      logo: 'https://assets.isu.pub/document-structure/230407012754-ff21425142e37b7a8247a4853b015c18/v1/9f7aa5a597580f1ec4248431465b1c7b.jpeg',
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
      logo: 'https://static.vecteezy.com/system/resources/previews/005/170/934/non_2x/shield-college-university-logo-free-vector.jpg',
      tareas: [
        'Diseñar APIs REST.',
        'Optimizar consultas SQL.',
        'Implementar autenticación JWT.',
        'Integrar sistemas externos.'
      ]
    }
  ];
}
