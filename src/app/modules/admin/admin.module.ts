import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    DashboardAdminComponent,
    ApplicantsComponent,
    CompaniesComponent,
    StatisticsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ],
  exports:[RouterModule]
})
export class AdminModule { }
