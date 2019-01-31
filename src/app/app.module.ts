import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxGridModule, IgxInputGroupModule, IgxDropDownModule, IgxFilterModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { DynamicComponentComponent } from './dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    Page1Component,
    Page2Component    
  ],
  entryComponents:[
    DynamicComponentComponent
  ],
  imports: [
    IgxGridModule,
    IgxInputGroupModule, 
    IgxDropDownModule, 
    IgxFilterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
