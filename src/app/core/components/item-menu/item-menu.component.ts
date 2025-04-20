import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { SharedClickOutsideDirective } from '@shared/directives/click-outside/shared-click-outside.directive';

@Component({
  selector: 'core-item-menu',
  imports: [CommonModule, SharedClickOutsideDirective],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.css',
  host: {
    class: 'relative'
  }
})
export class ItemMenuComponent implements OnInit {
  //   this._menuClasses.set("opacity-0 hidden translate-y-1");
  // }

  private _isOpen = signal<boolean>(false);

  protected readonly isOpen = this._isOpen.asReadonly();

  protected readonly menuClasses = computed(() =>
    this.isOpen()
      ? 'transition ease-out duration-200 opacity-100 translate-y-0'
      : 'transition ease-in duration-150 opacity-0 translate-y-1'
  )

  ngOnInit(): void {
    this.initialize();
  }

  private initialize() { }

  protected toggleMenu() {
    this._isOpen.update((value) => !value)
  }

  protected closeMenu() {
    this._isOpen.set(false);
  }

  clickOutside(clickOutside: boolean) {
    if (clickOutside) this.closeMenu();
  }

  // showMenu() {
  //   this._menuClasses.set("opacity-100 translate-y-0");
  // }

  // hideMenu() {
  //   this._menuClasses.set("opacity-0 hidden translate-y-1");
  // }
}
