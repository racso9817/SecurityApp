import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { RecentcommentComponent } from './dashboard-components/recent-comment/recent-comment.component';
import { NotifierComponent } from './dashboard-components/notifier/notifier/notifier.component';
import { CardsComponent } from './dashboard-components/cards/cards.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { TableCarsComponent } from './dashboard-components/table-cars/table-cars.component';
import { Dashboard4Component } from './dashboard4/dashboard4.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    NgxChartsModule,
    AgmCoreModule
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    RecentcommentComponent,
    NotifierComponent,
    CardsComponent,
    Dashboard3Component,
    TableCarsComponent,
    Dashboard4Component,
  ]
})
export class DashboardModule { }
