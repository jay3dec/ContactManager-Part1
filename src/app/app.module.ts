import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactListComponent } from './contact-list/contact-list.component';
import { RootComponent } from './root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContactAddComponent } from './contact-add/contact-add.component';

@NgModule({
  declarations: [
    RootComponent,
    ContactListComponent,
    ContactAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
