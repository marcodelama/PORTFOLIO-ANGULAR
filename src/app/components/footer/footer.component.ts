import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
   styleUrl: './footer.component.css',
})
export class FooterComponent {
  links = [
    {
      icon: 'fa-brands fa-linkedin',
      name: 'Linkedin',
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
    {
      icon: 'fa-brands fa-whatsapp',
      name: 'WhatsApp',
      label: '+51 987654321',
      url: 'https://wa.me/51987654321',
    },
  ];
}
