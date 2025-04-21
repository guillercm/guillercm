import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'core-projects-section',
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
  host: {
    'id': 'proyectos',
  }
})
export class ProjectsSectionComponent {

}
