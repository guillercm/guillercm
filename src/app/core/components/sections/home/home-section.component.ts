import { CommonModule } from '@angular/common';
import { Component, computed, effect, ElementRef, input, signal, viewChildren } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';
import { asyncScheduler, scheduled, take, tap, timeout, timer } from 'rxjs';

@Component({
  selector: 'core-home-section',
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
  host: {
    'id': 'inicio',
    '(document:mousemove)': 'mouseMove($event)'
  }
})
export class HomeSectionComponent {
  public personalData = input.required<PersonalData>();

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first}` )

  protected mouseMove(e: MouseEvent) {

  }

}
