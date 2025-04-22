import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ItemMenu } from '@core/interfaces/menu/item-menu.interface';
import { FragmentUrlService } from '@core/services/fragmentUrl/fragment-url.service';
import { tap } from 'rxjs';

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

  private readonly _fragmentUrlService = inject(FragmentUrlService);

  public data = input.required<ItemMenu>();

  public type = input<'default' | 'movil'>('default');

  public readonly isActive = computed(() => this._fragmentUrlService.fragment() === this.data().sectionId )
}

