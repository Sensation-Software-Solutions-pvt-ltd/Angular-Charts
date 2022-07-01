import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexAreaChartsComponent } from './pages/apex-area-charts/apex-area-charts.component';
import { ApexBarChartsComponent } from './pages/apex-bar-charts/apex-bar-charts.component';
import { ApexColumnChartsComponent } from './pages/apex-column-charts/apex-column-charts.component';
import { ApexDashboardComponent } from './pages/apex-dashboard/apex-dashboard.component';
import { ApexLayoutComponent } from './pages/apex-layout/apex-layout/apex-layout.component';
import { ApexLineChartsComponent } from './pages/apex-line-charts/apex-line-charts.component';
import { ApexMixedChartsComponent } from './pages/apex-mixed-charts/apex-mixed-charts.component';
import { ApexPieChartsComponent } from './pages/apex-pie-charts/apex-pie-charts.component';

const routes: Routes = [
  {
    path: '', component: ApexLayoutComponent,
    children: [
      { path: 'dashboard', component: ApexDashboardComponent },
      {
        path: 'pie-charts',
        component: ApexPieChartsComponent,
      },
      {
        path: 'line-charts',
        component: ApexLineChartsComponent,
      },

      {
        path: 'area-charts',
        component: ApexAreaChartsComponent,
      },

      {
        path: 'bar-charts',
        component: ApexBarChartsComponent,
      },
      {
        path: 'column-charts',
        component: ApexColumnChartsComponent,
      },

      {
        path: 'mixed-charts',
        component: ApexMixedChartsComponent,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApexchartsPageModuleRoutingModule { }
