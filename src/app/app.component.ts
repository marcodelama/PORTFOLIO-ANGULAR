import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import {ExperienciaComponent} from "./components/experiencia/experiencia.component"
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent, ExperienciaComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-personal';
}
