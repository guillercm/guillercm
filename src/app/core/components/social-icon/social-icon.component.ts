import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';

@Component({
  selector: 'core-social-icon',
  imports: [CommonModule],
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.css'
})
export class SocialIconComponent {

  public personalData = input.required<PersonalData>();

  public icon = input.required<'github' | 'linkedin' | 'email'| 'cv'>();

  public classes = input<string>();

  public github = computed(() => this.personalData().socialNetworks.gitHub )

  public linkedin = computed(() => this.personalData().socialNetworks.linkedIn )

  public email = computed(() => this.personalData().email )
}
