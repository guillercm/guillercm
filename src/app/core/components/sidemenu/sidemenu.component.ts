import { Component, inject, signal } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';
import { ItemMenu } from '@core/interfaces/menu/item-menu.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { FragmentUrlService } from '@core/services/fragmentUrl/fragment-url.service';

@Component({
  selector: 'core-sidemenu',
  imports: [ItemMenuComponent],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  host: {
    class: 'fixed w-screen z-2'
  }
})
export class SidemenuComponent {

  private _movilMenuIsOpen = signal<boolean>(false);

  private readonly _activateRoute = inject(ActivatedRoute);

  private readonly _fragmentUrlService = inject(FragmentUrlService);

  fragmentResource = rxResource({
    loader: () => {
      return this._activateRoute.fragment.pipe(
        tap(fragment => this._fragmentUrlService.setFragment(fragment))
      );
    }
  });

  jumpToSection(fragment: string | null) {
    console.log(fragment)
  }

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
    },
    {
      label: 'Certificados',
      sectionId: 'certificados'
    }
  ]

}
