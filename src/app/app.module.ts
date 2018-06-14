import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { FormsModule }   from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio';




  import {MatIconModule} from '@angular/material/icon';

   import {MatSelectModule} from '@angular/material/select';

  
  
 
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";

import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatMomentDateModule} from '@angular/material-moment-adapter';


 import {MatMenuModule} from '@angular/material/menu';



import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
  BrowserModule,
        BrowserAnimationsModule,
  
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatMomentDateModule,
        MatDatepickerModule, 
        
        MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
MatButtonModule, MatCheckboxModule, MatTableModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
