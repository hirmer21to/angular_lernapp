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
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
