import { Component, input } from '@angular/core';

@Component({
  selector: 'core-layout-section',
  imports: [],
  templateUrl: './layout-section.component.html',
  styleUrl: './layout-section.component.css',
  host: {
    '[id]': 'sectionId()'
  }
})
export class LayoutSectionComponent {
  public sectionId = input.required<string>();
  public sectionTitle = input.required<string>();
}
