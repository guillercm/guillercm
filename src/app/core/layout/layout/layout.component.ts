import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '@core/components/sidemenu/sidemenu.component';

@Component({
  selector: 'core-layout',
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
