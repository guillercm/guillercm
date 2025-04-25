import { InjectionToken } from '@angular/core';
// private readonly _window = inject(WINDOW);
export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    return window || new Object() as Window;
  }
});