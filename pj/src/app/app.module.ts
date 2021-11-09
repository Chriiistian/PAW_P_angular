import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCompComponent } from './name-comp/name-comp.component';
import { AsideComponent } from './aside/aside.component';
import { BasictableComponent } from './basictable/basictable.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { FooterComponent } from './footer/footer.component';
import { MapgoogleComponent } from './mapgoogle/mapgoogle.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCompComponent,
    AsideComponent,
    BasictableComponent,
    BlankComponent,
    DashboardComponent,
    Error404Component,
    FontawesomeComponent,
    FooterComponent,
    MapgoogleComponent,
    ProfileComponent,
    ServiciosComponent,
    TopbarComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
