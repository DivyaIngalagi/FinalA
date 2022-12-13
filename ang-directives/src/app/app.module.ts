import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfElseComponent } from './if-else/if-else.component';
import { IfElseifElseComponent } from './if-elseif-else/if-elseif-else.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { StyleComponent } from './style/style.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    IfElseifElseComponent,
    SwitchComponent,
    ForComponent,
    StyleComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
