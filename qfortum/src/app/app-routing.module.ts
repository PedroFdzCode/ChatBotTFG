import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainAppComponent } from './components/main-app/main-app.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main-app', component: MainAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
