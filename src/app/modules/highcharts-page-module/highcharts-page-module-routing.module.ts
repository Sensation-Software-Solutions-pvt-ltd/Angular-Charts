import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighAreaChartsComponent } from './pages/high-area-charts/high-area-charts.component';
import { HighBarChartsComponent } from './pages/high-bar-charts/high-bar-charts.component';
import { HighChartDashboardComponent } from './pages/high-chart-dashboard/high-chart-dashboard.component';
import { HighChartLayoutComponent } from './pages/high-chart-layout/high-chart-layout/high-chart-layout.component';
import { HighColumnChartsComponent } from './pages/high-column-charts/high-column-charts.component';
import { HighLineChartsComponent } from './pages/high-line-charts/high-line-charts.component';
import { HighMixedChartsComponent } from './pages/high-mixed-charts/high-mixed-charts.component';
import { HighPieChartsComponent } from './pages/high-pie-charts/high-pie-charts.component';

const routes: Routes = [
  {
    path: '', component: HighChartLayoutComponent,
    children: [
      { path: 'dashboard', component: HighChartDashboardComponent },
      { path: 'pie-charts', component: HighPieChartsComponent },
      { path: 'line-charts', component: HighLineChartsComponent },
      { path: 'area-charts', component: HighAreaChartsComponent },
      { path: 'bar-charts', component: HighBarChartsComponent },
      { path: 'column-charts', component: HighColumnChartsComponent },
      { path: 'mixed-charts', component: HighMixedChartsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighchartsPageModuleRoutingModule { }
