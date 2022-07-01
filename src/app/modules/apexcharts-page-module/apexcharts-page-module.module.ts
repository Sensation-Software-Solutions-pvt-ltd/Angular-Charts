import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexchartsPageModuleRoutingModule } from './apexcharts-page-module-routing.module';
import { ApexPieChartsComponent } from './pages/apex-pie-charts/apex-pie-charts.component';
import { ApexLineChartsComponent } from './pages/apex-line-charts/apex-line-charts.component';
import { ApexHeaderComponent } from './pages/apex-layout/apex-header/apex-header.component';
import { ApexSidebarComponent } from './pages/apex-layout/apex-sidebar/apex-sidebar.component';
import { ApexFooterComponent } from './pages/apex-layout/apex-footer/apex-footer.component';
import { ApexDashboardComponent } from './pages/apex-dashboard/apex-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAreaChartsComponent } from './pages/apex-area-charts/apex-area-charts.component';
import { ApexBarChartsComponent } from './pages/apex-bar-charts/apex-bar-charts.component';
import { ApexColumnChartsComponent } from './pages/apex-column-charts/apex-column-charts.component';
import { ApexMixedChartsComponent } from './pages/apex-mixed-charts/apex-mixed-charts.component';
import { ApexLayoutComponent } from './pages/apex-layout/apex-layout/apex-layout.component';
@NgModule({
  declarations: [
    ApexPieChartsComponent,
    ApexLineChartsComponent,
    ApexLayoutComponent,
    ApexHeaderComponent,
    ApexSidebarComponent,
    ApexFooterComponent,
    ApexDashboardComponent,
    ApexAreaChartsComponent,
    ApexBarChartsComponent,
    ApexColumnChartsComponent,
    ApexMixedChartsComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    ApexchartsPageModuleRoutingModule
  ]
})
export class ApexchartsPageModuleModule { }
