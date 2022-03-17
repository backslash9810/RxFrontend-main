import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard-main/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const DashboardRoutes = RouterModule.forChild(routes);

