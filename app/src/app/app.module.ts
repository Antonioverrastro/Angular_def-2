import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterService } from './shared/counter.service';
import { ShowCounterComponent } from './show-counter/show-counter.component';
import { EditCounterComponent } from './edit-counter/edit-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowCounterComponent,
    EditCounterComponent,],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
