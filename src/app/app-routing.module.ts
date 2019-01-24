import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnvironmentComponent } from './environment/environment.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'first-app', component: FirstAppComponent },
  { path: 'typescript', component: TypescriptComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
