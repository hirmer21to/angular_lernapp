import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HttpComponent } from './http/http.component';
import { FinishAppComponent } from './finish-app/finish-app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'environment', component: EnvironmentComponent,runGuardsAndResolvers: 'always' },
  { path: 'first-app', component: FirstAppComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'application', component: ApplicationComponent},
  { path: 'components', component: ComponentsComponent},
  { path: 'components-formmodules-directives', component: ComponentsFormmodulesDirectivesComponent},
  { path: 'reusable-components', component: ReusableComponentsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'routing', component: RoutingComponent},
  { path: 'http', component: HttpComponent},
  { path: 'finish-app', component: FinishAppComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {onSameUrlNavigation: "reload"}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
