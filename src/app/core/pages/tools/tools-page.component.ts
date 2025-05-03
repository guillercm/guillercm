import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SafeUrl, Title } from '@angular/platform-browser';
import { PersonalData } from '@core/interfaces/config/config.interface';
import { AppConfigService } from '@core/services/config/app-config.service';
import { ReadmyGeneratorComponent } from "./components/readmy-generator/readmy-generator.component";
import { WINDOW } from '@core/tokens/window/window.injection-token';

@Component({
  selector: 'core-tools-page',
  imports: [ReadmyGeneratorComponent],
  templateUrl: './tools-page.component.html',
  styleUrl: './tools-page.component.css'
})
export default class ToolsPageComponent implements OnInit {

  private readonly _window = inject(WINDOW);

  private readonly _title = inject(Title);

  private readonly _appConfigService = inject(AppConfigService);

  protected readonly config = computed(() => this._appConfigService.config() )

  protected readonly personalData = computed<PersonalData>(() => this.config()!.personalData )

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first} ${this.personalData().surnames.second}` )

  protected printCurriculum() {
    const originalTitle = this._title.getTitle();
    this._title.setTitle("curriculum");
    this._window.print();
    this._title.setTitle(originalTitle);
  }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    this._title
  }
}
