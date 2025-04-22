import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AboutMeSectionComponent } from '@core/components/sections/about-me/about-me-section.component';
import { HomeSectionComponent } from '@core/components/sections/home/home-section.component';
import { LayoutSectionComponent } from '@core/components/sections/layout/layout-section.component';
import { ProjectsSectionComponent } from '@core/components/sections/projects/projects-section.component';
import { TechnologiesSectionComponent } from '@core/components/sections/technologies/technologies-section.component';
import { AppConfigService } from '@core/services/config/app-config.service';


@Component({
  selector: 'core-home-page',
  imports: [CommonModule, LayoutSectionComponent, HomeSectionComponent, AboutMeSectionComponent, ProjectsSectionComponent, TechnologiesSectionComponent],
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
