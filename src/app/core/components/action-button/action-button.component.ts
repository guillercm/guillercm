import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'core-action-button',
  imports: [RouterLink],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {

  public type = input<'video' | 'preview' | 'npm' | 'github'>('github')

  public action = input<string | undefined>("");

  public titleButton = input<string>("");

}
