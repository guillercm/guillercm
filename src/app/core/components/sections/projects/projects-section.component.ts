import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ActionButtonComponent } from '@core/components/action-button/action-button.component';
import { Project } from '@core/interfaces/config/config.interface';
import { ImgTecnologyPipe } from '@core/pipes/imgTecnology/img-tecnology.pipe';

@Component({
  selector: 'core-projects-section',
  imports: [CommonModule, ImgTecnologyPipe, ActionButtonComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {
  public projects = input.required<Project[]>();

}
