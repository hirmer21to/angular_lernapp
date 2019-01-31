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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'first-app', component: FirstAppComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'application', component: ApplicationComponent},
  { path: 'components', component: ComponentsComponent},
  { path: 'app-components-formmodules-directives', component: ComponentsFormmodulesDirectivesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
