import { Component, input } from '@angular/core';

@Component({
  selector: 'core-layout-section',
  imports: [],
  templateUrl: './layout-section.component.html',
  styleUrl: './layout-section.component.css'
})
export class LayoutSectionComponent {
  public title = input.required<string>();
}
