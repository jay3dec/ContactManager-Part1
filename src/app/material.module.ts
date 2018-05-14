import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule,
MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
   	MatCardModule,
   	MatIconModule, 
   	MatTabsModule,
   	MatFormFieldModule,
   	MatSelectModule,
   	MatInputModule],
  exports: [MatButtonModule, 
  	MatCardModule, 
  	MatIconModule, 
  	MatTabsModule,
  	MatFormFieldModule,
  	MatSelectModule,
  	MatInputModule]
})
export class MaterialModule { }