import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, inject, input, signal } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';
import { WINDOW } from '@core/tokens/window/window.injection-token';
import { Fish } from './interfaces/fish.interface';
import { FishComponent } from '@core/components/sections/home/components/fish/fish.component';
import { randomNumber } from '@core/helpers/functions/random.functions';
import { SocialIconComponent } from '@core/components/social-icon/social-icon.component';

@Component({
  selector: 'core-home-section',
  imports: [CommonModule, FishComponent, SocialIconComponent],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
  host: {
    'id': 'inicio'
  }
})
export class HomeSectionComponent implements AfterViewInit {

  private readonly _window = inject(WINDOW);

  private _fish = signal<Fish[]>([]);

  protected readonly fish = this._fish.asReadonly();

  public personalData = input.required<PersonalData>();

  public description = input.required<string>();

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first}` )

  ngAfterViewInit(): void {
    this.initialize();
  }

  private initialize() {
    const fish: Fish[] = [];
    let top = 10;
    let index = 0;
    while (top < 80) {
      const newFish: Fish = {
        direction: index % 2 === 0 ? 'left' : 'right',
        color: '#1a1a23',
        size: randomNumber(30, 35),
        delay: randomNumber(1, 10) / 2,
        velocity: randomNumber(6, 10),
        top
      }
      fish.push(newFish);
      top += randomNumber(4,6);
      index++;
    }
    this._fish.set(fish);
  }

}
