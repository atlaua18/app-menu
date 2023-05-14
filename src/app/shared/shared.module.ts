import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';

@NgModule({
  declarations: [DigitalClockComponent],
  imports: [CommonModule],
  exports: [DigitalClockComponent],
})
export class SharedModule {}
