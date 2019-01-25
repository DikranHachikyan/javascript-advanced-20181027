import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent }    from './contact-list/contact-list.component';
import { StaticDataSourceService } from './models/static-data-source.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StaticDataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
