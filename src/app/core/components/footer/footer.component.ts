import { Component, computed, input } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';

@Component({
  selector: 'core-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public personalData = input.required<PersonalData>();

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first} ${this.personalData().surnames.second}` )

  public github = computed(() => this.personalData().socialNetworks.gitHub )

  public linkedin = computed(() => this.personalData().socialNetworks.linkedIn )

  public email = computed(() => this.personalData().email )

}
