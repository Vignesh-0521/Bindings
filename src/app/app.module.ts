import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EventComponent,
    AttributeComponent,
    ClassComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
