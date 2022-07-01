import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./modules/landing-page-module/landing-page.module')
      .then(m => m.LandingPageModule)
  },
  {
    path: 'apex-charts',
    loadChildren: () => import('./modules/apexcharts-page-module/apexcharts-page-module.module')
      .then(m => m.ApexchartsPageModuleModule)
  },
  {
    path: 'high-charts',
    loadChildren: () => import('./modules/highcharts-page-module/highcharts-page-module.module')
      .then(m => m.HighchartsPageModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
