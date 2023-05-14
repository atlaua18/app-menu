import { Component } from '@angular/core';
import { Observable, map, shareReplay, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
})
export class DigitalClockComponent {
  private _time$: Observable<Date> = timer(0, 1000).pipe(
    takeUntilDestroyed(),
    map(() => new Date()),
    shareReplay(1),
  );

  get time() {
    return this._time$;
  }
}
