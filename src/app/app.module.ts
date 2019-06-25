import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnvironmentComponent } from './environment/environment.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ApplicationComponent } from './application/application.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentsFormmodulesDirectivesComponent } from './components-formmodules-directives/components-formmodules-directives.component';
import { ReusableComponentsComponent } from './reusable-components/reusable-components.component';
import { ServicesComponent } from './services/services.component';
import { RoutingComponent } from './routing/routing.component';
import { FormsModule } from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { FinishAppComponent } from './finish-app/finish-app.component';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AboutComponent } from './about/about.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnvironmentComponent,
    FirstAppComponent,
    TypescriptComponent,
    ProjectOverviewComponent,
    ApplicationComponent,
    ComponentsComponent,
    ComponentsFormmodulesDirectivesComponent,
    ReusableComponentsComponent,
    ServicesComponent,
    RoutingComponent,
    HttpComponent,
    FinishAppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
