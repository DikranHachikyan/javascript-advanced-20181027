import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent }    from './contact-list/contact-list.component';
import { StaticDataSourceService } from './models/static-data-source.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StaticDataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
