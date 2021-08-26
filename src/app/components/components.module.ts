import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalBarChartComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports:[
    NavbarComponent,
    HorizontalBarChartComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
