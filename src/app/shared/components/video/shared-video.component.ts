import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'shared-video',
  imports: [CommonModule],
  templateUrl: './shared-video.component.html',
  styleUrl: './shared-video.component.css'
})
export class SharedVideoComponent {

  public controls = input<boolean>(true);

  public height = input<number>();

  public source = input.required<string>();

  public autoplay = input<boolean>(false);

  public muted = input<boolean>(false);

  public loop = input<boolean>(false);

  public poster = input<string | null>(null);

  public title = input<string>('');

  public classes = input<string>('');

  public contextmenu = input<boolean>(true);

  public videoEnded = output<void>();

  public videoStarted = output<void>();

  public videoReady = output<void>();

  public mutedFn = computed(() => this.autoplay() || this.muted() )

  protected contextMenuEvent(event: MouseEvent) {
    if (!this.contextmenu()) {
      event.preventDefault();
    }
  }
}
