import { Component, signal } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';
import { ItemMenu } from '@core/interfaces/menu/item-menu.interface';

@Component({
  selector: 'app-sidemenu',
  imports: [ItemMenuComponent],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  host: {
    class: 'fixed w-screen z-2'
  }
})
export class SidemenuComponent {

  private _movilMenuIsOpen = signal<boolean>(false);

  protected readonly movilMenuIsOpen = this._movilMenuIsOpen.asReadonly();

  protected openMovilMenu() {
    this._movilMenuIsOpen.set(true);
  }

  protected closeMovilMenu() {
    this._movilMenuIsOpen.set(false);
  }

  protected readonly menuItems: ItemMenu[] = [
    {
      label: 'Inicio',
      sectionId: 'inicio'
    },
    {
      label: 'Sobre mí',
      sectionId: 'sobre-mi'
    },
    {
      label: 'Proyectos',
      sectionId: 'proyectos'
    },
    {
      label: 'Tecnologías',
      sectionId: 'tecnologias'
    }
  ]

}
