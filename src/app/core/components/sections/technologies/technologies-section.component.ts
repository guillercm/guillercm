import { Component, input } from '@angular/core';
import { Skill } from '@core/interfaces/config/config.interface';
import { ImgTecnologyPipe } from '@core/pipes/imgTecnology/img-tecnology.pipe';

@Component({
  selector: 'core-technologies-section',
  imports: [ImgTecnologyPipe],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.css'
})
export class TechnologiesSectionComponent {
  public skills = input.required<Skill[]>();
}
