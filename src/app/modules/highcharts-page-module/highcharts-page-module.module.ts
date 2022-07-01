import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsPageModuleRoutingModule } from './highcharts-page-module-routing.module';
import { HighPieChartsComponent } from './pages/high-pie-charts/high-pie-charts.component';
import { HighLineChartsComponent } from './pages/high-line-charts/high-line-charts.component';
import { HighChartHeaderComponent } from './pages/high-chart-layout/high-chart-header/high-chart-header.component';
import { HighChartFooterComponent } from './pages/high-chart-layout/high-chart-footer/high-chart-footer.component';
import { HighChartSidebarComponent } from './pages/high-chart-layout/high-chart-sidebar/high-chart-sidebar.component';
import { HighChartDashboardComponent } from './pages/high-chart-dashboard/high-chart-dashboard.component';
import { HighAreaChartsComponent } from './pages/high-area-charts/high-area-charts.component';
import { HighBarChartsComponent } from './pages/high-bar-charts/high-bar-charts.component';
import { HighColumnChartsComponent } from './pages/high-column-charts/high-column-charts.component';
import { HighMixedChartsComponent } from './pages/high-mixed-charts/high-mixed-charts.component';
import { HighChartLayoutComponent } from './pages/high-chart-layout/high-chart-layout/high-chart-layout.component';

@NgModule({
  declarations: [
    HighPieChartsComponent,
    HighLineChartsComponent,
    HighChartLayoutComponent,
    HighChartHeaderComponent,
    HighChartFooterComponent,
    HighChartSidebarComponent,
    HighChartDashboardComponent,
    HighAreaChartsComponent,
    HighBarChartsComponent,
    HighColumnChartsComponent,
    HighMixedChartsComponent
  ],
  imports: [
    CommonModule,
    HighchartsPageModuleRoutingModule
  ]
})
export class HighchartsPageModuleModule { }
