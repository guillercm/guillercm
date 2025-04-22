import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FragmentUrlService {

  private _fragment = signal<string>("");

  public readonly fragment = this._fragment.asReadonly();

  public setFragment(fragment: string | null) {
    if (!fragment) fragment = "";
    this._fragment.set(fragment);
  }
}
