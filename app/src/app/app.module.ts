import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { IndexComponent } from './components/index/index.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
