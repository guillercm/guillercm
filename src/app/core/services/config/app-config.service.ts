import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Config } from '@core/interfaces/config/config.interface';
import { environment } from '@environments/environments';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private readonly _httpClient = inject(HttpClient);

  private readonly _config = signal<Config | null>(null);

  public readonly config = this._config.asReadonly();

  public load() {
    return this._httpClient.get<Config>(environment.configPath).pipe(
      take(1),
      tap((config: Config) => this._config.set(config)),
      // tap((config: Config) => console.log(config)),
    )
  }

}
