import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { Config } from '@core/interfaces/config/config.interface';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private readonly _httpClient = inject(HttpClient);

  public readonly config = toSignal<Config>(
    this._httpClient.get<Config>(environment.configPath)
  )

}
