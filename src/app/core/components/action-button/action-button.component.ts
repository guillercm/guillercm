import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'core-action-button',
  imports: [RouterLink],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {

  public type = input<'video' | 'preview' | 'github'>('github')

  public url = input<string | undefined>("");

}
