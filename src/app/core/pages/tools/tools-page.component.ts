import { Component, computed, inject } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';
import { AppConfigService } from '@core/services/config/app-config.service';

@Component({
  selector: 'core-tools-page',
  imports: [],
  templateUrl: './tools-page.component.html',
  styleUrl: './tools-page.component.css'
})
export default class ToolsPageComponent {
  private readonly _appConfigService = inject(AppConfigService);

  protected readonly config = computed(() => this._appConfigService.config() )

  protected readonly personalData = computed<PersonalData>(() => this.config()!.personalData )

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first} ${this.personalData().surnames.second}` )
}
