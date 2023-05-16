import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  component: DashboardAdminComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'applicants', component: ApplicantsComponent },

    { path: 'companies', component: CompaniesComponent },
   
    { path: 'statistics', component: StatisticsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
