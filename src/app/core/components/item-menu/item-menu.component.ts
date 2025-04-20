import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemMenu } from '@core/interfaces/menu/item-menu.interface';

@Component({
  selector: 'core-item-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.css',
  host: {
    class: 'relative'
  }
})
export class ItemMenuComponent {

  public data = input.required<ItemMenu>();

  public type = input<'default' | 'movil'>('default');

}
