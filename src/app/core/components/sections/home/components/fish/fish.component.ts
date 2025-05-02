import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, inject, input, signal } from '@angular/core';
import { Fish } from '../../interfaces/fish.interface';
import { WINDOW } from '@core/tokens/window/window.injection-token';

@Component({
  selector: 'core-fish',
  imports: [CommonModule],
  templateUrl: './fish.component.html',
  styleUrl: './fish.component.css',
  host: {
    '(window:resize)': 'resizeWindow()'
  }
})
export class FishComponent implements AfterViewInit {

  private readonly _window = inject(WINDOW);

  private _windowSize = signal<number>(0);

  public fish = input.required<Fish>();

  public containerFishStyles = computed(() => {
    return {
      'animationDelay.s': this.fish().delay,
      'animationDuration.s': this._windowSize() / (this.fish().velocity * 10),
      'top.%': this.fish().top
    }
  })

  public fishStyles = computed(() => {
    return {
      'width.px': this.fish().size,
      'color': this.fish().color
    }
  })

  ngAfterViewInit(): void {
    this.setWindowSize();
  }

  private setWindowSize() {
    this._windowSize.set(this._window.innerWidth);
  }

  public resizeWindow() {
    this.setWindowSize();
  }

}
