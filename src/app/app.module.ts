// si existiesen, las importaciones de librerias de JavaScript irian primero **


// imports del framework de Angular va luego de librerias de JavaScript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// librerias de terceros luego de las librerias de Angular **

// por ultimo, los imports del codigo propio de nuestra aplicacion
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
