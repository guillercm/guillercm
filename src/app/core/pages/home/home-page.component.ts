import { Component, computed, inject } from '@angular/core';
import { AboutMeSectionComponent } from '@core/components/sections/about-me/about-me-section.component';
import { HomeSectionComponent } from '@core/components/sections/home/home-section.component';
import { AppConfigService } from '@core/services/config/app-config.service';


@Component({
  selector: 'core-home-page',
  imports: [HomeSectionComponent, AboutMeSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  host: {
    class: 'bg-primary'
  }
})
export default class HomePageComponent {

  private readonly _appConfigService = inject(AppConfigService);

  protected readonly config = computed(() => this._appConfigService.config() )

}
