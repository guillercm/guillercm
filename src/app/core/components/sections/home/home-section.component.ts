import { Component, computed, input } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';

@Component({
  selector: 'core-home-section',
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
  host: {
    'id': 'inicio',
  }
})
export class HomeSectionComponent {
  public personalData = input.required<PersonalData>();

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first}` )

}
