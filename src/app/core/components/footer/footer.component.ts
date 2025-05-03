import { Component, computed, input } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';
import { SocialIconComponent } from '../social-icon/social-icon.component';

@Component({
  selector: 'core-footer',
  imports: [SocialIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public personalData = input.required<PersonalData>();

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first} ${this.personalData().surnames.second}` )

}
