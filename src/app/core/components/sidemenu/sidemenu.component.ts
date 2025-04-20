import { Component } from '@angular/core';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

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

  public readonly sections = [
    {
      label: "Sobre mí"
    }
  ]

}
