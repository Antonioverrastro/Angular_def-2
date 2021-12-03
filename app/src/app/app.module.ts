import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterService } from './shared/counter.service';

@NgModule({
  declarations: [
    AppComponent,],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
