import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componentes
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';

//services
import { CancionesService } from './providers/canciones.service';
import { HttpClientModule } from '@angular/common/http';

//pipes


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [CancionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
