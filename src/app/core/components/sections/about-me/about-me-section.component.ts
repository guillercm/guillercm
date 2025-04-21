import { Component, input } from '@angular/core';

@Component({
  selector: 'core-about-me-section',
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.css',
  host: {
    'id': 'sobre-mi',
  }
})
export class AboutMeSectionComponent {

  public description = input.required<string>();
}
