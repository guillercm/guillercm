import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, computed, inject, input, signal, viewChild, viewChildren } from '@angular/core';
import { PersonalData } from '@core/interfaces/config/config.interface';
import { WaterContainer } from './interfaces/water-container.interface';
import { WINDOW } from '@core/tokens/window/window.injection-token';
import { randomNumber } from '@core/helpers/functions/random.functions';
import { Fish } from './interfaces/fish.interface';

@Component({
  selector: 'core-home-section',
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css',
  host: {
    'id': 'inicio',
    '(window:resize)': 'resizeWindow()'
  }
})
export class HomeSectionComponent implements AfterViewInit {

  private readonly _window = inject(WINDOW);

  private readonly _container = viewChild<ElementRef<HTMLDivElement>>("waterContainer");

  private readonly _divFish = viewChildren("divFish");

  private _fish = signal<Fish[]>([]);

  protected readonly fish = this._fish.asReadonly();

  private _waterContainer = signal<WaterContainer>({width: 0, height: 0});

  public personalData = input.required<PersonalData>();

  public fullName = computed(() => `${this.personalData().name} ${this.personalData().surnames.first}` )

  ngAfterViewInit(): void {
    this.initialize();
  }

  private initialize() {
    this.setScreenWidth();
    // this.initializeFish();
  }

  private initializeFish() {
    const refs = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5];
    const fish: Fish[] = [];
    refs.forEach((ref: number) => {
      fish.push({
        ref,
        direction: 'right',
        topObjetive: null,
        styles: {
          left: 0,
          top: 0,
          transform: {
            rotate: 0,
            scaleX: 1
          }
        }
      })
    })
    this._fish.set(fish);
    this.fishAnimation();
  }

  private fishAnimation() {
    console.log(this._divFish())
    const speeds = {
      escape: 2,
      normal: 2
    }
    const distanceEscape = 120;
    const bounceDistance = 10;
    const allFish = this.fish();
    const animate = () => {
      const container = this._waterContainer();
      allFish.map((fish) => {
        let speed = speeds.normal;
        const { left, top } = fish.styles;

        // Lógica de cambio de dirección horizontal
        if (fish.direction === 'right') {
          if (left > (container.width - bounceDistance)) {
            fish.direction = 'left';
            fish.topObjetive = null;  // Restablecer el objetivo de Y
          }
        } else {
          if (left < bounceDistance) {
            fish.direction = 'right';
            fish.topObjetive = null;  // Restablecer el objetivo de Y
          }
        }

        // Si no hay un objetivo en el eje Y, asignamos uno aleatorio
        if (!fish.topObjetive) {
          fish.topObjetive = randomNumber(0, container.height - 150);
        }

        // Movimiento en el eje X (horizontal)
        // Determinamos la dirección y movemos hacia el objetivo
        if (fish.direction === 'right') {

          fish.styles.left += speed; // Mover hacia la derecha
        } else {
          fish.styles.left -= speed; // Mover hacia la izquierda
        }

        // Movimiento en el eje Y (vertical)
        // Calcular la diferencia entre la posición actual y el objetivo
        const yDifference = fish.topObjetive - top;
        const verticalSpeed = 1; // Velocidad de movimiento vertical

        // Mover gradualmente hacia el objetivo en Y
        if (yDifference > 0) {
          fish.styles.top += verticalSpeed; // Mover hacia abajo
        } else if (yDifference < 0) {
          fish.styles.top -= verticalSpeed; // Mover hacia arriba
        }


        // Ajustar posición según el movimiento (limitado por el contenedor)
        fish.styles.top = Math.min(Math.max(fish.styles.top, 0), container.height);

        // Devolver el pez actualizado
        return fish;
      });

      // Actualizar el estado de los peces
      this._fish.set(allFish);

      // Continuar la animación
      this._window.requestAnimationFrame(animate);
    };

    this._window.requestAnimationFrame(animate)
  }

  private setScreenWidth() {
    const element = this._container()?.nativeElement;
    if (!element) return;
    this._waterContainer.set({
      width: element.clientWidth,
      height: this._window.innerHeight
    })
    console.log(this._waterContainer())
  }

  protected resizeWindow() {
    this.setScreenWidth();
  }

  protected getStylesFish({ref, styles}: Fish) {
    return {
      'background-image': `url('static/img/home/fish/${ref}.png')`,
      'left': `${styles.left}px`,
      'top': `${styles.top}px`,
      'transform':  `scaleX(${styles.transform.scaleX}) rotate(${styles.transform.rotate}deg)`
    }
  }

}
