import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CityDetailsComponent } from './city-details/city-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  {path:'cities', component:CityComponent},
  {path:'citydetails/:id', component:CityDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
